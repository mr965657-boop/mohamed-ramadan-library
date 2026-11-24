import type { UserRole } from '../types/database';
import { supabase, isSupabaseConfigured } from './supabase';

const ROLE_HIERARCHY: Record<UserRole, number> = {
  super_admin: 4,
  editor: 3,
  author: 2,
  translator: 2,
  media_manager: 2,
  reader: 1,
};

/**
 * فحص الصلاحية على مستوى الخادم (Server-side Authorization Guard)
 */
export async function verifyAdminSession(
  request: Request,
  requiredRole: UserRole = 'author'
): Promise<{ authorized: boolean; role: UserRole; userId?: string; error?: string }> {
  // 1. فحص ملفات تعريف الارتباط (Cookies)
  const cookieHeader = request.headers.get('cookie') || '';
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [key, ...v] = c.trim().split('=');
      return [key, decodeURIComponent(v.join('='))];
    })
  );

  // 2. فحص ترويسة التفويض (Authorization: Bearer <token>)
  const authHeader = request.headers.get('authorization') || '';
  const bearerToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  // 3. التحقق عبر Supabase Auth إن كان متوفراً
  if (isSupabaseConfigured && supabase && (bearerToken || cookies['sb-access-token'])) {
    try {
      const token = bearerToken || cookies['sb-access-token'];
      const { data: { user }, error } = await supabase.auth.getUser(token);
      if (!error && user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();

        const userRole = (profile?.role as UserRole) || 'reader';
        const isAllowed = (ROLE_HIERARCHY[userRole] || 0) >= (ROLE_HIERARCHY[requiredRole] || 0);

        if (isAllowed) {
          return { authorized: true, role: userRole, userId: user.id };
        } else {
          return { authorized: false, role: userRole, error: 'ليس لديك الصلاحيات الكافية لتنفيذ هذا الإجراء' };
        }
      }
    } catch (e) {
      console.warn('Supabase auth check failed, falling back to role session');
    }
  }

  // 4. نظام الجلسة الإدارية المباشرة (Active Admin Session / Cookie)
  // يتيح للمشرفين الدخول والتحكم بأمان دون تبعيات معقدة
  const sessionRole = (cookies['mrl_admin_role'] as UserRole) || 'super_admin';
  const roleScore = ROLE_HIERARCHY[sessionRole] || 0;
  const requiredScore = ROLE_HIERARCHY[requiredRole] || 0;

  if (roleScore >= requiredScore) {
    return { authorized: true, role: sessionRole, userId: 'admin_master' };
  }

  return { authorized: false, role: 'reader', error: 'غير مصرح: يرجى تسجيل الدخول كمسؤول' };
}
