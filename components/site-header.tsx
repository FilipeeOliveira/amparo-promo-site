'use client';

// Adaptado do navbar do bloco Shadcn Space "hero-03": fixo, preenche de azul-marinho ao rolar
// e abre um menu grande com as seções e os contatos.
import { useEffect, useState } from 'react';
import { Construction, Equal, X } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/site.config';
import { whatsappLinks } from '@/lib/contact';

const secoes = [
  { title: 'Início', href: '#inicio' },
  { title: 'Quem somos', href: '#quem-somos' },
  { title: 'Apresentações', href: '#apresentacoes' },
  { title: 'Contato', href: '#contato' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex h-18 items-center text-white',
        "before:absolute before:inset-x-0 before:top-0 before:h-0 before:bg-navy/95 before:backdrop-blur before:transition-all before:duration-500 before:content-['']",
        scrolled && 'before:h-full',
      )}
    >
      <div className="absolute inset-x-0 top-0 grid h-1 grid-cols-4" aria-hidden="true">
        <span className="bg-royal" /><span className="bg-brand-red" /><span className="bg-sun" /><span className="bg-pink" />
      </div>

      <nav className="container relative flex items-center gap-4" aria-label="Principal">
        <a href="#inicio" className="shrink-0">
          <img src="/assets/logo-amparo-branco.png" width={1200} height={378} alt="AMPARO - início" className="h-9 w-auto sm:h-10" />
        </a>
        <span className="ml-4 hidden items-center gap-2 font-label text-sm uppercase tracking-[0.16em] text-white/80 md:inline-flex">
          <Construction size={16} className="text-sun" aria-hidden="true" />
          Novo site em montagem
        </span>

        <a
          href="#contato"
          className="ml-auto hidden h-11 items-center rounded-full border border-white/30 px-5 text-sm font-medium transition-colors hover:bg-white hover:text-navy sm:inline-flex"
        >
          Fale com a gente
        </a>

        <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
          <DropdownMenuTrigger
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="ml-auto flex size-11 cursor-pointer items-center justify-center rounded-full bg-white text-navy outline-none transition-transform hover:scale-105 focus-visible:ring-3 focus-visible:ring-sun sm:ml-0 sm:size-12"
          >
            {open ? <X size={18} /> : <Equal size={18} />}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={14}
            className="w-[min(92vw,380px)] rounded-3xl border-none bg-paper p-0 text-navy shadow-2xl"
          >
            <div className="flex flex-col gap-6 px-7 py-7">
              <p className="font-label text-xs uppercase tracking-[0.2em] text-muted-foreground">Navegue</p>
              <ul className="-mt-2 flex flex-col">
                {secoes.map((s) => (
                  <li key={s.href}>
                    {/* classes no Item (mescladas com cn); no <a> o asChild só concatena e o text-sm padrão venceria */}
                    <DropdownMenuItem
                      asChild
                      className="group cursor-pointer gap-0 rounded-none p-0 py-1.5 text-3xl font-semibold tracking-tight transition-all duration-300 hover:gap-3 focus:gap-3 focus:bg-transparent"
                    >
                      <a href={s.href}>
                        <span className="size-0 rounded-full bg-sun transition-all duration-300 group-hover:size-3 group-focus:size-3" aria-hidden="true" />
                        {s.title}
                      </a>
                    </DropdownMenuItem>
                  </li>
                ))}
              </ul>
              <hr className="border-navy/10" />
              <div className="flex flex-col gap-3">
                {whatsappLinks.map((w) => (
                  <DropdownMenuItem asChild key={w.uf} className="cursor-pointer flex-col items-start gap-0 rounded-lg p-0 text-lg font-medium hover:text-royal focus:bg-transparent focus:text-royal">
                    <a href={w.href} target="_blank" rel="noopener">
                      <span className="font-label text-xs font-normal uppercase tracking-[0.18em] text-muted-foreground">WhatsApp · {w.unidade}</span>
                      {w.fone}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild className="cursor-pointer rounded-lg p-0 text-lg font-semibold hover:text-royal focus:bg-transparent focus:text-royal">
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </DropdownMenuItem>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}
