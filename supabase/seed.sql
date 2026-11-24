-- ====================================================================
-- بيانات تجريبية معيارية أولية واضحة (Seed Data)
-- جميع البيانات تجريبية لاختبار المنصة ولا تُنسب كبيانات حقيقية للمؤلف
-- ====================================================================

-- 1. التصنيفات الافتراضية للأقسام الستة
INSERT INTO public.categories (id, slug, name_ar, name_en, description_ar, description_en, sort_order)
VALUES
    ('c1000000-0000-0000-0000-000000000001', 'books', 'الكتب والمؤلفات', 'Books & Publications', 'المؤلفات والكتب التخصصية', 'Authored books and publications', 1),
    ('c2000000-0000-0000-0000-000000000002', 'research', 'البحوث والدراسات', 'Research & Studies', 'أوراق بحثية ودراسات أكاديمية محكمة', 'Academic research and studies', 2),
    ('c3000000-0000-0000-0000-000000000003', 'articles', 'المقالات الفكرية', 'Articles', 'مقالات دورية وقراءات نقدية', 'Essays and analytical articles', 3),
    ('c4000000-0000-0000-0000-000000000004', 'lectures', 'المحاضرات والدروس', 'Lectures & Lessons', 'سلاسل صوتية ومحاضرات تعليمية', 'Audio lectures and series', 4),
    ('c5000000-0000-0000-0000-000000000005', 'literature', 'الأعمال الأدبية', 'Literary Works', 'نصوص إبداعية وروايات وقراءات أدبية', 'Creative literature and texts', 5),
    ('c6000000-0000-0000-0000-000000000006', 'educational', 'المواد التعليمية', 'Educational Materials', 'حقائب تدريبية ومناهج دراسية وملخصات', 'Curricula and educational guides', 6)
ON CONFLICT (slug) DO NOTHING;

-- 2. إعدادات الموقع الافتراضية
INSERT INTO public.site_settings (key, value)
VALUES
    ('homepage', '{
        "hero_title_ar": "مكتبة محمد رمضان المعرفية الرقمية",
        "hero_title_en": "Mohamed Ramadan Digital Library",
        "hero_bio_ar": "منصة معرفية وثقافية تجمع بين التراث الإسلامي الأصيل والرؤية المعاصرة، تتيح للقارئ والباحث الوصول إلى الكتب، والدراسات، والمقالات، والتسجيلات الصوتية في بيئة قراءة رقمية متطورة.",
        "hero_bio_en": "A digital scholarly platform bridging authentic Islamic heritage and contemporary thought, offering readers and researchers seamless access to books, academic research, articles, and lectures.",
        "author_name_ar": "محمد رمضان",
        "author_name_en": "Mohamed Ramadan",
        "author_title_ar": "باحث ومؤلف",
        "author_title_en": "Scholar & Author",
        "sections_order": ["books", "research", "articles", "lectures", "literature", "educational"]
    }'::jsonb)
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
