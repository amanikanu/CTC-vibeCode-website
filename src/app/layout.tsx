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

export const metadata = {
  metadataBase: new URL('https://calabartechcommunity.com'),

  title: {
    default: 'Calabar Tech Community | Calabar’s Largest Tech Community',
    template: '%s | Calabar Tech Community',
  },

  description:
    'Calabar Tech Community is the biggest tech community in Calabar and South-South Nigeria, connecting developers, designers, founders, students, creators, and tech professionals through training, mentorship, events, innovation, and career opportunities.',

  keywords: [
    'Calabar Tech Community',
    'tech community in Calabar',
    'biggest tech community in Calabar',
    'tech community in South-South Nigeria',
    'technology community Nigeria',
    'Calabar technology ecosystem',
    'Cross River tech community',
    'tech events in Calabar',
    'software developers in Calabar',
    'tech training in Calabar',
    'AI training in Calabar',
    'startup community in Calabar',
    'developer community Nigeria',
    'tech careers in Calabar',
    'Calabar developers',
    'technology events Cross River',
  ],

  authors: [
    {
      name: 'Calabar Tech Community',
      url: 'https://calabartechcommunity.com',
    },
  ],

  creator: 'Calabar Tech Community',
  publisher: 'Calabar Tech Community',

  alternates: {
    canonical: 'https://calabartechcommunity.com',
  },

  openGraph: {
    title: 'Calabar Tech Community | Building South-South Nigeria’s Tech Ecosystem',
    description:
      'Join the biggest tech community in Calabar and South-South Nigeria. Learn new skills, connect with tech professionals, attend events, access mentorship, build projects, and discover opportunities in technology.',
    url: 'https://calabartechcommunity.com',
    siteName: 'Calabar Tech Community',
    images: [
      {
        url: '/og-image.jpg',
        width: 1024,
        height: 576,
        alt: 'Tech Conference Calabar 2025',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Calabar Tech Community | Calabar’s Largest Tech Community',
    description:
      'Learn, build, connect, and grow with the biggest tech community in Calabar and South-South Nigeria. Discover tech training, events, mentorship, projects, and opportunities.',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
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
