import checkoutData from 'utils/checkoutData';

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
