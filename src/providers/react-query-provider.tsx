"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
// Main goal of react-query-provider.tsx = Make the whole app able to use React Query: Wraps the app with QueryClientProvider, Turns React Query ON, sed once (in layout.tsx).
// Main goal of lib/query-client.ts = Configure default React Query behavior: Cache time, Retry count, Refetch rules, Create ONE shared QueryClient
// Note: What happens if you DON’T create query-client.ts? = React Query will use its DEFAULT CONFIG. We still can use React Query without query-client.ts file
