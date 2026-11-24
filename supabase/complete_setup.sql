-- ====================================================================
-- منصة مكتبة محمد رمضان المعرفية الرقمية - إعداد قاعدة البيانات الشامل
-- Mohamed Ramadan Digital Library - Complete Database Schema & Seed
-- ====================================================================

-- 1. تفعيل الإضافات (Extensions)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- 2. جدول التصنيفات الشجرية (Categories)
CREATE TABLE IF NOT EXISTS public.categories (
    id TEXT PRIMARY KEY DEFAULT ('cat_' || floor(extract(epoch from now()) * 1000)::text),
    slug TEXT NOT NULL UNIQUE,
    name_ar TEXT NOT NULL,
    name_en TEXT NOT NULL,
    description_ar TEXT,
    description_en TEXT,
    parent_id TEXT REFERENCES public.categories(id) ON DELETE SET NULL,
    sort_order INTEGER NOT NULL DEFAULT 0,
    is_visible BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3. جدول المحتويات والأعمال الأكاديمية (Library Items)
CREATE TABLE IF NOT EXISTS public.items (
    id TEXT PRIMARY KEY DEFAULT ('item_' || floor(extract(epoch from now()) * 1000)::text),
    type TEXT NOT NULL CHECK (type IN ('book', 'research', 'project', 'article', 'lecture', 'literature', 'educational')),
    translation_group_id TEXT NOT NULL DEFAULT ('tg_' || floor(extract(epoch from now()) * 1000)::text),
    language TEXT NOT NULL DEFAULT 'ar' CHECK (language IN ('ar', 'en')),
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    excerpt TEXT,
    abstract TEXT,
    content TEXT,
    author TEXT NOT NULL DEFAULT 'محمد رمضان',
    cover_image_url TEXT,
    file_url TEXT,
    file_size BIGINT,
    page_count INTEGER,
    duration_seconds INTEGER,
    audio_transcript TEXT,
    category_id TEXT REFERENCES public.categories(id) ON DELETE SET NULL,
    tags TEXT[] DEFAULT '{}',
    status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published', 'scheduled', 'archived')),
    published_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    allow_download BOOLEAN NOT NULL DEFAULT true,
    allow_offline_read BOOLEAN NOT NULL DEFAULT true,
    license_type TEXT NOT NULL DEFAULT 'all_rights_reserved',
    custom_license_terms TEXT,
    reading_time_minutes INTEGER DEFAULT 5,
    table_of_contents JSONB DEFAULT '[]'::jsonb,
    
    -- بيانات التوثيق الأكاديمي
    doi TEXT,
    journal_or_publisher TEXT,
    volume TEXT,
    issue TEXT,
    pages_range TEXT,
    peer_reviewed BOOLEAN DEFAULT false,
    "references" JSONB DEFAULT '[]'::jsonb,
    is_demo BOOLEAN DEFAULT false,

    seo_title TEXT,
    seo_description TEXT,
    seo_keywords TEXT[] DEFAULT '{}',
    view_count INTEGER NOT NULL DEFAULT 0,
    download_count INTEGER NOT NULL DEFAULT 0,
    created_by TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT items_slug_lang_unique UNIQUE (slug, language)
);

-- 4. جدول رسائل التواصل الواردة (Contact Messages)
CREATE TABLE IF NOT EXISTS public.messages (
    id TEXT PRIMARY KEY DEFAULT ('msg_' || floor(extract(epoch from now()) * 1000)::text),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    category TEXT NOT NULL DEFAULT 'general',
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'in_progress', 'archived', 'replied')),
    admin_notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 5. جدول المشتركين في النشرة البريدية (Subscribers)
CREATE TABLE IF NOT EXISTS public.subscribers (
    id TEXT PRIMARY KEY DEFAULT ('sub_' || floor(extract(epoch from now()) * 1000)::text),
    email TEXT NOT NULL UNIQUE,
    language TEXT NOT NULL DEFAULT 'ar' CHECK (language IN ('ar', 'en')),
    is_confirmed BOOLEAN NOT NULL DEFAULT true,
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 6. إنشاء باكت التخزين السحابي للوسائط (Storage Bucket)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('library-media', 'library-media', true) 
ON CONFLICT (id) DO NOTHING;

-- صلاحيات باكت التخزين للوسائط والصور والملفات
DROP POLICY IF EXISTS "Public Read Media" ON storage.objects;
CREATE POLICY "Public Read Media" ON storage.objects FOR SELECT USING (bucket_id = 'library-media');

DROP POLICY IF EXISTS "Public Upload Media" ON storage.objects;
CREATE POLICY "Public Upload Media" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'library-media');

DROP POLICY IF EXISTS "Public Update Media" ON storage.objects;
CREATE POLICY "Public Update Media" ON storage.objects FOR UPDATE USING (bucket_id = 'library-media');

DROP POLICY IF EXISTS "Public Delete Media" ON storage.objects;
CREATE POLICY "Public Delete Media" ON storage.objects FOR DELETE USING (bucket_id = 'library-media');

-- 7. صلاحيات الأمان (Row Level Security - RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public Read Categories" ON public.categories;
CREATE POLICY "Public Read Categories" ON public.categories FOR SELECT USING (true);

DROP POLICY IF EXISTS "Admin Full Access Categories" ON public.categories;
CREATE POLICY "Admin Full Access Categories" ON public.categories FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Read Items" ON public.items;
CREATE POLICY "Public Read Items" ON public.items FOR SELECT USING (true);

DROP POLICY IF EXISTS "Admin Full Access Items" ON public.items;
CREATE POLICY "Admin Full Access Items" ON public.items FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Insert Messages" ON public.messages;
CREATE POLICY "Public Insert Messages" ON public.messages FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Admin Full Access Messages" ON public.messages;
CREATE POLICY "Admin Full Access Messages" ON public.messages FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public Read/Insert Subscribers" ON public.subscribers;
CREATE POLICY "Public Read/Insert Subscribers" ON public.subscribers FOR ALL USING (true) WITH CHECK (true);

-- 8. إدخال التصنيفات الأساسية (Initial Categories)
INSERT INTO public.categories (id, slug, name_ar, name_en, description_ar, description_en, sort_order)
VALUES
    ('c1', 'books', 'الكتب والمؤلفات', 'Books & Publications', 'المؤلفات والكتب التخصصية', 'Authored books and publications', 1),
    ('c2', 'research', 'البحوث والدراسات', 'Research & Studies', 'أوراق بحثية ودراسات أكاديمية محكمة', 'Academic research and studies', 2),
    ('c3', 'articles', 'المقالات الفكرية', 'Articles', 'مقالات فكرية وقراءات نقدية وثقافية', 'Intellectual articles and essays', 3),
    ('c4', 'lectures', 'المحاضرات والدروس', 'Lectures & Lessons', 'سلاسل صوتية ومحاضرات تعليمية مسموعة', 'Audio lectures and scholarly courses', 4),
    ('c5', 'literature', 'الأعمال الأدبية', 'Literary Works', 'نصوص إبداعية وروايات وقراءات أدبية', 'Creative literature, novels and texts', 5),
    ('c6', 'educational', 'المواد التعليمية', 'Educational Materials', 'حقائب تدريبية ومناهج دراسية وملخصات', 'Curricula, educational guides and summaries', 6)
ON CONFLICT (slug) DO NOTHING;

-- 9. إدخال نماذج الأعمال الأولية
INSERT INTO public.items (
    id, type, translation_group_id, language, title, slug, excerpt, abstract, content, author, 
    cover_image_url, file_url, page_count, category_id, tags, status, published_at, allow_download,
    reading_time_minutes, doi, journal_or_publisher, volume, issue, pages_range, peer_reviewed, is_demo
) VALUES 
(
    'b1', 'book', 'tg-1', 'ar', 'منهجية البحث في التراث والمعاصرة', 'research-methodology-heritage-modernity',
    'دراسة تأصيلية تبحث في طرائق التعامل مع التراث الإسلامي وتوظيفه في السياقات المعرفية المعاصرة.',
    'دراسة منهجية مقارنة تبحث في تكامل العلوم التراثية مع أدوات البحث العلمي المعاصر.',
    '<p>يمثل التراث الإنساني والإسلامي ركيزة معرفية تتطلب منهجية نقدية تجمع بين الأصالة والوعي المعاصر...</p>',
    'محمد رمضان', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf',
    14, 'c1', ARRAY['التراث', 'المناهج', 'الفكر الإسلامي'], 'published', now(), true, 45,
    NULL, 'مكتبة محمد رمضان المعرفية', NULL, NULL, NULL, true, true
),
(
    'r1', 'research', 'tg-2', 'ar', 'أثر التدوين الرقمي على أصول التوثيق العلمي', 'digital-indexing-scientific-documentation',
    'بحث محكم يستعرض التحولات المعرفية الناتجة عن الرقمنة وكيفية الحفاظ على دقة التحقيق الأكاديمي.',
    'تسعى هذه الدراسة إلى قراءة أثر التحول الرقمي على مناهج التحقيق والتوثيق، مؤكدة على أهمية تضافر المعايير الأكاديمية التراثية مع الإمكانات التقنية الحديثة لضمان سلامة المتون.',
    '<h2>ملخص البحث</h2><p>تسعى هذه الدراسة إلى قراءة أثر التحول الرقمي على مناهج التحقيق والتوثيق...</p>',
    'محمد رمضان', 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600',
    NULL, 28, 'c2', ARRAY['تحقيق النصوص', 'الرقمنة', 'دراسات علمية'], 'published', now(), true, 20,
    '10.1000/182.library.2026.01', 'مجلة الدراسات التراثية والرقمنة', '14', '2', '45-72', true, true
),
(
    'p1', 'project', 'tg-7', 'ar', 'مشروع مكنز التراث الرقمي: أرشفة وفهرسة المخطوطات النادرة', 'digital-heritage-thesaurus-project',
    'مشروع أكاديمي متكامل يهدف إلى بناء منصة دلالية مفتوحة المصدر لفهرسة المخطوطات والتحليل المعجمي التراثي.',
    'يعد مشروع مكنز التراث الرقمي مبادرة بحثية تسعى إلى توظيف تقنيات معالجة اللغة الطبيعية والويب الدلالي في خدمة الفهرسة الآلية للوثائق التراثية.',
    '<h2>أهداف المشروع</h2><p>1. بناء قاعدة بيانات معجمية موحدة للمصطلحات التراثية والمفاهيم الحضارية...</p>',
    'محمد رمضان', 'https://images.unsplash.com/photo-1507842229451-7f01be7fe70d?auto=format&fit=crop&q=80&w=600',
    NULL, NULL, 'c2', ARRAY['مشاريع بحثية', 'مكنز رقمي', 'تحقيق المخطوطات'], 'published', now(), true, 15,
    NULL, 'مبادرات ومشاريع مكتبة محمد رمضان', NULL, NULL, NULL, true, true
)
ON CONFLICT (slug, language) DO NOTHING;
