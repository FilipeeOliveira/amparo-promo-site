import { siteConfig } from '@/site.config';

// (69) 99606-0000 a partir de 5569996060000
export const fone = (n: string) => {
  const d = n.slice(2);
  return `(${d.slice(0, 2)}) ${d.slice(2, -4)}-${d.slice(-4)}`;
};

export const whatsappLinks = siteConfig.whatsapp.map((w) => ({
  ...w,
  href: `https://wa.me/${w.numero}?text=${encodeURIComponent(w.mensagem)}`,
  fone: fone(w.numero),
}));

export const instagramHref = `https://www.instagram.com/${siteConfig.instagram}/`;
