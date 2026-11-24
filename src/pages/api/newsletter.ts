import type { APIRoute } from 'astro';
import { subscribeNewsletter, unsubscribeEmail } from '../../lib/db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const email = data.email?.trim();
    const language = data.language === 'en' ? 'en' : 'ar';

    if (!email) {
      return new Response(JSON.stringify({ error: language === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await subscribeNewsletter(email, language);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error || 'فشل تسجيل الاشتراك' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const message = result.alreadySubscribed
      ? (language === 'ar' ? 'أنت مشترك بالفعل في النشرة البريدية ومسجل لدينا.' : 'You are already subscribed to our newsletter.')
      : (language === 'ar' ? 'تم اشتراكك في النشرة البريدية للمكتبة بنجاح!' : 'Successfully subscribed to the library newsletter!');

    return new Response(JSON.stringify({ success: true, message, alreadySubscribed: result.alreadySubscribed }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'تعذر معالجة الطلب حالياً' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const email = data.email?.trim();

    if (!email) {
      return new Response(JSON.stringify({ error: 'البريد الإلكتروني مطلوب' }), { status: 400 });
    }

    const success = await unsubscribeEmail(email);

    return new Response(JSON.stringify({
      success: true,
      message: success ? 'تم إلغاء الاشتراك بنجاح' : 'البريد غير مسجل أو ملغى مسبقاً'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'حدث خطأ أثناء إلغاء الاشتراك' }), { status: 500 });
  }
};
