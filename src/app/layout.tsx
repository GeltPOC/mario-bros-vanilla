import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mario Bros - Vanilla JS',
  description: 'Super Mario Bros game built with pure HTML5 Canvas, CSS and JavaScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}