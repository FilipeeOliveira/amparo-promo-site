// Links de contato e domínio da página. Edite apenas este arquivo para trocar números e perfis.
// WhatsApp: número com DDI + DDD, só dígitos (ex.: 5569996060000).
export const siteConfig = {
  url: 'https://www.amparopromo.com.br', // domínio final (usado no SEO e na imagem de compartilhamento)
  whatsapp: [
    {
      unidade: 'Rondônia',
      uf: 'RO',
      numero: '5569996060000', // (69) 99606-0000 - extraído da apresentação; confirmar
      mensagem: 'Olá! Vim pelo site da AMPARO e gostaria de falar com a unidade Rondônia.',
    },
    {
      unidade: 'Amazonas',
      uf: 'AM',
      numero: '5592992202216', // (92) 99220-2216 - extraído da apresentação; confirmar
      mensagem: 'Olá! Vim pelo site da AMPARO e gostaria de falar com a unidade Amazonas.',
    },
  ],
  instagram: 'amparo.promo',
  showreel: {
    // Vídeo provisório montado com fotos das apresentações. Troque pelo vídeo final
    // (MP4 H.264 ou WebM, sem áudio, 20 a 40 s, idealmente < 8 MB) colocando-o em public/videos/.
    video: '/videos/showreel.webm',
    poster: '/assets/showreel-poster.jpg', // imagem exibida enquanto o vídeo carrega
  },
  email: 'contato@amparopromo.com.br',
};
