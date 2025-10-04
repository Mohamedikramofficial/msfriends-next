// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ms Friends — Cleaning & Pest Control in Doha (24/7)',
  description:
    '24/7 cleaning & pest control in Doha. Cockroach & bedbug treatment, mosquito control, deep cleaning. WhatsApp +974 77430206.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
