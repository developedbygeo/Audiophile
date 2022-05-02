import { paymentData } from 'utils/checkoutData';

export type DataKeys = keyof typeof paymentData;
export type PaymentFieldType = keyof typeof paymentData.paymentMethods[0];
export type MethodTypes = 'emoney' | 'cod';
export type PaymentInputType = typeof paymentData.paymentDetails;
