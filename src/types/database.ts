export type UserRole = 'super_admin' | 'editor' | 'author' | 'translator' | 'media_manager' | 'reader';

export type ItemType = 'book' | 'research' | 'article' | 'lecture' | 'literature' | 'educational' | 'project';

export type ItemStatus = 'draft' | 'published' | 'scheduled' | 'archived';

export type LicenseType = 'all_rights_reserved' | 'read_only' | 'read_and_download' | 'creative_commons' | 'custom';

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  role: UserRole;
  preferred_language: 'ar' | 'en';
  created_at: string;
}

export interface Category {
  id: string;
  slug: string;
  name_ar: string;
  name_en: string;
  description_ar: string | null;
  description_en: string | null;
  parent_id: string | null;
  sort_order: number;
  is_visible: boolean;
  created_at: string;
}

export interface BibliographicReference {
  id?: string;
  text: string;
  link?: string | null;
  language?: 'ar' | 'en';
}

export interface Attachment {
  title: string;
  url: string;
  size_bytes?: number;
  format?: string;
}

export interface Item {
  id: string;
  type: ItemType;
  translation_group_id: string;
  language: 'ar' | 'en';
  title: string;
  slug: string;
  excerpt: string | null;
  abstract?: string | null;
  content: string | null;
  author: string;
  co_authors?: string[];
  cover_image_url: string | null;
  file_url: string | null;
  file_size: number | null;
  page_count: number | null;
  duration_seconds: number | null;
  audio_transcript: string | null;
  category_id: string | null;
  category?: Category;
  tags: string[];
  status: ItemStatus;
  published_at: string | null;
  allow_download: boolean;
  allow_offline_read: boolean;
  license_type: LicenseType;
  custom_license_terms: string | null;
  reading_time_minutes: number;
  table_of_contents: Array<{ title: string; page?: number }>;
  
  // حقول التوثيق والبيانات الأكاديمية (Academic Metadata)
  doi?: string | null;
  journal_or_publisher?: string | null;
  volume?: string | null;
  issue?: string | null;
  pages_range?: string | null;
  peer_reviewed?: boolean;
  references?: BibliographicReference[];
  attachments?: Attachment[];
  related_item_ids?: string[];
  is_demo?: boolean; // لتمييز المحتوى التوضيحي حتى يتم استبداله ببيانات حقيقية

  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string[];
  view_count: number;
  download_count: number;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  category: 'books' | 'research' | 'teaching' | 'scientific_cooperation' | 'general';
  message: string;
  status: 'new' | 'read' | 'in_progress' | 'archived' | 'replied';
  admin_notes?: string | null;
  created_at: string;
}

export interface Subscriber {
  id: string;
  email: string;
  language: 'ar' | 'en';
  is_confirmed: boolean;
  status: 'active' | 'unsubscribed';
  created_at: string;
}
