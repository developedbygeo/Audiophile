import data from 'data.json';
import checkoutData from 'utils/checkoutData';

export type AllProductsType = typeof data;
export type ProductType = typeof data[0];
export type FeaturesType = typeof data[0]['features'];
export type IncludedType = typeof data[0]['includes'];
export type GalleryType = typeof data[0]['gallery'];
export type SimilarProductsType = typeof data[0]['others'];

export type CheckoutDataType = typeof checkoutData.billing | typeof checkoutData.shipping;
export type CheckoutDataKeys = keyof typeof checkoutData;
export type CheckoutInputType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  country: string;
};
export type CheckoutFieldNameType = keyof CheckoutInputType;
