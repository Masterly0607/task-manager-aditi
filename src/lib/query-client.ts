// import { QueryClient } from "@tanstack/react-query";

// export const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       // Data is considered fresh for 5 minutes
//       staleTime: 1000 * 60 * 5,

//       // Retry failed requests once
//       retry: 1,

//       // Do not refetch automatically on window focus
//       refetchOnWindowFocus: false,

//       // Do not refetch automatically when component remounts
//       refetchOnMount: false,

//       // Do not refetch when reconnecting to internet
//       refetchOnReconnect: false,
//     },
//   },
// });

import { QueryClient } from "@tanstack/react-query";

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
}