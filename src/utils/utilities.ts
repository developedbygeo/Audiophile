import { AllProductsType, ProductType } from 'shared/models/product.model';

type SpecificItem = {
  (arr: AllProductsType, id: number): ProductType;
};

export const derivedViewport = (width: number) => {
  if (width < 768) return 'mobile';
  if (width >= 768 && width < 1024) return 'tablet';
  return 'desktop';
};

export const ordinalLookup = {
  '0': 'first',
  '1': 'second',
  '2': 'third'
};

export const getOrdinal = (n: number) => {
  const formatted = n.toString();
  if (formatted in ordinalLookup) return ordinalLookup[formatted as keyof typeof ordinalLookup];
  return '';
};

export const getImagePath = (partialPath: string, sliceCount: number = 8) => {
  return `images/${partialPath.slice(sliceCount)}`;
};

export const getCartImage = (productName: string) => {
  const formattedName = productName.toLowerCase().replace(/\s+/g, '-');
  return `/images/cart/image-${formattedName}.jpg`;
};

export const trimProductName = (name: string) => {
  return name.replace(/ headphones|speaker|earphones/gi, '');
};

export const getSpecificItem: SpecificItem = (arr, id) => {
  return arr.filter((item) => item.id === id)[0];
};

export const getVatValue = (cost: number) => {
  return Math.ceil((cost * 0.2) / 10) * 10;
};

export const getShippingCost = (cost: number) => {
  const maxEvaluation = Math.max(50, cost * 10) / 1000;
  const ceiling = Math.ceil(maxEvaluation * 10);
  return Math.min(ceiling, 1000).toLocaleString();
};
