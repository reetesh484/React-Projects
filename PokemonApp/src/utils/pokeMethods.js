import axios from "axios";

export const getPokeDetails = async (url) => {
  const result = await axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
    return result;
};

export const getPokeForms = async (url) => {
  const result = await axios
    .get(url)
    .then((res) => res.data.sprites)
    .catch((err) => console.log(err));
  return result;
};
