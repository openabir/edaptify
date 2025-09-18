import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/Navbar';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'LearnHub - Online Learning Platform',
  description:
    'Empowering learners worldwide with high-quality, accessible online education. Join thousands of students on their journey to success.',
  keywords: 'online learning, courses, education, skills, programming, design',
  authors: [{ name: 'LearnHub Team' }],
  creator: 'LearnHub',
  publisher: 'LearnHub',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://learnhub.com',
    title: 'LearnHub - Online Learning Platform',
    description:
      'Empowering learners worldwide with high-quality, accessible online education.',
    siteName: 'LearnHub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LearnHub - Online Learning Platform',
    description:
      'Empowering learners worldwide with high-quality, accessible online education.',
    creator: '@learnhub',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
