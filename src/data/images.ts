import { getImage } from 'astro:assets';
import { img } from './site';

/* Opsi gambar besar di hero dipakai di dua tempat (render + preload), jadi harus identik */
export const HERO_SIZES = '(min-width: 1024px) 460px, 92vw';
export const heroImage = (name: string) => getImage({ src: img(name), widths: [480, 720, 960], format: 'webp' });
export const preloadOf = async (name: string) => {
  const r = await heroImage(name);
  return { srcset: r.srcSet.attribute, sizes: HERO_SIZES };
};
