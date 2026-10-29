import { ArrowDown, ArrowUpRight, Construction } from 'lucide-react';
import { siteConfig } from '@/site.config';
import { instagramHref, whatsappLinks } from '@/lib/contact';
import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';

const servicos = ['Projeto e 3D', 'Cenografia', 'Técnica', 'Receptivo', 'Gestão de eventos', 'A&B', 'Móveis para PDV', 'Ações promocionais'];

const numeros = [
  { valor: '2014', texto: 'Primeiros jobs, em Manaus' },
  { valor: '360°', texto: 'Do projeto à operação' },
  { valor: 'AM·PA·RO', texto: 'Estados no nosso nome' },
  { valor: 'Capital e interior', texto: 'Em toda a Região Norte' },
];

const decks = [
  {
    id: 'ceno',
    pdf: '/apresentacoes/amparo-cenografia.pdf',
    pages: ['ceno-19', 'ceno-9', 'ceno-1'],
    tag: 'Cenografia',
    title: 'AMPARO Cenografia',
    text: 'Stands, pórticos e ambientes de marca, do projeto 3D à montagem. Cases para TECBAN, Yamaha, Meta, Gerdau, Eneva e O Boticário.',
    meta: '23 páginas · PDF · 6 MB',
  },
  {
    id: 'promo',
    pdf: '/apresentacoes/amparo-promocoes-e-eventos.pdf',
    pages: ['promo-10', 'promo-12', 'promo-1'],
    tag: 'Promoções e Eventos',
    title: 'AMPARO Promoções e Eventos',
    text: 'Live marketing, ações promocionais, gestão de eventos, receptivo, A&B e móveis para PDV. Da Tocha Olímpica às ativações de verão da CIMED.',
    meta: '29 páginas · PDF · 7,5 MB',
  },
];

const canais = [
  ...whatsappLinks.map((w) => ({
    href: w.href,
    rotulo: `WhatsApp · ${w.unidade} (${w.uf})`,
    valor: w.fone,
    aria: `WhatsApp da unidade ${w.unidade}, ${w.fone} (abre em nova aba)`,
    externo: true,
  })),
  { href: instagramHref, rotulo: 'Instagram · novidades e bastidores', valor: `@${siteConfig.instagram}`, aria: `Instagram @${siteConfig.instagram} (abre em nova aba)`, externo: true },
  { href: `mailto:${siteConfig.email}`, rotulo: 'E-mail', valor: <>{siteConfig.email.split('@')[0]}<wbr />@{siteConfig.email.split('@')[1]}</>, aria: `Enviar e-mail para ${siteConfig.email}`, externo: false, longo: true },
];

// Rótulo editorial numerado: "(01) Quem somos"
function SectionLabel({ n, children, className = '' }: { n: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 font-label text-sm font-semibold uppercase tracking-[0.2em] ${className}`}>
      <span className="tabular-nums">({n})</span>
      <span className="h-px w-10 bg-current opacity-40" aria-hidden="true" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <Hero />

      <main>
        {/* Faixa de serviços */}
        <div className="overflow-hidden border-y border-navy/10 bg-sun py-4 text-navy" aria-label="Serviços">
          <div className="marquee flex w-max">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                {servicos.map((s) => (
                  <li key={s} className="flex items-center font-label text-xl font-semibold uppercase tracking-[0.12em] whitespace-nowrap sm:text-2xl">
                    <span className="px-6">{s}</span>
                    <span className="text-royal" aria-hidden="true">✳</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* (01) Quem somos - planta técnica e sol das capas das apresentações */}
        <section id="quem-somos" aria-labelledby="about-title" className="blueprint relative isolate overflow-hidden bg-sky text-navy">
          <div className="absolute -right-[18vw] -bottom-[30%] -z-10 aspect-square w-[min(70vw,760px)] rounded-full bg-sun" aria-hidden="true" />

          <div className="container grid items-center gap-12 py-24 sm:py-32 lg:grid-cols-[1.15fr_.85fr]">
            <div className="reveal">
              <SectionLabel n="01">Quem somos</SectionLabel>
              <p className="mt-8 flex gap-[0.08em] text-[clamp(4rem,2rem+9vw,9.5rem)] leading-[.85] font-bold tracking-[-0.04em]" aria-hidden="true">
                <span className="text-royal">AM</span><span className="text-brand-red">PA</span><span>RO</span>
              </p>
              <h2 id="about-title" className="mt-8 max-w-[18ch] text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Um nome que já diz onde estamos.
              </h2>
              <p className="mt-5 max-w-[56ch] text-lg leading-relaxed">
                AMPARO une as iniciais de <strong className="font-semibold">Amazonas, Pará e Rondônia</strong> e resume o que
                fazemos: amparar marcas e parceiros que realizam eventos e ações promocionais na Região Norte. Somos uma
                agência 360° de cenografia, marketing promocional e eventos, que combina conhecimento local com a
                experiência do mercado de eventos do Sudeste.
              </p>
            </div>

            {/* Desenho técnico de um stand */}
            <svg className="stand-drawing reveal mx-auto w-full max-w-[420px] overflow-visible lg:mr-0" viewBox="60 0 350 350" aria-hidden="true">
              <g className="stand">
                <path className="fill-floor" d="M210 150 L387 252 L269 320 L92 218 Z" />
                <path className="fill-wall" d="M210 150 L387 252 L387 150 L210 48 Z" />
                <path className="fill-wall2" d="M210 150 L92 218 L92 116 L210 48 Z" />
                <path className="fill-accent" d="M210 48 L387 150 L387 126 L210 24 Z" />
                <path d="M245 130 L304 164 L304 123 L245 89 Z" />
                <path d="M181 133 L122 167 M181 106 L122 140" />
                <path className="fill-wall" d="M213 264 L272 298 L272 260 L213 226 Z" />
                <path className="fill-wall2" d="M298 283 L272 298 L272 260 L298 245 Z" />
                <path className="fill-accent" d="M239 211 L298 245 L272 260 L213 226 Z" />
              </g>
              <g className="dims">
                <path d="M80 232 L257 334 M76 226 L84 238 M253 328 L261 340" />
                <path d="M401 252 L401 126 M395 252 L407 252 M395 126 L407 126" />
                <text x="148" y="300" transform="rotate(30 148 300)">6,00 m</text>
                <text x="410" y="194" transform="rotate(90 410 194)">3,70 m</text>
              </g>
            </svg>
          </div>

          <dl className="container grid grid-cols-2 border-t border-navy/20 lg:grid-cols-4">
            {numeros.map((n, i) => (
              <div key={n.valor} className={`py-8 pr-4 ${i % 2 ? 'pl-4 border-l border-navy/20' : ''} ${i > 0 ? 'lg:border-l lg:border-navy/20 lg:pl-6' : ''} ${i > 1 ? 'border-t border-navy/20 lg:border-t-0' : ''}`}>
                <dt className="font-label text-[clamp(1.6rem,1.1rem+1.8vw,2.6rem)] leading-none font-semibold uppercase">{n.valor}</dt>
                <dd className="mt-2 text-sm sm:text-base">{n.texto}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* (02) Apresentações - linhas numeradas */}
        <section id="apresentacoes" aria-labelledby="decks-title" className="bg-paper py-24 text-navy sm:py-32">
          <div className="container">
            <div className="reveal grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <SectionLabel n="02" className="text-royal">Apresentações</SectionLabel>
                <h2 id="decks-title" className="mt-6 text-[clamp(2.25rem,1.4rem+3.6vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-balance">
                  Conheça a AMPARO por dentro.
                </h2>
              </div>
              <p className="max-w-sm text-lg text-muted-foreground">
                Projetos, cases e serviços em duas apresentações. Abra no navegador ou baixe para compartilhar.
              </p>
            </div>

            <ol className="mt-14 border-b border-navy/15">
              {decks.map((d, i) => (
                <li key={d.id} className="reveal grid gap-6 border-t border-navy/15 py-10 sm:gap-8 lg:grid-cols-12 lg:gap-10 lg:py-14">
                  <span className="font-label text-4xl leading-none font-semibold text-navy/25 lg:col-span-1 lg:text-6xl">0{i + 1}</span>

                  <a
                    href={d.pdf}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Abrir apresentação ${d.title} (PDF, nova aba)`}
                    className={`deck-stack blueprint-light relative block aspect-[16/11] w-full max-w-xl rounded-2xl lg:col-span-5 lg:max-w-none ${d.id === 'promo' ? 'bg-[#fdf3cf]' : 'bg-[#e7ecfa]'}`}
                  >
                    {d.pages.map((p, j) => (
                      <img
                        key={p}
                        src={`/assets/capas/${p}.webp`}
                        width={720}
                        height={405}
                        loading="lazy"
                        alt={j === d.pages.length - 1 ? `Capa da apresentação ${d.title}` : ''}
                      />
                    ))}
                  </a>

                  <div className="flex flex-col lg:col-span-6">
                    <p className={`font-label text-sm font-semibold uppercase tracking-[0.18em] ${d.id === 'promo' ? 'text-[#8a6a00]' : 'text-royal'}`}>{d.tag}</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{d.title}</h3>
                    <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">{d.text}</p>
                    <p className="mt-4 font-label text-sm uppercase tracking-[0.14em] text-muted-foreground">{d.meta}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 lg:mt-auto lg:pt-8">
                      <a
                        href={d.pdf}
                        target="_blank"
                        rel="noopener"
                        className="group inline-flex h-13 items-center gap-3 rounded-full bg-navy pr-1.5 pl-6 font-medium text-white transition-colors hover:bg-royal"
                      >
                        Ver apresentação<span className="sr-only"> {d.title} (abre em nova aba)</span>
                        <span className="grid size-10 place-items-center rounded-full bg-sun text-navy transition-transform duration-300 group-hover:rotate-45">
                          <ArrowUpRight size={20} aria-hidden="true" />
                        </span>
                      </a>
                      <a href={d.pdf} download className="inline-flex items-center gap-2 font-medium underline decoration-navy/30 underline-offset-[6px] transition-colors hover:decoration-navy">
                        <ArrowDown size={18} aria-hidden="true" />
                        Baixar PDF<span className="sr-only"> {d.title}</span>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* (03) Contato - links grandes em lista */}
        <section id="contato" aria-labelledby="contact-title" className="relative overflow-hidden bg-navy pt-24 pb-6 text-white sm:pt-32 sm:pb-8">
          <div className="container">
            <div className="reveal">
              <SectionLabel n="03" className="text-sun">Contato</SectionLabel>
              <h2 id="contact-title" className="mt-6 max-w-[17ch] text-[clamp(2.25rem,1.3rem+4vw,5rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-balance">
                Vamos transformar sua próxima ideia em uma grande experiência?
              </h2>
              <p className="mt-6 max-w-md text-lg text-white/75">Escolha a unidade mais próxima e fale direto com a nossa equipe.</p>
            </div>

            <ul className="mt-14 border-b border-white/15">
              {canais.map((c) => (
                <li key={c.href} className="border-t border-white/15">
                  <a
                    href={c.href}
                    {...(c.externo ? { target: '_blank', rel: 'noopener' } : {})}
                    aria-label={c.aria}
                    className="group flex items-center gap-4 py-6 transition-colors sm:py-8"
                  >
                    <span className="flex min-w-0 flex-1 flex-col gap-1 transition-transform duration-300 group-hover:translate-x-2">
                      <span className="font-label text-sm uppercase tracking-[0.18em] text-white/60">{c.rotulo}</span>
                      <span className={`${'longo' in c ? 'text-[clamp(1.05rem,0.5rem+3.3vw,2.75rem)]' : 'text-[clamp(1.35rem,0.9rem+2.6vw,3.25rem)]'} [overflow-wrap:break-word] leading-tight font-semibold tracking-tight group-hover:text-sun`}>
                        {c.valor}
                      </span>
                    </span>
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/25 transition-all duration-300 group-hover:rotate-45 group-hover:border-sun group-hover:bg-sun group-hover:text-navy sm:size-16">
                      <ArrowUpRight size={24} aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-navy py-10 text-sm text-white/70">
        <div className="container flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <img src="/assets/logo-amparo-branco.png" width={1200} height={378} alt="AMPARO" loading="lazy" className="h-9 w-auto" />
          <p>© {new Date().getFullYear()} AMPARO · Cenografia, Promoções e Eventos · Região Norte do Brasil</p>
          <p className="inline-flex items-center gap-2">
            <Construction size={16} className="text-sun" aria-hidden="true" />
            Novo site em breve
          </p>
        </div>
      </footer>
    </>
  );
}
