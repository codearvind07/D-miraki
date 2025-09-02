'use client';

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react';

// Type-safe way to access QueryClient
type QueryClientConstructor = new () => any;
const QueryClient = (require('@tanstack/react-query') as { QueryClient: QueryClientConstructor }).QueryClient;

export default function ClientQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
