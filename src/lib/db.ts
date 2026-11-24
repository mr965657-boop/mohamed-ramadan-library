import { supabase, isSupabaseConfigured } from './supabase';
import type { Item, Category, ContactMessage, Subscriber, ItemType } from '../types/database';

// تطبيع نصوص البحث العربية برمجياً للمطابقة المرنة
export function normalizeArabicText(str: string): string {
  if (!str) return '';
  return str
    .replace(/[\u064B-\u065F\u0670]/g, '') // إزالة التشكيل
    .replace(/\u0640/g, '') // إزالة التطويل
    .replace(/[إأآٱ]/g, 'ا') // توحيد الألف
    .replace(/ى/g, 'ي') // توحيد الياء
    .replace(/ة/g, 'ه') // توحيد التاء المربوطة
    .trim()
    .toLowerCase();
}

// بيانات تجريبية معيارية أولية (Sample Initial Data) تعمل فورياً وتُستبدل بـ Supabase عند الربط
const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'c1',
    slug: 'books',
    name_ar: 'الكتب والمؤلفات',
    name_en: 'Books & Publications',
    description_ar: 'المؤلفات والكتب التخصصية والمصنفات',
    description_en: 'Authored books and publications',
    parent_id: null,
    sort_order: 1,
    is_visible: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 'c2',
    slug: 'research',
    name_ar: 'البحوث والدراسات',
    name_en: 'Research & Studies',
    description_ar: 'أوراق بحثية ودراسات علمية محكمة',
    description_en: 'Academic research and studies',
    parent_id: null,
    sort_order: 2,
    is_visible: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 'c3',
    slug: 'articles',
    name_ar: 'المقالات الفكرية',
    name_en: 'Articles',
    description_ar: 'مقالات فكرية وقراءات نقدية وثقافية',
    description_en: 'Intellectual articles and essays',
    parent_id: null,
    sort_order: 3,
    is_visible: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 'c4',
    slug: 'lectures',
    name_ar: 'المحاضرات والدروس',
    name_en: 'Lectures & Lessons',
    description_ar: 'سلاسل صوتية ومحاضرات تعليمية مسموعة',
    description_en: 'Audio lectures and scholarly courses',
    parent_id: null,
    sort_order: 4,
    is_visible: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 'c5',
    slug: 'literature',
    name_ar: 'الأعمال الأدبية',
    name_en: 'Literary Works',
    description_ar: 'نصوص إبداعية وروايات وقراءات أدبية',
    description_en: 'Creative literature, novels and texts',
    parent_id: null,
    sort_order: 5,
    is_visible: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 'c6',
    slug: 'educational',
    name_ar: 'المواد التعليمية',
    name_en: 'Educational Materials',
    description_ar: 'حقائب تدريبية ومناهج دراسية وملخصات',
    description_en: 'Curricula, educational guides and summaries',
    parent_id: null,
    sort_order: 6,
    is_visible: true,
    created_at: new Date().toISOString(),
  },
];

// بيانات استرشادية واضحة (Sample Items)
const INITIAL_ITEMS: Item[] = [
  {
    id: 'b1',
    type: 'book',
    translation_group_id: 'tg-1',
    language: 'ar',
    title: 'منهجية البحث في التراث والمعاصرة (كتاب تجريبي)',
    slug: 'research-methodology-heritage-modernity',
    excerpt: 'دراسة تأصيلية تبحث في طرائق التعامل مع التراث الإسلامي وتوظيفه في السياقات المعرفية المعاصرة.',
    content: '<p>يمثل التراث الإنساني والإسلامي ركيزة معرفية تتطلب منهجية نقدية تجمع بين الأصالة والوعي المعاصر...</p>',
    author: 'محمد رمضان',
    cover_image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    file_url: 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf',
    file_size: 1048576,
    page_count: 14,
    duration_seconds: null,
    audio_transcript: null,
    category_id: 'c1',
    tags: ['التراث', 'المناهج', 'الفكر الإسلامي'],
    status: 'published',
    published_at: '2026-01-15T10:00:00Z',
    allow_download: true,
    allow_offline_read: true,
    license_type: 'read_and_download',
    custom_license_terms: null,
    reading_time_minutes: 45,
    table_of_contents: [
      { title: 'المقدمة والمدخل المنهجي', page: 1 },
      { title: 'الفصل الأول: معالم الأصالة', page: 5 },
      { title: 'الفصل الثاني: متطلبات العصر', page: 10 },
      { title: 'الخاتمة والنتائج', page: 13 },
    ],
    seo_title: 'منهجية البحث في التراث والمعاصرة | مكتبة محمد رمضان',
    seo_description: 'كتاب يبحث في طرائق التعامل مع التراث الإسلامي في السياقات المعاصرة.',
    seo_keywords: ['تراث', 'معاصرة', 'بحث علمي', 'محمد رمضان'],
    view_count: 1240,
    download_count: 312,
    created_by: null,
    created_at: '2026-01-15T10:00:00Z',
    updated_at: '2026-01-15T10:00:00Z',
  },
  {
    id: 'r1',
    type: 'research',
    translation_group_id: 'tg-2',
    language: 'ar',
    title: 'أثر التدوين الرقمي على أصول التوثيق العلمي (دراسة تجريبية)',
    slug: 'digital-indexing-scientific-documentation',
    excerpt: 'بحث محكم يستعرض التحولات المعرفية الناتجة عن الرقمنة وكيفية الحفاظ على دقة التحقيق الأكاديمي.',
    content: '<h2>ملخص البحث</h2><p>تسعى هذه الدراسة إلى قراءة أثر التحول الرقمي على مناهج التحقيق والتوثيق، مؤكدة على أهمية تضافر المعايير الأكاديمية التراثية مع الإمكانات التقنية الحديثة لضمان سلامة المتون.</p><h3>المبحث الأول: معايير التحقيق</h3><p>تستند أسس التحقيق العلمي إلى مقابلة النسخ الخطية وحفظ الفروق، وهو ما ييسره الحاسوب اليوم عبر خوارزميات المقارنة البصرية والنصية.</p>',
    author: 'محمد رمضان',
    cover_image_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600',
    file_url: null,
    file_size: null,
    page_count: 28,
    duration_seconds: null,
    audio_transcript: null,
    category_id: 'c2',
    tags: ['تحقيق النصوص', 'الرقمنة', 'دراسات علمية'],
    status: 'published',
    published_at: '2026-02-01T12:00:00Z',
    allow_download: true,
    allow_offline_read: true,
    license_type: 'all_rights_reserved',
    custom_license_terms: null,
    reading_time_minutes: 20,
    table_of_contents: [],
    seo_title: 'أثر التدوين الرقمي على التوثيق العلمي | مكتبة محمد رمضان',
    seo_description: 'بحث أكاديمي يستعرض التحولات المعرفية الناتجة عن الرقمنة في التوثيق العلمي.',
    seo_keywords: ['رقمنة', 'توثيق', 'بحث محكم'],
    view_count: 850,
    download_count: 140,
    created_by: null,
    created_at: '2026-02-01T12:00:00Z',
    updated_at: '2026-02-01T12:00:00Z',
  },
  {
    id: 'a1',
    type: 'article',
    translation_group_id: 'tg-3',
    language: 'ar',
    title: 'في فلسفة القراءة المعمقة في عصر السرعة (مقال تجريبي)',
    slug: 'philosophy-of-deep-reading',
    excerpt: 'تأملات حول أهمية القراءة الصبورة ومقاومة التشتت المعرفي الناتج عن تدفق المعلومات الرقمية.',
    content: '<p>لم تعد القراءة مجرد نشاط ترفيهي أو تحصيل للمعلومات المباشرة، بل غدت اليوم ممارسة للمقاومة الذهنية ضد سطوة الإشعارات والسرعة الفائقة.</p><p>إن استعادة فضاء التأمل تتطلب منا بناء عادات قرائية تحترم عمق الفكرة، وتمنح العقل فرصة المحاورة الهادئة مع النص المكتوب.</p>',
    author: 'محمد رمضان',
    cover_image_url: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600',
    file_url: null,
    file_size: null,
    page_count: null,
    duration_seconds: null,
    audio_transcript: null,
    category_id: 'c3',
    tags: ['فلسفة', 'القراءة', 'فكر وثقافة'],
    status: 'published',
    published_at: '2026-02-10T14:30:00Z',
    allow_download: false,
    allow_offline_read: true,
    license_type: 'read_only',
    custom_license_terms: null,
    reading_time_minutes: 6,
    table_of_contents: [],
    seo_title: 'في فلسفة القراءة المعمقة | مكتبة محمد رمضان',
    seo_description: 'مقال فكري حول استعادة التركيز وعمق القراءة في عصر التدفق المعرفي السريع.',
    seo_keywords: ['قراءة', 'فكر', 'تأمل'],
    view_count: 2150,
    download_count: 0,
    created_by: null,
    created_at: '2026-02-10T14:30:00Z',
    updated_at: '2026-02-10T14:30:00Z',
  },
  {
    id: 'l1',
    type: 'lecture',
    translation_group_id: 'tg-4',
    language: 'ar',
    title: 'مدخل إلى علوم المخطوطات والتحقيق الأكاديمي (محاضرة صوتية)',
    slug: 'introduction-manuscript-studies',
    excerpt: 'تسجيل صوتي يشرح المبادئ الأولية للتعامل مع المخطوط العربي، خطوطه، أحباره، وطرق صيانته وقراءته.',
    content: '<p>محاضرة شاملة موجهة لطلاب الدراسات العليا والباحثين في التراث العربي والإسلامي.</p>',
    author: 'محمد رمضان',
    cover_image_url: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=600',
    file_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    file_size: 4194304,
    page_count: null,
    duration_seconds: 372, // 6:12 min
    audio_transcript: 'بسم الله الرحمن الرحيم، نلتقي اليوم في المحاضرة الأولى حول علوم المخطوطات والتحقيق العلمي الرصين...',
    category_id: 'c4',
    tags: ['صوتيات', 'مخطوطات', 'محاضرات'],
    status: 'published',
    published_at: '2026-02-15T09:00:00Z',
    allow_download: true,
    allow_offline_read: true,
    license_type: 'read_and_download',
    custom_license_terms: null,
    reading_time_minutes: 10,
    table_of_contents: [],
    seo_title: 'محاضرة: مدخل إلى علوم المخطوطات | مكتبة محمد رمضان',
    seo_description: 'محاضرة مسموعة تشرح مبادئ دراسة المخطوطات العربية وتحقيقها.',
    seo_keywords: ['محاضرة صوتية', 'مخطوطات', 'علوم التراث'],
    view_count: 1480,
    download_count: 420,
    created_by: null,
    created_at: '2026-02-15T09:00:00Z',
    updated_at: '2026-02-15T09:00:00Z',
  },
  {
    id: 'lit1',
    type: 'literature',
    translation_group_id: 'tg-5',
    language: 'ar',
    title: 'أطياف من زمن الأندلس (نص أدبي تجريبي)',
    slug: 'echoes-of-andalus',
    excerpt: 'لوحات سردية ونصوص أدبية تستحضر روح غرناطة وقرطبة بأسلوب شعري تأملي.',
    content: '<h2>الفصل الأول: شرفات الحمراء</h2><p>كان المساء يهبط هادئاً على أسطح غرناطة، تهمس السواقي بحكايات الذين عبروا وتركوا نقشاً على الجدار لا يمحوه الزمن...</p>',
    author: 'محمد رمضان',
    cover_image_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
    file_url: null,
    file_size: null,
    page_count: null,
    duration_seconds: null,
    audio_transcript: null,
    category_id: 'c5',
    tags: ['أدب', 'سرد', 'الأندلس'],
    status: 'published',
    published_at: '2026-02-18T16:00:00Z',
    allow_download: false,
    allow_offline_read: true,
    license_type: 'all_rights_reserved',
    custom_license_terms: null,
    reading_time_minutes: 8,
    table_of_contents: [],
    seo_title: 'أطياف من زمن الأندلس | مكتبة محمد رمضان',
    seo_description: 'نصوص سردية أدبية تستحضر عبق الحضارة الأندلسية وفنونها.',
    seo_keywords: ['أدب', 'نصوص إبداعية', 'الأندلس'],
    view_count: 980,
    download_count: 0,
    created_by: null,
    created_at: '2026-02-18T16:00:00Z',
    updated_at: '2026-02-18T16:00:00Z',
  },
  {
    id: 'e1',
    type: 'educational',
    translation_group_id: 'tg-6',
    language: 'ar',
    title: 'دليل مهارات الباحث الأكاديمي (مادة تعليمية تجريبية)',
    slug: 'academic-researcher-skills-guide',
    excerpt: 'حقيبة تعليمية مكثفة تلخص أدوات الباحث المعاصر، وكيفية بناء الفرضيات وتوثيق المصادر بدقة.',
    content: '<h2>الوحدة التعليمية الأولى: بناء الخطة</h2><p>يشترط في البحث الأكاديمي المتزن تحديد المشكلة بوضوح، وصياغة التساؤلات الرئيسة التي تقود استقراء المادة العلمية.</p>',
    author: 'محمد رمضان',
    cover_image_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
    file_url: null,
    file_size: null,
    page_count: 36,
    duration_seconds: null,
    audio_transcript: null,
    category_id: 'c6',
    tags: ['تعليم', 'مهارات بحثية', 'حقائب تدريبية'],
    status: 'published',
    published_at: '2026-02-20T11:00:00Z',
    allow_download: true,
    allow_offline_read: true,
    license_type: 'read_and_download',
    custom_license_terms: null,
    reading_time_minutes: 30,
    table_of_contents: [],
    seo_title: 'دليل مهارات الباحث الأكاديمي | مكتبة محمد رمضان',
    seo_description: 'مادة تعليمية تطبيقية تشرح أدوات البحث العلمي للطلاب والباحثين.',
    seo_keywords: ['حقيبة تعليمية', 'مهارات بحثية', 'أكاديميا'],
    view_count: 1720,
    download_count: 530,
    created_by: null,
    created_at: '2026-02-20T11:00:00Z',
    updated_at: '2026-02-20T11:00:00Z',
  },
  // النسخ الإنجليزية (English Publications)
  {
    id: 'b1_en',
    type: 'book',
    translation_group_id: 'tg-1',
    language: 'en',
    title: 'Research Methodology in Heritage and Modernity (Sample Book)',
    slug: 'research-methodology-heritage-modernity',
    excerpt: 'A foundational study examining methods of engaging with Islamic classical heritage in contemporary intellectual settings.',
    content: '<p>Human and Islamic heritage constitutes a foundational cognitive framework that demands a rigorous methodology bridging authentic traditions with contemporary consciousness...</p>',
    author: 'Mohamed Ramadan',
    cover_image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    file_url: 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf',
    file_size: 1048576,
    page_count: 14,
    duration_seconds: null,
    audio_transcript: null,
    category_id: 'c1',
    tags: ['Heritage', 'Methodology', 'Islamic Thought'],
    status: 'published',
    published_at: '2026-01-15T10:00:00Z',
    allow_download: true,
    allow_offline_read: true,
    license_type: 'read_and_download',
    custom_license_terms: null,
    reading_time_minutes: 45,
    table_of_contents: [
      { title: 'Introduction and Methodological Scope', page: 1 },
      { title: 'Chapter I: Landmarks of Authenticity', page: 5 },
      { title: 'Chapter II: Modern Horizons', page: 10 },
      { title: 'Conclusion and Findings', page: 13 },
    ],
    seo_title: 'Research Methodology in Heritage and Modernity | Mohamed Ramadan Library',
    seo_description: 'A scholarly study examining methods of engaging with Islamic classical heritage in modern contexts.',
    seo_keywords: ['heritage', 'modernity', 'research methodology', 'Mohamed Ramadan'],
    view_count: 940,
    download_count: 210,
    created_by: null,
    created_at: '2026-01-15T10:00:00Z',
    updated_at: '2026-01-15T10:00:00Z',
  },
  {
    id: 'r1_en',
    type: 'research',
    translation_group_id: 'tg-2',
    language: 'en',
    title: 'The Impact of Digital Indexing on Scientific Documentation',
    slug: 'digital-indexing-scientific-documentation',
    excerpt: 'Peer-reviewed research exploring digital epistemological shifts and the preservation of academic rigor in manuscript editing.',
    content: '<h2>Abstract</h2><p>This paper examines the influence of digital transformation on manuscript verification methodologies, emphasizing the harmonization of classical academic standards with computational capabilities.</p>',
    author: 'Mohamed Ramadan',
    cover_image_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600',
    file_url: null,
    file_size: null,
    page_count: 28,
    duration_seconds: null,
    audio_transcript: null,
    category_id: 'c2',
    tags: ['Manuscripts', 'Digital Humanities', 'Academic Research'],
    status: 'published',
    published_at: '2026-02-01T12:00:00Z',
    allow_download: true,
    allow_offline_read: true,
    license_type: 'all_rights_reserved',
    custom_license_terms: null,
    reading_time_minutes: 20,
    table_of_contents: [],
    seo_title: 'The Impact of Digital Indexing on Scientific Documentation',
    seo_description: 'Academic research exploring the shift in manuscript editing with modern digital tools.',
    seo_keywords: ['digital indexing', 'documentation', 'manuscripts'],
    view_count: 610,
    download_count: 95,
    created_by: null,
    created_at: '2026-02-01T12:00:00Z',
    updated_at: '2026-02-01T12:00:00Z',
  },
  {
    id: 'a1_en',
    type: 'article',
    translation_group_id: 'tg-3',
    language: 'en',
    title: 'On the Philosophy of Deep Reading in the Age of Speed',
    slug: 'philosophy-of-deep-reading',
    excerpt: 'Meditations on patient reading and intellectual resistance against information overload and constant digital distraction.',
    content: '<p>Reading is no longer merely an informative or leisurely pastime; it has become an act of cognitive resilience against the tyranny of rapid notifications and superficial skimming.</p>',
    author: 'Mohamed Ramadan',
    cover_image_url: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600',
    file_url: null,
    file_size: null,
    page_count: null,
    duration_seconds: null,
    audio_transcript: null,
    category_id: 'c3',
    tags: ['Philosophy', 'Deep Reading', 'Culture'],
    status: 'published',
    published_at: '2026-02-10T14:30:00Z',
    allow_download: false,
    allow_offline_read: true,
    license_type: 'read_only',
    custom_license_terms: null,
    reading_time_minutes: 6,
    table_of_contents: [],
    seo_title: 'On the Philosophy of Deep Reading | Mohamed Ramadan',
    seo_description: 'An intellectual essay on regaining focus and cognitive depth in modern digital reading.',
    seo_keywords: ['deep reading', 'philosophy', 'reflection'],
    view_count: 1420,
    download_count: 0,
    created_by: null,
    created_at: '2026-02-10T14:30:00Z',
    updated_at: '2026-02-10T14:30:00Z',
  },
  {
    id: 'l1_en',
    type: 'lecture',
    translation_group_id: 'tg-4',
    language: 'en',
    title: 'Introduction to Manuscript Studies and Academic Editing (Audio)',
    slug: 'introduction-manuscript-studies',
    excerpt: 'An introductory lecture covering Arabic codicology, paleography, ink preservation, and critical editorial methods.',
    content: '<p>A comprehensive lecture designed for graduate students and researchers in Arab-Islamic classical heritage.</p>',
    author: 'Mohamed Ramadan',
    cover_image_url: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=600',
    file_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    file_size: 4194304,
    page_count: null,
    duration_seconds: 372,
    audio_transcript: 'Welcome to this introductory session on manuscript studies and scholarly critical editing...',
    category_id: 'c4',
    tags: ['Audio', 'Manuscripts', 'Lectures'],
    status: 'published',
    published_at: '2026-02-15T09:00:00Z',
    allow_download: true,
    allow_offline_read: true,
    license_type: 'read_and_download',
    custom_license_terms: null,
    reading_time_minutes: 10,
    table_of_contents: [],
    seo_title: 'Lecture: Introduction to Manuscript Studies | Mohamed Ramadan',
    seo_description: 'Scholarly audio lecture explaining principles of Arabic codicology and text editing.',
    seo_keywords: ['audio lecture', 'manuscripts', 'heritage studies'],
    view_count: 890,
    download_count: 240,
    created_by: null,
    created_at: '2026-02-15T09:00:00Z',
    updated_at: '2026-02-15T09:00:00Z',
  },
  {
    id: 'lit1_en',
    type: 'literature',
    translation_group_id: 'tg-5',
    language: 'en',
    title: 'Echoes of Andalus (Literary Sample)',
    slug: 'echoes-of-andalus',
    excerpt: 'Lyrical narratives and reflective prose evoking the spirit and architectural memory of Granada and Cordoba.',
    content: '<h2>Chapter I: Terraces of the Alhambra</h2><p>Evening descended softly upon Granada, where fountains whispered tales of those who carved verses upon stone that time could never efface...</p>',
    author: 'Mohamed Ramadan',
    cover_image_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
    file_url: null,
    file_size: null,
    page_count: null,
    duration_seconds: null,
    audio_transcript: null,
    category_id: 'c5',
    tags: ['Literature', 'Prose', 'Andalus'],
    status: 'published',
    published_at: '2026-02-18T16:00:00Z',
    allow_download: false,
    allow_offline_read: true,
    license_type: 'all_rights_reserved',
    custom_license_terms: null,
    reading_time_minutes: 8,
    table_of_contents: [],
    seo_title: 'Echoes of Andalus | Mohamed Ramadan',
    seo_description: 'Reflective prose evoking classical Andalusian civilization and artistic memory.',
    seo_keywords: ['literature', 'prose', 'Andalus'],
    view_count: 530,
    download_count: 0,
    created_by: null,
    created_at: '2026-02-18T16:00:00Z',
    updated_at: '2026-02-18T16:00:00Z',
  },
  {
    id: 'e1_en',
    type: 'educational',
    translation_group_id: 'tg-6',
    language: 'en',
    title: 'Academic Researcher Skills Handbook',
    slug: 'academic-researcher-skills-guide',
    excerpt: 'A structured guide summarizing modern research instruments, hypothesis development, and rigorous citation.',
    content: '<h2>Unit 1: Research Design</h2><p>Balanced academic inquiry begins with precise problem definition and the formulation of primary research questions guiding empirical investigation.</p>',
    author: 'Mohamed Ramadan',
    cover_image_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
    file_url: null,
    file_size: null,
    page_count: 36,
    duration_seconds: null,
    audio_transcript: null,
    category_id: 'c6',
    tags: ['Education', 'Research Skills', 'Curriculum'],
    status: 'published',
    published_at: '2026-02-20T11:00:00Z',
    allow_download: true,
    allow_offline_read: true,
    license_type: 'read_and_download',
    custom_license_terms: null,
    reading_time_minutes: 30,
    table_of_contents: [],
    seo_title: 'Academic Researcher Skills Handbook | Mohamed Ramadan',
    seo_description: 'An educational guide outlining scientific research tools for students and scholars.',
    seo_keywords: ['curriculum', 'research skills', 'academia'],
    view_count: 780,
    download_count: 210,
    created_by: null,
    created_at: '2026-02-20T11:00:00Z',
    updated_at: '2026-02-20T11:00:00Z',
  },
];

// المتجر الداخلي في الذاكرة (Local In-Memory Store) للتطوير المحلي والتجربة المباشرة
let memoryItems: Item[] = [...INITIAL_ITEMS];
let memoryMessages: ContactMessage[] = [];
let memorySubscribers: Subscriber[] = [];

// ====================================================================
// استعلامات الموقع العام (Public API Queries)
// ====================================================================

export async function getCategories(): Promise<Category[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('is_visible', true)
        .order('sort_order', { ascending: true });
      if (!error && data) return data;
    } catch (e) {
      console.warn('Fallback to local categories');
    }
  }
  return INITIAL_CATEGORIES;
}

export async function getItems(options?: {
  type?: ItemType;
  categorySlug?: string;
  language?: 'ar' | 'en';
  limit?: number;
  featured?: boolean;
}): Promise<Item[]> {
  const lang = options?.language || 'ar';

  if (isSupabaseConfigured && supabase) {
    try {
      let query = supabase
        .from('items')
        .select('*, category:categories(*)')
        .eq('language', lang)
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (options?.type) {
        query = query.eq('type', options.type);
      }
      if (options?.limit) {
        query = query.limit(options.limit);
      }
      const { data, error } = await query;
      if (!error && data) return data;
    } catch (e) {
      console.warn('Fallback to local items');
    }
  }

  // فلترة المتجر المحلي
  return memoryItems.filter((item) => {
    if (item.status !== 'published') return false;
    if (options?.type && item.type !== options.type) return false;
    if (options?.language && item.language !== options.language) return false;
    return true;
  }).slice(0, options?.limit || 100);
}

export async function getItemBySlug(slug: string, language: 'ar' | 'en' = 'ar'): Promise<Item | null> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('items')
        .select('*, category:categories(*)')
        .eq('slug', slug)
        .eq('language', language)
        .single();
      if (!error && data) return data;
    } catch (e) {
      console.warn('Fallback to local getItemBySlug');
    }
  }
  return memoryItems.find((i) => i.slug === slug && i.language === language) || null;
}

// محرك البحث الذكي بدعم تطبيع العربية
export async function searchLibrary(queryText: string, options?: { type?: ItemType; language?: 'ar' | 'en' }): Promise<Item[]> {
  if (!queryText.trim()) return [];

  const normalized = normalizeArabicText(queryText);
  const lang = options?.language || 'ar';

  return memoryItems.filter((item) => {
    if (item.status !== 'published') return false;
    if (options?.type && item.type !== options.type) return false;

    const normTitle = normalizeArabicText(item.title);
    const normExcerpt = normalizeArabicText(item.excerpt || '');
    const normAuthor = normalizeArabicText(item.author);
    const normContent = normalizeArabicText(item.content || '');
    const normTags = item.tags.map(t => normalizeArabicText(t)).join(' ');

    return (
      normTitle.includes(normalized) ||
      normExcerpt.includes(normalized) ||
      normAuthor.includes(normalized) ||
      normContent.includes(normalized) ||
      normTags.includes(normalized)
    );
  });
}

// إرسال رسالة تواصل وحفظها في قاعدة البيانات / لوحة الإدارة
export async function submitContactMessage(message: Omit<ContactMessage, 'id' | 'status' | 'created_at'>): Promise<{ success: boolean; id: string }> {
  const newMsg: ContactMessage = {
    ...message,
    id: 'msg_' + Date.now(),
    status: 'new',
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('messages')
        .insert([newMsg])
        .select()
        .single();
      if (!error && data) return { success: true, id: data.id };
    } catch (e) {
      console.warn('Fallback save message locally');
    }
  }

  memoryMessages.unshift(newMsg);
  return { success: true, id: newMsg.id };
}

// اشتراك في النشرة البريدية
export async function subscribeNewsletter(email: string, language: 'ar' | 'en' = 'ar'): Promise<{ success: boolean }> {
  const sub: Subscriber = {
    id: 'sub_' + Date.now(),
    email,
    language,
    is_confirmed: true,
    status: 'active',
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('subscribers').upsert([sub], { onConflict: 'email' });
      return { success: true };
    } catch (e) {
      console.warn('Fallback subscriber');
    }
  }

  if (!memorySubscribers.find(s => s.email === email)) {
    memorySubscribers.unshift(sub);
  }
  return { success: true };
}

// ====================================================================
// استعلامات لوحة الإدارة (Admin API Queries & Mutations)
// ====================================================================

export async function getAdminStats() {
  const allItems = memoryItems;
  return {
    totalBooks: allItems.filter(i => i.type === 'book').length,
    totalResearch: allItems.filter(i => i.type === 'research').length,
    totalArticles: allItems.filter(i => i.type === 'article').length,
    totalLectures: allItems.filter(i => i.type === 'lecture').length,
    totalLiterature: allItems.filter(i => i.type === 'literature').length,
    totalEducational: allItems.filter(i => i.type === 'educational').length,
    totalItems: allItems.length,
    newMessagesCount: memoryMessages.filter(m => m.status === 'new').length,
    subscribersCount: memorySubscribers.length,
  };
}

export async function getAdminItems(): Promise<Item[]> {
  return [...memoryItems];
}

export async function createItem(itemData: Omit<Item, 'id' | 'created_at' | 'updated_at' | 'view_count' | 'download_count'>): Promise<Item> {
  const newItem: Item = {
    ...itemData,
    id: 'item_' + Date.now(),
    view_count: 0,
    download_count: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  memoryItems.unshift(newItem);
  return newItem;
}

export async function updateItem(id: string, updates: Partial<Item>): Promise<Item | null> {
  const index = memoryItems.findIndex(i => i.id === id);
  if (index === -1) return null;
  memoryItems[index] = {
    ...memoryItems[index],
    ...updates,
    updated_at: new Date().toISOString(),
  };
  return memoryItems[index];
}

export async function deleteItem(id: string): Promise<boolean> {
  const initialLen = memoryItems.length;
  memoryItems = memoryItems.filter(i => i.id !== id);
  return memoryItems.length < initialLen;
}

export async function getAdminMessages(): Promise<ContactMessage[]> {
  return [...memoryMessages];
}

export async function updateMessageStatus(id: string, status: ContactMessage['status']): Promise<boolean> {
  const msg = memoryMessages.find(m => m.id === id);
  if (!msg) return false;
  msg.status = status;
  return true;
}
