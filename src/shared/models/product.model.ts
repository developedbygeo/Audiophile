import data from 'data.json';

export type AllProductsType = typeof data;
export type ProductType = typeof data[0];
export type FeaturesType = typeof data[0]['features'];
export type IncludedType = typeof data[0]['includes'];
export type GalleryType = typeof data[0]['gallery'];
