import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const withQueryClient = (component: () => ReactNode) => () => {
  return (
    <QueryClientProvider client={queryClient}>
      {component()}
    </QueryClientProvider>
  );
};
