-- ====================================================================
-- دوال معالجة وبحث اللغة العربية الفائقة (Arabic Text Normalization & Search)
-- ====================================================================

-- دالة إزالة التشكيل وتطبيع الألف والياء والتاء المربوطة
CREATE OR REPLACE FUNCTION public.normalize_arabic(input_text TEXT)
RETURNS TEXT AS $$
DECLARE
    result TEXT;
BEGIN
    IF input_text IS NULL THEN
        RETURN '';
    END IF;

    result := input_text;

    -- 1. إزالة التشكيل والتنوين والشدة
    result := regexp_replace(result, '[\u064B-\u065F\u0670]', '', 'g');

    -- 2. إزالة التطويل (الكشيدة)
    result := regexp_replace(result, '\u0640', '', 'g');

    -- 3. توحيد أشكال الألف (أ, إ, آ -> ا)
    result := regexp_replace(result, '[إأآٱ]', 'ا', 'g');

    -- 4. توحيد الياء والألف المقصورة (ى -> ي)
    result := regexp_replace(result, 'ى', 'ي', 'g');

    -- 5. توحيد التاء المربوطة والهاء في أواخر الكلمات للبحث المرن (اختياري، نحافظ على التاء أو نوحدها)
    result := regexp_replace(result, 'ة', 'ه', 'g');

    RETURN lower(trim(result));
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- عمود وتحديث متجه البحث التلقائي لجدول المحتويات items
ALTER TABLE public.items ADD COLUMN IF NOT EXISTS search_vector TSVECTOR;

CREATE OR REPLACE FUNCTION public.items_search_vector_update()
RETURNS TRIGGER AS $$
BEGIN
    NEW.search_vector := 
        setweight(to_tsvector('simple', coalesce(public.normalize_arabic(NEW.title), '')), 'A') ||
        setweight(to_tsvector('simple', coalesce(public.normalize_arabic(NEW.author), '')), 'B') ||
        setweight(to_tsvector('simple', coalesce(public.normalize_arabic(NEW.excerpt), '')), 'C') ||
        setweight(to_tsvector('simple', coalesce(public.normalize_arabic(NEW.content), '')), 'D');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_items_search_vector ON public.items;
CREATE TRIGGER trigger_items_search_vector
BEFORE INSERT OR UPDATE ON public.items
FOR EACH ROW EXECUTE FUNCTION public.items_search_vector_update();

CREATE INDEX IF NOT EXISTS idx_items_search_vector ON public.items USING GIN(search_vector);

-- تحديث وتجهيز متجه البحث لصفحات الكتب في pdf_search_index
CREATE OR REPLACE FUNCTION public.pdf_search_vector_update()
RETURNS TRIGGER AS $$
BEGIN
    NEW.normalized_content := public.normalize_arabic(NEW.chunk_content);
    NEW.search_vector := to_tsvector('simple', NEW.normalized_content);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_pdf_search_vector ON public.pdf_search_index;
CREATE TRIGGER trigger_pdf_search_vector
BEFORE INSERT OR UPDATE ON public.pdf_search_index
FOR EACH ROW EXECUTE FUNCTION public.pdf_search_vector_update();
