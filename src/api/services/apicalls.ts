import axios from "axios";

export const searchPhoto = async (keyWord: string) => {
    try {
      const clientIDKey = '5phIk2Z31V96pArCaFDbgnDH0rG6gJZ7NMaCr4R3CEg';
      const url = `https://api.unsplash.com/search/photos/?client_id=${clientIDKey}&query=${keyWord}`;
      const data = await (await axios.get(url)).data;
      const photo = data?.results[0].urls.thumb;
      return photo
    } catch (error) {
      alert(error);
    }
};