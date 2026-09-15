import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL('https://calabartechcommunity.com'),
  title: {
    default: 'Calabar Tech Community',
    template: `%s | Calabar Tech Community`,
  },
  description: 'The heart of technology and innovation in Calabar, Nigeria. Join us to learn, build, and grow together.',
  openGraph: {
    title: 'Calabar Tech Community',
    description: 'The heart of technology and innovation in Calabar, Nigeria. Join us to learn, build, and grow together.',
    url: 'https://calabartechcommunity.com',
    siteName: 'Calabar Tech Community',
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630',
        width: 1200,
        height: 630,
        alt: 'Calabar Tech Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calabar Tech Community',
    description: 'The heart of technology and innovation in Calabar, Nigeria. Join us to learn, build, and grow together.',
    images: ['https://picsum.photos/seed/og-image/1200/630'],
  },
  icons: {
    icon: '/logo.svg',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-body antialiased', inter.variable, spaceGrotesk.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
