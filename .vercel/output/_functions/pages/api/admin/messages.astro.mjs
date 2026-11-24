import { c as getAdminMessages, u as updateMessageStatus } from '../../../chunks/db_DWWhb1vL.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async () => {
  const messages = await getAdminMessages();
  return new Response(JSON.stringify(messages), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const PATCH = async ({ request }) => {
  try {
    const { id, status } = await request.json();
    if (!id || !status) {
      return new Response(JSON.stringify({ error: "المعرف والحالة مطلوبان" }), { status: 400 });
    }
    const success = await updateMessageStatus(id, status);
    return new Response(JSON.stringify({ success }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "حدث خطأ أثناء تحديث حالة الرسالة" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  PATCH
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
