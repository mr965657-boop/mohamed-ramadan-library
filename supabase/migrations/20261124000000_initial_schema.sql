-- ====================================================================
-- منصة مكتبة محمد رمضان المعرفية الرقمية - Mohamed Ramadan Digital Library
-- مخطط قاعدة البيانات المتكامل (Complete Database Schema & Security)
-- ====================================================================

-- 1. تفعيل الإضافات الضرورية (Extensions)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- 2. جدول ملفات المستخدمين والأدوار (Profiles & RBAC)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    role TEXT NOT NULL DEFAULT 'reader' CHECK (role IN ('super_admin', 'editor', 'author', 'translator', 'media_manager', 'reader')),
    preferred_language TEXT NOT NULL DEFAULT 'ar' CHECK (preferred_language IN ('ar', 'en')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3. جدول التصنيفات الديناميكية (Categories)
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT NOT NULL UNIQUE,
    name_ar TEXT NOT NULL,
    name_en TEXT NOT NULL,
    description_ar TEXT,
    description_en TEXT,
    parent_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    sort_order INTEGER NOT NULL DEFAULT 0,
    is_visible BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. جدول المحتوى الرئيسي للمكتبة بأقسامها الستة (Library Items)
CREATE TABLE IF NOT EXISTS public.items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type TEXT NOT NULL CHECK (type IN ('book', 'research', 'article', 'lecture', 'literature', 'educational')),
    translation_group_id UUID NOT NULL DEFAULT uuid_generate_v4(),
    language TEXT NOT NULL DEFAULT 'ar' CHECK (language IN ('ar', 'en')),
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    excerpt TEXT,
    content TEXT, -- نص المقال أو البحث أو الرواية (HTML/TipTap)
    author TEXT NOT NULL DEFAULT 'محمد رمضان',
    cover_image_url TEXT,
    file_url TEXT, -- رابط ملف الـ PDF أو التسجيل الصوتي
    file_size BIGINT,
    page_count INTEGER,
    duration_seconds INTEGER, -- مدة التسجيل الصوتي بالثواني للمحاضرات
    audio_transcript TEXT, -- التفريغ النصي الصوتي
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    tags TEXT[] DEFAULT '{}',
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'scheduled', 'archived')),
    published_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    allow_download BOOLEAN NOT NULL DEFAULT true,
    allow_offline_read BOOLEAN NOT NULL DEFAULT true,
    license_type TEXT NOT NULL DEFAULT 'all_rights_reserved' CHECK (license_type IN ('all_rights_reserved', 'read_only', 'read_and_download', 'creative_commons', 'custom')),
    custom_license_terms TEXT,
    reading_time_minutes INTEGER DEFAULT 5,
    table_of_contents JSONB DEFAULT '[]'::jsonb,
    seo_title TEXT,
    seo_description TEXT,
    seo_keywords TEXT[] DEFAULT '{}',
    view_count INTEGER NOT NULL DEFAULT 0,
    download_count INTEGER NOT NULL DEFAULT 0,
    created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT items_slug_lang_unique UNIQUE (slug, language)
);

-- 5. جدول الأجزاء والسلاسل (Item Parts / Chapters)
CREATE TABLE IF NOT EXISTS public.item_parts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    item_id UUID NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    part_number INTEGER NOT NULL DEFAULT 1,
    content TEXT,
    audio_url TEXT,
    sort_order INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 6. جدول فهرسة نصوص الكتب للبحث الشامل داخل ملفات PDF
CREATE TABLE IF NOT EXISTS public.pdf_search_index (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    item_id UUID NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
    page_number INTEGER NOT NULL,
    chunk_content TEXT NOT NULL,
    normalized_content TEXT NOT NULL,
    search_vector TSVECTOR,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_pdf_search_vector ON public.pdf_search_index USING GIN(search_vector);
CREATE INDEX IF NOT EXISTS idx_pdf_item_page ON public.pdf_search_index(item_id, page_number);

-- 7. جدول المفضلة للمستخدمين (User Favorites)
CREATE TABLE IF NOT EXISTS public.user_favorites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    item_id UUID NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT user_item_favorite_unique UNIQUE (user_id, item_id)
);

-- 8. جدول حفظ تقدم القراءة للكتب والمقالات (Reading Progress)
CREATE TABLE IF NOT EXISTS public.reading_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    item_id UUID NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
    last_page INTEGER NOT NULL DEFAULT 1,
    last_percentage NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT user_item_progress_unique UNIQUE (user_id, item_id)
);

-- 9. جدول الرسائل والتواصل مع لوحة الإدارة (Messages)
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    category TEXT NOT NULL CHECK (category IN ('books', 'research', 'teaching', 'scientific_cooperation', 'general')),
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'in_progress', 'archived', 'replied')),
    admin_notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 10. جدول النشرة البريدية (Newsletter Subscribers)
CREATE TABLE IF NOT EXISTS public.subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    language TEXT NOT NULL DEFAULT 'ar' CHECK (language IN ('ar', 'en')),
    is_confirmed BOOLEAN NOT NULL DEFAULT true,
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 11. جدول إعدادات الصفحة الرئيسية وهوية الموقع (Site Settings)
CREATE TABLE IF NOT EXISTS public.site_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ====================================================================
-- سياسات الأمان والحماية المتقدمة (Row Level Security - RLS)
-- ====================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.item_parts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pdf_search_index ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reading_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- دوال مساعدة للتحقق من الرتب (Helper Functions)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role IN ('super_admin', 'editor')
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- سياسات Profiles
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- سياسات Categories
CREATE POLICY "Categories are readable by everyone" ON public.categories FOR SELECT USING (is_visible = true OR public.is_admin());
CREATE POLICY "Admins can manage categories" ON public.categories FOR ALL USING (public.is_admin());

-- سياسات Items (المحتوى المنشور متاح للعامة فقط)
CREATE POLICY "Published items are viewable by everyone" ON public.items FOR SELECT
USING (status = 'published' OR public.is_admin());

CREATE POLICY "Authorized roles can manage items" ON public.items FOR ALL
USING (public.is_admin());

-- سياسات PDF Search Index
CREATE POLICY "PDF index is searchable for published items" ON public.pdf_search_index FOR SELECT
USING (EXISTS (SELECT 1 FROM public.items WHERE id = pdf_search_index.item_id AND status = 'published'));

-- سياسات المفضلة والتقدم
CREATE POLICY "Users manage their own favorites" ON public.user_favorites FOR ALL
USING (auth.uid() = user_id);

CREATE POLICY "Users manage their reading progress" ON public.reading_progress FOR ALL
USING (auth.uid() = user_id);

-- سياسات الرسائل والنشرة البريدية
CREATE POLICY "Anyone can submit a contact message" ON public.messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Only admins can view/manage messages" ON public.messages FOR SELECT USING (public.is_admin());
CREATE POLICY "Anyone can subscribe" ON public.subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view subscribers" ON public.subscribers FOR SELECT USING (public.is_admin());

-- سياسات إعدادات الموقع
CREATE POLICY "Site settings readable by everyone" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Only admins update site settings" ON public.site_settings FOR ALL USING (public.is_admin());
