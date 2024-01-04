import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MCBE Cape Persona Maker',
  description: '統合版マインクラフトのマント付きスキンの作成をサポート。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja' className='dark'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
