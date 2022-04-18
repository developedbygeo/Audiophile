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
