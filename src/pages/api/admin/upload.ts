import type { APIRoute } from 'astro';
import { supabase, isSupabaseConfigured } from '../../../lib/supabase';
import { verifyAdminSession } from '../../../lib/auth';

export const POST: APIRoute = async ({ request }) => {
  const auth = await verifyAdminSession(request, 'author');
  if (!auth.authorized) {
    return new Response(JSON.stringify({ error: auth.error || 'غير مصرح' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return new Response(JSON.stringify({ error: 'لم يتم اختيار أي ملف' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const fileName = `${Date.now()}-${file.name.replace(/[^\w.-]/g, '_')}`;
    const fileType = file.type;
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // 1. في حال توفر Supabase Storage
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.storage
          .from('library-media')
          .upload(fileName, fileBuffer, {
            contentType: fileType,
            upsert: true,
          });

        if (!error && data) {
          const { data: publicUrlData } = supabase.storage
            .from('library-media')
            .getPublicUrl(fileName);

          return new Response(JSON.stringify({
            success: true,
            url: publicUrlData.publicUrl,
            fileName: file.name,
            fileSize: file.size,
          }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      } catch (e) {
        console.warn('Supabase storage upload failed, using fallback');
      }
    }

    // 2. حل احتياطي فوري للصور: Data URL خفيف وفوري يعمل على أي خادم
    if (fileType.startsWith('image/')) {
      const base64Data = fileBuffer.toString('base64');
      const dataUrl = `data:${fileType};base64,${base64Data}`;

      return new Response(JSON.stringify({
        success: true,
        url: dataUrl,
        fileName: file.name,
        fileSize: file.size,
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // للملفات الكبيرة (PDF) بدون تخزين سحابي بعد
    return new Response(JSON.stringify({
      error: 'لرفع ملفات الـ PDF الكبيرة مباشرة، يرجى ربط Supabase Storage أو وضع رابط الملف المباشر مؤقتاً.',
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'حدث خطأ أثناء رفع الملف' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
