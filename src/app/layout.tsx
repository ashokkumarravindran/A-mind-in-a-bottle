import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'A Mind in a Bottle - Immersive Essays on Living',
  description:
    'Reflections on life, consciousness, and the art of living. A modern, immersive reading experience.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
