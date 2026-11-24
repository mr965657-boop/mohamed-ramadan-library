import type { APIRoute } from 'astro';
import { getAdminMessages, updateMessageStatus } from '../../../lib/db';

export const GET: APIRoute = async () => {
  const messages = await getAdminMessages();
  return new Response(JSON.stringify(messages), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const PATCH: APIRoute = async ({ request }) => {
  try {
    const { id, status } = await request.json();
    if (!id || !status) {
      return new Response(JSON.stringify({ error: 'المعرف والحالة مطلوبان' }), { status: 400 });
    }
    const success = await updateMessageStatus(id, status);
    return new Response(JSON.stringify({ success }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'حدث خطأ أثناء تحديث حالة الرسالة' }), { status: 500 });
  }
};
