import type { APIRoute } from 'astro';

export const POST: APIRoute = async () => {
  const cookieValue = `mrl_admin_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': cookieValue,
    },
  });
};
