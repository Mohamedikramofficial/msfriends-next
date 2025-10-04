import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ms Friends Trading & Contracting | Cleaning & Pest Control Doha',
  description: 'Professional cleaning and pest control services in Doha, Qatar. Available 24/7 with trained staff, eco-friendly materials, and same-day service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
