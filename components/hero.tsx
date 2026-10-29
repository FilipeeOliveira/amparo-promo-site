'use client';

// Adaptado do bloco Shadcn Space "hero-03" (vídeo em tela cheia + marca gigante + botão-seta),
// com a barra de edição (REC, timecode e régua) da identidade "showreel" da AMPARO.
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { siteConfig } from '@/site.config';

const pad = (n: number) => String(Math.floor(n)).padStart(2, '0');
// hh:mm:ss:quadros (25 fps), como numa ilha de edição
const timecode = (t: number) => `${pad(t / 3600)}:${pad((t / 60) % 60)}:${pad(t % 60)}:${pad((t % 1) * 25)}`;

// Entrada em CSS (.hero-rise): o conteúdo fica visível mesmo sem JavaScript
const delay = (s: number) => ({ animationDelay: `${s}s` });

export function Hero() {
  const { video, poster } = siteConfig.showreel;
  const videoRef = useRef<HTMLVideoElement>(null);
  const tcRef = useRef<HTMLSpanElement>(null);
  const headRef = useRef<HTMLSpanElement>(null);
  const [playing, setPlaying] = useState(false);

  // Autoplay só para quem não pediu movimento reduzido
  useEffect(() => {
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) videoRef.current?.play().catch(() => {});
  }, []);

  // Timecode e playhead atualizados direto no DOM (sem re-render a cada quadro)
  useEffect(() => {
    const v = videoRef.current!;
    let raf = 0;
    const tick = () => {
      tcRef.current!.textContent = timecode(v.currentTime);
      headRef.current!.style.left = `${v.duration ? (v.currentTime / v.duration) * 100 : 0}%`;
      if (playing) raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const toggle = () => {
    const v = videoRef.current!;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <section id="inicio" className="relative isolate flex min-h-svh items-end overflow-hidden bg-navy text-white">
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 size-full object-cover"
        src={video}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="absolute inset-0 -z-10 bg-navy/45" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy via-navy/30 to-navy/60" />

      <div id="conteudo" className="container pt-32 pb-8 sm:pb-10">
        <div className="hero-rise flex max-w-lg items-start gap-3 sm:gap-4" style={delay(0.1)}>
          {/* "Refletor" girando: 8 feixes */}
          <svg viewBox="0 0 40 40" className="size-9 shrink-0 animate-[spin_12s_linear_infinite] text-sun sm:size-11" aria-hidden="true">
            {Array.from({ length: 8 }, (_, i) => (
              <rect key={i} x="18.5" y="2" width="3" height="14" rx="1.5" fill="currentColor" transform={`rotate(${i * 45} 20 20)`} />
            ))}
          </svg>
          <p className="text-base leading-relaxed text-white/90 sm:text-lg">
            Transformamos <span className="text-sun">ideias em experiências</span> memoráveis: cenografia,
            ações promocionais e eventos em toda a Região Norte.
          </p>
        </div>

        <div className="hero-rise mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:gap-8" style={delay(0.25)}>
          <h1 className="w-[min(100%,880px)]">
            <img src="/assets/logo-amparo-branco.png" width={1200} height={378} alt="AMPARO - Cenografia, Promoções e Eventos" />
          </h1>
          <a
            href="#apresentacoes"
            className="group mb-[2%] inline-flex shrink-0 items-center rounded-full bg-sun p-1 pl-6 text-navy transition-[padding] duration-300 hover:pl-8 sm:pl-8 sm:hover:pl-10"
          >
            <span className="pr-4 font-label text-sm font-semibold uppercase tracking-[0.16em]">Ver trabalhos</span>
            <span className="grid size-11 place-items-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45 sm:size-13">
              <ArrowUpRight size={24} aria-hidden="true" />
            </span>
          </a>
        </div>

        {/* Barra de edição: régua com playhead, status do site, REC e controle do vídeo */}
        <div className="hero-rise mt-10 sm:mt-14" style={delay(0.4)}>
          <div className="ruler relative h-3.5" aria-hidden="true">
            <span ref={headRef} className="absolute -inset-y-1 left-0 w-0.5 bg-sun shadow-[0_0_8px_var(--sun)]" />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-base font-medium sm:text-lg">
              Nosso novo site está em montagem.
              <span className="font-light text-white/70"> Seguimos atendendo normalmente.</span>
            </p>
            <div className="ml-auto flex items-center gap-4 font-label text-sm uppercase tracking-[0.16em]">
              <span className="inline-flex items-center gap-2">
                <span className={`size-2.5 rounded-full bg-brand-red ${playing ? 'animate-pulse' : 'opacity-50'}`} aria-hidden="true" />
                {playing ? 'Rec' : 'Pausado'}
              </span>
              <span ref={tcRef} className="tabular-nums text-white/75">00:00:00:00</span>
              <button
                type="button"
                onClick={toggle}
                aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/30 bg-white/10 transition-colors hover:bg-white/20"
              >
                {playing ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
