import type { APIRoute } from 'astro';
import { submitContactMessage } from '../../lib/db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, subject, category, message } = data;

    if (!name || !email || !category || !message) {
      return new Response(JSON.stringify({ error: 'يرجى تعبئة كافة الحقول المطلوبة' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await submitContactMessage({
      name,
      email,
      subject: subject || 'بدون موضوع',
      category,
      message,
    });

    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'حدث خطأ أثناء معالجة الطلب' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
