'use client';
import '@/models/store';
import { FocaProvider } from 'foca';

export default function ModelProvider({ children }: { children: React.ReactNode }) {
  return <FocaProvider>{children}</FocaProvider>;
}
