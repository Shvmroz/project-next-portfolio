import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import RouteChangeHandler from './RouteChangeHandler';
import FloatingNavbar from '@/components/FloatingNavbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shamroz Khan - Portfolio',
  description: 'Portfolio of Shamroz Khan, a web developer and a software engineer',
  icons: {
    icon: '/logo.PNG',
    shortcut: '/logo.PNG',
    apple: '/logo.PNG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RouteChangeHandler />
          <FloatingNavbar />
          <main className="relative min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}