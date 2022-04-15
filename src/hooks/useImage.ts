import { useEffect, useState } from 'react';

const useImage = (imagePartialPath: string) => {
  const formattedPath = imagePartialPath.slice(8);
  const [image, setImage] = useState<null | string>(null);

  useEffect(() => {
    setImage(`images/${formattedPath}`);
  }, [formattedPath]);

  return image;
};

export default useImage;
