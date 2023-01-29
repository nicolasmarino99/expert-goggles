import { useEffect, useState } from 'react'
import { searchPhoto } from '../../../../api/services/apicalls';

export const useImage = (name: string) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    (async () => {
      const url = await searchPhoto(name);
      setImage(url);
    })();
  }, []);

  return (
    image
  )
}
