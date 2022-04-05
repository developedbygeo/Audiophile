import { v4 as uuidv4 } from 'uuid';

import landingMobile from '../assets/home/mobile/image-hero.jpg';
import landingTablet from '../assets/home/tablet/image-hero.jpg';
import landingDesktop from '../assets/home/desktop/image-hero.jpg';

import thumbnailEarphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import thumbnailHeadphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import thumbnailSpeakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png';

export const landing = [landingMobile, landingTablet, landingDesktop];

export const thumbnails = [
  { path: thumbnailEarphones, alt: 'Earphones', id: uuidv4() },
  { path: thumbnailHeadphones, alt: 'Headphones', id: uuidv4() },
  { path: thumbnailSpeakers, alt: 'Speakers', id: uuidv4() }
];
