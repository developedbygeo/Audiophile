import { v4 as uuidv4 } from 'uuid';

import landingMobile from '../assets/home/mobile/image-hero.jpg';
import landingTablet from '../assets/home/tablet/image-hero.jpg';
import landingDesktop from '../assets/home/desktop/image-hero.jpg';

import thumbnailEarphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import thumbnailHeadphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import thumbnailSpeakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png';

import zx9Mobile from '../assets/home/mobile/image-speaker-zx9.png';
import zx9Tablet from '../assets/home/tablet/image-speaker-zx9.png';
import zx9Desktop from '../assets/home/desktop/image-speaker-zx9.png';

import zx7Mobile from '../assets/home/mobile/image-speaker-zx7.jpg';
import zx7Tablet from '../assets/home/tablet/image-speaker-zx7.jpg';
import zx7Desktop from '../assets/home/desktop/image-speaker-zx7.jpg';

import yx1Mobile from '../assets/home/mobile/image-earphones-yx1.jpg';
import yx1Tablet from '../assets/home/tablet/image-earphones-yx1.jpg';
import yx1Desktop from '../assets/home/desktop/image-earphones-yx1.jpg';

export const landing = [landingMobile, landingTablet, landingDesktop];

export const thumbnails = [
  { path: thumbnailEarphones, alt: 'Earphones', id: uuidv4() },
  { path: thumbnailHeadphones, alt: 'Headphones', id: uuidv4() },
  { path: thumbnailSpeakers, alt: 'Speakers', id: uuidv4() }
];

export const zx9 = [zx9Mobile, zx9Tablet, zx9Desktop];

export const zx7 = [zx7Mobile, zx7Tablet, zx7Desktop];

export const yx1 = [yx1Mobile, yx1Tablet, yx1Desktop];
