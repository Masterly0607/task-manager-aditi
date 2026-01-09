// // lib/api-client.ts
// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// if (!BASE_URL) {
//   throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
// }

// export async function apiGet<T>(endpoint: string): Promise<T> {
//   const res = await fetch(`${BASE_URL}${endpoint}`);

//   if (!res.ok) {
//     throw new Error(`API error: ${res.status}`);
//   }

//   return res.json();
// }

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3001";

type ApiError = {
  message: string;
  status?: number;
};

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const err: ApiError = {
      message: `Request failed: ${res.status} ${res.statusText}`,
      status: res.status,
    };
    throw err;
  }

  return (await res.json()) as T;
}

export const apiClient = {
  get: request,
};