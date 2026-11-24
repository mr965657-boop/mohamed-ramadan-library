import type { APIRoute } from 'astro';
import { getCategories, createCategory, deleteCategory } from '../../../lib/db';
import { verifyAdminSession } from '../../../lib/auth';

export const GET: APIRoute = async () => {
  const categories = await getCategories();
  return new Response(JSON.stringify(categories), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const auth = await verifyAdminSession(request, 'editor');
  if (!auth.authorized) {
    return new Response(JSON.stringify({ error: auth.error || 'غير مصرح' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const data = await request.json();
    if (!data.name_ar || !data.slug) {
      return new Response(JSON.stringify({ error: 'اسم التصنيف والرابط الدائم مطلوبان' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const newCategory = await createCategory({
      name_ar: data.name_ar,
      name_en: data.name_en || data.name_ar,
      slug: data.slug,
      description_ar: data.description_ar || null,
      description_en: data.description_en || null,
      parent_id: data.parent_id || null,
      sort_order: data.sort_order ? parseInt(data.sort_order) : 0,
      is_visible: true,
    });

    return new Response(JSON.stringify({ success: true, category: newCategory }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'حدث خطأ أثناء حفظ التصنيف' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  const auth = await verifyAdminSession(request, 'super_admin');
  if (!auth.authorized) {
    return new Response(JSON.stringify({ error: auth.error || 'غير مصرح بحذف التصنيفات' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { id } = await request.json();
    if (!id) {
      return new Response(JSON.stringify({ error: 'معرف التصنيف مطلوب' }), { status: 400 });
    }
    const success = await deleteCategory(id);
    return new Response(JSON.stringify({ success }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'فشل حذف التصنيف' }), { status: 500 });
  }
};
