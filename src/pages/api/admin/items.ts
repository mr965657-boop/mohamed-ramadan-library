import type { APIRoute } from 'astro';
import { createItem, updateItem, deleteItem, getAdminItems } from '../../../lib/db';

export const GET: APIRoute = async () => {
  const items = await getAdminItems();
  return new Response(JSON.stringify(items), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    if (!data.title || !data.type || !data.slug) {
      return new Response(JSON.stringify({ error: 'العنوان والنوع والرابط الدائم مطلوبان' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const newItem = await createItem({
      type: data.type,
      translation_group_id: data.translation_group_id || 'tg_' + Date.now(),
      language: data.language || 'ar',
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt || null,
      content: data.content || null,
      author: data.author || 'محمد رمضان',
      cover_image_url: data.cover_image_url || null,
      file_url: data.file_url || null,
      file_size: data.file_size || null,
      page_count: data.page_count ? parseInt(data.page_count) : null,
      duration_seconds: data.duration_seconds ? parseInt(data.duration_seconds) : null,
      audio_transcript: data.audio_transcript || null,
      category_id: data.category_id || null,
      tags: data.tags ? data.tags.split(',').map((t: string) => t.trim()) : [],
      status: data.status || 'published',
      published_at: new Date().toISOString(),
      allow_download: data.allow_download ?? true,
      allow_offline_read: data.allow_offline_read ?? true,
      license_type: data.license_type || 'all_rights_reserved',
      custom_license_terms: null,
      reading_time_minutes: data.reading_time_minutes ? parseInt(data.reading_time_minutes) : 5,
      table_of_contents: [],
      seo_title: data.seo_title || data.title,
      seo_description: data.seo_description || data.excerpt,
      seo_keywords: [],
      created_by: null,
    });

    return new Response(JSON.stringify({ success: true, item: newItem }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'حدث خطأ أثناء حفظ المحتوى' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const { id } = await request.json();
    if (!id) {
      return new Response(JSON.stringify({ error: 'معرف العنصر مطلوب' }), { status: 400 });
    }
    const success = await deleteItem(id);
    return new Response(JSON.stringify({ success }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'فشل حذف العنصر' }), { status: 500 });
  }
};
