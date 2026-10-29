import type { Metadata, Viewport } from 'next';
import { Lexend, Saira_Condensed } from 'next/font/google';
import { siteConfig } from '@/site.config';
import './globals.css';
import { cn } from "@/lib/utils";

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-sans' });
const saira = Saira_Condensed({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-saira' });

const description =
  'Agência 360° de cenografia, marketing promocional e eventos na Região Norte do Brasil. Nosso novo site está em montagem. Conheça nossas apresentações e fale com a equipe.';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'AMPARO - Cenografia, Promoções e Eventos | Região Norte',
  description,
  alternates: { canonical: '/' },
  icons: { icon: '/favicon-32.png', apple: '/apple-touch-icon.png' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'AMPARO',
    title: 'AMPARO - Cenografia, Promoções e Eventos',
    description: 'Cenografia, ações promocionais e eventos em toda a Região Norte. Conheça nossas apresentações e fale com a equipe.',
    url: '/',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#6c93dc' };

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AMPARO - Cenografia, Promoções e Eventos',
  url: siteConfig.url,
  logo: `${siteConfig.url}/assets/icone-512.png`,
  email: siteConfig.email,
  areaServed: 'Região Norte do Brasil',
  foundingDate: '2014',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={cn(lexend.variable, saira.variable)}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
