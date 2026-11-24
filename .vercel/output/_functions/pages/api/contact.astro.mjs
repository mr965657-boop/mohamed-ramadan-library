import { s as submitContactMessage } from '../../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, subject, category, message } = data;
    if (!name || !email || !category || !message) {
      return new Response(JSON.stringify({ error: "يرجى تعبئة كافة الحقول المطلوبة" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const result = await submitContactMessage({
      name,
      email,
      subject: subject || "بدون موضوع",
      category,
      message
    });
    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "حدث خطأ أثناء معالجة الطلب" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
