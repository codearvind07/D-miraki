import { jwtDecode } from "jwt-decode";
export const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
// utils/auth.ts


type JwtPayload = {
  exp: number;
  [key: string]: any;
};

export function isTokenExpired(token: string): boolean {
  if (!token) return true;

  try {
    const decoded = jwtDecode<JwtPayload>(token);

    if (!decoded.exp) return true;

    const currentTime = Math.floor(Date.now() / 1000); // in seconds
    return decoded.exp < currentTime;
  } catch (error) {
    console.error('Invalid token:', error);
    return true;
  }
}
