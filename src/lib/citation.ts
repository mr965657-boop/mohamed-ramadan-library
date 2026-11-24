import type { Item } from '../types/database';

export interface CitationFormats {
  apa: string;
  mla: string;
  chicago: string;
}

/**
 * دالة استخراج وتنسيق اسم المؤلف بالصيغة الأكاديمية (اللقب، الاسم الأول)
 */
function formatAuthorName(author: string, lang: 'ar' | 'en'): string {
  const parts = author.trim().split(/\s+/);
  if (parts.length <= 1) return author;

  if (lang === 'ar') {
    // باللغة العربية: إذا كان "محمد رمضان" -> "رمضان، محمد"
    const lastName = parts[parts.length - 1];
    const firstNames = parts.slice(0, parts.length - 1).join(' ');
    return `${lastName}، ${firstNames}`;
  } else {
    // بالإنجليزية: "Mohamed Ramadan" -> "Ramadan, M."
    const lastName = parts[parts.length - 1];
    const initials = parts.slice(0, parts.length - 1).map(p => `${p.charAt(0)}.`).join(' ');
    return `${lastName}, ${initials}`;
  }
}

/**
 * استخراج سنة النشر
 */
function getPublicationYear(item: Item): string {
  const dateStr = item.published_at || item.created_at;
  if (!dateStr) return new Date().getFullYear().toString();
  return new Date(dateStr).getFullYear().toString();
}

/**
 * توليد توثيق بصيغة APA (الإصدار السابع)
 * APA 7th Edition
 */
export function generateAPACitation(item: Item, siteUrl: string = 'https://mohamed-ramadan-library.vercel.app'): string {
  const year = getPublicationYear(item);
  const authorFormatted = formatAuthorName(item.author, item.language);
  const fullUrl = `${siteUrl}/${item.type === 'book' ? 'books' : 'research'}/${item.slug}`;

  if (item.language === 'ar') {
    if (item.type === 'book') {
      const publisher = item.journal_or_publisher || 'مكتبة محمد رمضان المعرفية';
      return `${authorFormatted}. (${year}). ${item.title}. ${publisher}. ${item.doi ? `https://doi.org/${item.doi}` : fullUrl}`;
    } else {
      // بحث أو مقال
      const journal = item.journal_or_publisher || 'أوراق بحوث مكتبة محمد رمضان الأكاديمية';
      const volIssue = item.volume ? `${item.volume}${item.issue ? `(${item.issue})` : ''}` : '';
      const pages = item.pages_range ? `، ${item.pages_range}` : '';
      return `${authorFormatted}. (${year}). ${item.title}. ${journal}${volIssue ? `، ${volIssue}` : ''}${pages}. ${item.doi ? `https://doi.org/${item.doi}` : fullUrl}`;
    }
  } else {
    if (item.type === 'book') {
      const publisher = item.journal_or_publisher || 'Mohamed Ramadan Digital Library';
      return `${authorFormatted} (${year}). ${item.title}. ${publisher}. ${item.doi ? `https://doi.org/${item.doi}` : fullUrl}`;
    } else {
      const journal = item.journal_or_publisher || 'Mohamed Ramadan Academic Research Papers';
      const volIssue = item.volume ? `${item.volume}${item.issue ? `(${item.issue})` : ''}` : '';
      const pages = item.pages_range ? `, ${item.pages_range}` : '';
      return `${authorFormatted} (${year}). ${item.title}. ${journal}${volIssue ? `, ${volIssue}` : ''}${pages}. ${item.doi ? `https://doi.org/${item.doi}` : fullUrl}`;
    }
  }
}

/**
 * توليد توثيق بصيغة MLA (الإصدار التاسع)
 * MLA 9th Edition
 */
export function generateMLACitation(item: Item, siteUrl: string = 'https://mohamed-ramadan-library.vercel.app'): string {
  const year = getPublicationYear(item);
  const authorFormatted = formatAuthorName(item.author, item.language);
  const fullUrl = `${siteUrl}/${item.type === 'book' ? 'books' : 'research'}/${item.slug}`;

  if (item.language === 'ar') {
    if (item.type === 'book') {
      const publisher = item.journal_or_publisher || 'مكتبة محمد رمضان المعرفية';
      return `${authorFormatted}. ${item.title}. ${publisher}، ${year}.`;
    } else {
      const journal = item.journal_or_publisher || 'مكتبة محمد رمضان الرقمية';
      const vol = item.volume ? `المجلد ${item.volume}، ` : '';
      const iss = item.issue ? `العدد ${item.issue}، ` : '';
      const pp = item.pages_range ? `ص. ${item.pages_range}. ` : '';
      return `${authorFormatted}. "${item.title}." ${journal}، ${vol}${iss}${year}، ${pp}${fullUrl}.`;
    }
  } else {
    if (item.type === 'book') {
      const publisher = item.journal_or_publisher || 'Mohamed Ramadan Digital Library';
      return `${authorFormatted}. ${item.title}. ${publisher}, ${year}.`;
    } else {
      const journal = item.journal_or_publisher || 'Mohamed Ramadan Digital Library';
      const vol = item.volume ? `vol. ${item.volume}, ` : '';
      const iss = item.issue ? `no. ${item.issue}, ` : '';
      const pp = item.pages_range ? `pp. ${item.pages_range}. ` : '';
      return `${authorFormatted}. "${item.title}." ${journal}, ${vol}${iss}${year}, ${pp}${fullUrl}.`;
    }
  }
}

/**
 * توليد توثيق بصيغة Chicago (الإصدار السابع عشر - Author-Date / Notes)
 * Chicago 17th Edition
 */
export function generateChicagoCitation(item: Item, siteUrl: string = 'https://mohamed-ramadan-library.vercel.app'): string {
  const year = getPublicationYear(item);
  const authorFormatted = formatAuthorName(item.author, item.language);
  const fullUrl = `${siteUrl}/${item.type === 'book' ? 'books' : 'research'}/${item.slug}`;

  if (item.language === 'ar') {
    if (item.type === 'book') {
      const publisher = item.journal_or_publisher || 'مكتبة محمد رمضان';
      return `${authorFormatted}. ${year}. ${item.title}. ${publisher}.`;
    } else {
      const journal = item.journal_or_publisher || 'دراسات مكتبة محمد رمضان';
      const volIssue = item.volume ? ` ${item.volume}` : '';
      const iss = item.issue ? `، العدد ${item.issue}` : '';
      const pages = item.pages_range ? `: ${item.pages_range}` : '';
      return `${authorFormatted}. ${year}. "${item.title}." ${journal}${volIssue}${iss}${pages}. ${fullUrl}.`;
    }
  } else {
    if (item.type === 'book') {
      const publisher = item.journal_or_publisher || 'Mohamed Ramadan Library';
      return `${authorFormatted}. ${year}. ${item.title}. ${publisher}.`;
    } else {
      const journal = item.journal_or_publisher || 'Mohamed Ramadan Research Studies';
      const vol = item.volume ? ` ${item.volume}` : '';
      const iss = item.issue ? `, no. ${item.issue}` : '';
      const pages = item.pages_range ? `: ${item.pages_range}` : '';
      return `${authorFormatted}. ${year}. "${item.title}." ${journal}${vol}${iss}${pages}. ${fullUrl}.`;
    }
  }
}

/**
 * دالة شاملة لتوليد جميع الصيغ المعتمدة دفعة واحدة
 */
export function generateAllCitations(item: Item, siteUrl?: string): CitationFormats {
  return {
    apa: generateAPACitation(item, siteUrl),
    mla: generateMLACitation(item, siteUrl),
    chicago: generateChicagoCitation(item, siteUrl),
  };
}
