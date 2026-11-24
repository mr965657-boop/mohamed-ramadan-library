export type Language = 'ar' | 'en';

export const translations = {
  ar: {
    // الهيدر والتنقل
    brandName: 'مكتبة محمد رمضان',
    brandSubtitle: 'Mohamed Ramadan Digital Library',
    home: 'الرئيسية',
    books: 'الكتب والمؤلفات',
    research: 'البحوث والدراسات',
    articles: 'المقالات',
    lectures: 'المحاضرات',
    literature: 'الأعمال الأدبية',
    educational: 'المواد التعليمية',
    about: 'عن المؤلف',
    contact: 'تواصل',
    admin: 'لوحة التحكم',
    searchPlaceholder: 'ابحث في الكتب والمقالات والمحاضرات...',
    switchLangLabel: 'English',
    switchLangCode: 'en',

    // القسم الرئيسي Hero
    heroBadge: 'منصة معرفية رقمية متكاملة',
    heroTitle: 'مكتبة محمد رمضان',
    heroSubtitle: 'أصالة التراث.. وعمق المعرفة المعاصرة',
    heroBio: 'فضاء معرفي رقمي يجمع بين هوية المؤلف والباحث والمعلم، يضع بين يديك أحدث الكتب، والبحوث الأكاديمية المحكمة، والمقالات، والتسجيلات المسموعة مع تجربة قراءة تفاعلية فريدة.',
    heroSearchPlaceholder: 'ابحث بالعنوان، الكلمات المفتاحية، أو داخل نصوص الكتب...',
    searchBtn: 'بحث',
    quickAccess: 'الوصول السريع:',
    authorCardTitle: 'أ. محمد رمضان',
    authorCardRole: 'باحث، مؤلف، ومحاضر',
    authorCardBio: 'مهتم بقضايا التراث، تحقيق النصوص، ومناهج الفكر الإسلامي المعاصر.',
    fullBioLink: 'السيرة الذاتية الكاملة ←',

    // أقسام الصفحة الرئيسية
    categoriesTitle: 'أقسام المكتبة المعرفية',
    categoriesSubtitle: 'استكشف الإنتاج العلمي والأدبي موزّعاً حسب الحقول والموضوعات',
    latestBooks: 'أحدث الكتب والمؤلفات',
    allBooks: 'عرض جميع الكتب ←',
    readInside: 'قراءة داخل الموقع',
    downloadPdf: 'تنزيل PDF',
    researchTitle: 'البحوث والدراسات الأكاديمية',
    articlesTitle: 'أحدث المقالات الفكرية',
    lecturesTitle: 'المحاضرات والدروس المسموعة',
    literatureTitle: 'الأعمال الأدبية والإبداعية',
    educationalTitle: 'المواد التعليمية والمناهج',
    viewAll: 'المزيد ←',
    readMore: 'قراءة المزيد ←',
    pageUnit: 'صفحة',
    minutesUnit: 'دقائق قراءة',

    // التذييل Footer
    footerDesc: 'منصة معرفية وثقافية تجمع بين التراث الإسلامي الرصين والرؤية الرقمية المعاصرة؛ لتيسير القراءة والبحث العلمي، وتقديم فضاء معرفي متكامل يخدم الباحثين والقراء.',
    footerFeature1: '✓ محتوى موثوق ومحقق',
    footerFeature2: '✓ قارئ كتب تفاعلي متقدم',
    footerFeature3: '✓ قراءة دون اتصال PWA',
    quickLinksTitle: 'أقسام المكتبة',
    newsletterTitle: 'النشرة المعرفية',
    newsletterDesc: 'اشترك ليصلك جديد الكتب المنشورة، والبحوث الأكاديمية، والتسجيلات أولاً بأول.',
    newsletterPlaceholder: 'بريدك الإلكتروني...',
    newsletterBtn: 'اشتراك في النشرة',
    newsletterSuccess: 'شكرًا لاشتراكك! تم تسجيل بريدك بنجاح.',
    copyright: 'جميع الحقوق محفوظة © {year} مكتبة محمد رمضان الرقمية.',

    // صفحة التواصل Contact
    contactTitle: 'تواصل مع المؤلف وإدارة المكتبة',
    contactSubtitle: 'يسعدنا استقبال استفساراتكم الأكاديمية، والتعاون العلمي، وملاحظاتكم حول الكتب والمحتوى.',
    nameLabel: 'الاسم الكريم',
    emailLabel: 'البريد الإلكتروني',
    categoryLabel: 'تصنيف الرسالة',
    subjectLabel: 'موضوع الرسالة',
    messageLabel: 'نص الرسالة',
    submitMessageBtn: 'إرسال الرسالة إلى إدارة المكتبة',
    catBooks: 'استفسارات حول الكتب والمؤلفات',
    catResearch: 'البحوث والدراسات العلمية',
    catTeaching: 'التدريس والمحاضرات والتعليم',
    catCooperation: 'التعاون والمشاريع الأكاديمية',
    catGeneral: 'استفسار عام أو اقتراح',

    // البحث Search
    searchPageTitle: 'البحث الشامل في المكتبة',
    searchPageSubtitle: 'ابحث في عناوين ونصوص الكتب، والبحوث الأكاديمية، والمقالات، وتسجيلات المحاضرات.',
    filterAll: 'الكل',
    filterBooks: 'الكتب',
    filterResearch: 'البحوث',
    filterArticles: 'المقالات',
    filterLectures: 'المحاضرات',
    resultsCount: 'عثرنا على {count} نتيجة بحث لكلمة: «{query}»',
    noResults: 'لم يتم العثور على نتائج مطابقة',
    enterSearchQuery: 'أدخل كلمة أو عبارة في صندوق البحث أعلاه',
  },
  en: {
    // Header & Navigation
    brandName: 'Mohamed Ramadan Library',
    brandSubtitle: 'Digital Scholarly Platform',
    home: 'Home',
    books: 'Books',
    research: 'Research',
    articles: 'Articles',
    lectures: 'Lectures',
    literature: 'Literature',
    educational: 'Educational',
    about: 'About Author',
    contact: 'Contact',
    admin: 'Admin Panel',
    searchPlaceholder: 'Search books, articles, lectures...',
    switchLangLabel: 'العربية',
    switchLangCode: 'ar',

    // Hero Section
    heroBadge: 'Comprehensive Digital Knowledge Platform',
    heroTitle: 'Mohamed Ramadan Digital Library',
    heroSubtitle: 'Authentic Heritage.. Contemporary Scholarly Depth',
    heroBio: 'A digital scholarly platform uniting author, researcher, and educator identities; offering seamless access to books, peer-reviewed academic research, essays, and lectures with an interactive reading experience.',
    heroSearchPlaceholder: 'Search by title, keywords, or inside book texts...',
    searchBtn: 'Search',
    quickAccess: 'Quick Access:',
    authorCardTitle: 'Mohamed Ramadan',
    authorCardRole: 'Scholar, Author & Lecturer',
    authorCardBio: 'Specialized in heritage studies, manuscript editing, and contemporary Islamic thought.',
    fullBioLink: 'Full Biography & Profile →',

    // Sections
    categoriesTitle: 'Library Knowledge Fields',
    categoriesSubtitle: 'Explore academic and creative publications categorized by scholarly disciplines',
    latestBooks: 'Latest Books & Publications',
    allBooks: 'View All Books →',
    readInside: 'Read Online',
    downloadPdf: 'Download PDF',
    researchTitle: 'Academic Research & Studies',
    articlesTitle: 'Intellectual Essays & Articles',
    lecturesTitle: 'Audio Lectures & Courses',
    literatureTitle: 'Creative Literature & Narratives',
    educationalTitle: 'Educational Guides & Curricula',
    viewAll: 'View All →',
    readMore: 'Read Full →',
    pageUnit: 'pages',
    minutesUnit: 'min read',

    // Footer
    footerDesc: 'A cultural and scholarly platform bridging classical Islamic heritage and modern digital technology, facilitating academic research and reading for scholars and students worldwide.',
    footerFeature1: '✓ Peer-reviewed & Verified Content',
    footerFeature2: '✓ Interactive In-browser PDF Reader',
    footerFeature3: '✓ Offline PWA Reading Support',
    quickLinksTitle: 'Library Sections',
    newsletterTitle: 'Knowledge Newsletter',
    newsletterDesc: 'Subscribe to receive the latest books, peer-reviewed research, and audio recordings.',
    newsletterPlaceholder: 'Enter your email...',
    newsletterBtn: 'Subscribe Now',
    newsletterSuccess: 'Thank you! You have subscribed successfully.',
    copyright: 'All rights reserved © {year} Mohamed Ramadan Digital Library.',

    // Contact
    contactTitle: 'Contact Author & Administration',
    contactSubtitle: 'We welcome your academic inquiries, scholarly collaborations, and feedback.',
    nameLabel: 'Full Name',
    emailLabel: 'Email Address',
    categoryLabel: 'Message Category',
    subjectLabel: 'Subject',
    messageLabel: 'Message Details',
    submitMessageBtn: 'Send Message to Administration',
    catBooks: 'Inquiries about Books & Publications',
    catResearch: 'Academic Research & Studies',
    catTeaching: 'Teaching & Scholarly Courses',
    catCooperation: 'Academic Cooperation & Projects',
    catGeneral: 'General Inquiry or Feedback',

    // Search
    searchPageTitle: 'Comprehensive Library Search',
    searchPageSubtitle: 'Search titles and texts across books, academic research, articles, and lectures.',
    filterAll: 'All',
    filterBooks: 'Books',
    filterResearch: 'Research',
    filterArticles: 'Articles',
    filterLectures: 'Lectures',
    resultsCount: 'Found {count} results for: "{query}"',
    noResults: 'No matching results found',
    enterSearchQuery: 'Enter a keyword or phrase in the search box above',
  },
};

export function getLangFromUrl(url: URL): Language {
  const langParam = url.searchParams.get('lang');
  if (langParam === 'en' || langParam === 'ar') {
    return langParam;
  }
  return 'ar';
}

export function useTranslations(lang: Language) {
  return translations[lang] || translations.ar;
}
