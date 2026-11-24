import type { APIRoute } from 'astro';
import { authenticateAdmin } from '../../../lib/auth';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'البريد الإلكتروني وكلمة المرور مطلوبان' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const auth = await authenticateAdmin(email, password);

    if (!auth.success || !auth.token) {
      return new Response(JSON.stringify({ error: auth.error || 'فشل تسجيل الدخول' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // تعيين الكوكي الآمن لمدة 30 يوماً
    const cookieValue = `mrl_admin_session=${auth.token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000`;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': cookieValue,
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'حدث خطأ في الخادم' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
