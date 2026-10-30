# AMPARO — página temporária

Next.js com exportação estática. Não precisa de servidor Node em produção.

```bash
npm install
npm run dev     # desenvolvimento: http://localhost:3000
npm run build   # gera a pasta dist/
```

**Publicar na Hostinger:** rode `npm run build` e envie o **conteúdo** de `dist/` para `public_html/` (Gerenciador de Arquivos ou FTP).

## Onde editar

- `site.config.ts`: WhatsApp, @ do Instagram, e-mail, domínio e o vídeo/cases do showreel.
- `app/page.tsx`: textos, serviços, números, apresentações e contatos (seções 01–03 e rodapé).
- `components/hero.tsx`: hero com vídeo (adaptado do bloco Shadcn Space `hero-03`), timecode e REC.
- `components/site-header.tsx`: cabeçalho fixo com menu (adaptado do navbar do `hero-03`).
- `components/ui/`: componentes shadcn (`npx shadcn@latest add <componente>`). O tema shadcn já usa as cores da marca (`app/globals.css`), e Tailwind tem os utilitários `bg-navy`, `text-sun`, `bg-sky`, `bg-royal`, `font-label`.

**Trocar o vídeo:** coloque o arquivo em `public/videos/` e altere `showreel.video` em `site.config.ts`. Use MP4 (H.264) ou WebM, sem áudio, de 20 a 40 s e, se possível, com menos de 8 MB. O vídeo atual é provisório, montado com fotos das apresentações.
- `app/layout.tsx`: título, descrição e metadados de compartilhamento (SEO).
- `app/globals.css`: cores e estilos.
- `public/apresentacoes/`: PDFs, comprimidos a partir de `docs/`. URLs diretas: `/apresentacoes/amparo-cenografia.pdf` e `/apresentacoes/amparo-promocoes-e-eventos.pdf`.
- `public/assets/`: logo, prévias das capas e imagem de compartilhamento.

Para recomprimir um PDF novo:
`gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -dColorImageResolution=100 -dGrayImageResolution=100 -sOutputFile=saida.pdf entrada.pdf`
