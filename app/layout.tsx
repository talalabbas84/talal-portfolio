import { cn } from '@/libs/utils';
import type { Metadata } from 'next';
import { Bricolage_Grotesque, Oswald } from 'next/font/google';
import localFont from "next/font/local";
import './globals.css';

// Fonts
const MainFont = Bricolage_Grotesque({ subsets: ['latin'] });
const SecondaryFont = Oswald({ subsets: ['latin'] , variable: "--font-oswald" });
const PixelFont = localFont({
  src: '../public/assets/fonts/pixel font-7.ttf',
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: 'Talal Jafri',
  description: 'Talal Jafri Official Portfolio',
  authors: [
    { name: 'Talal Jafri' },
    { name: 'Talal' },
    { name: 'Syed Talal Abbas Jafri' }
  ],
  keywords: [
    'Talal Jafri',
    'Talal',
    'Syed Talal Abbas Jafri',
    'Portfolio',
    'Official Portfolio',
    'Talal Jafri Portfolio',
    'Talal Portfolio',
    'Syed Talal Abbas Jafri Portfolio',
    'Talal Jafri Official Portfolio',
    'Talal Official Portfolio',
    'Syed Talal Abbas Jafri Official Portfolio'
  ],
  formatDetection: {
    telephone: true,
    email: true
  },
  publisher: 'Talal Jafri',
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(MainFont.className, SecondaryFont.variable, PixelFont.variable)}>{children}</body>
    </html>
  );
}
