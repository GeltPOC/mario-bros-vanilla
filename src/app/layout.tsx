import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'mario-bros-vanilla',
  description: 'mario-bros-vanilla app',
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
