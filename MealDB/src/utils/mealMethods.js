import axios from "axios";

export const getCategories = async () => {
  return await axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getAreas = async () => {
  return await axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getIngredients = async () => {
  return await axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getMealByCategory = async (category) => {
  return await axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getMealByArea = async (area) => {
  return await axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getMealByName = async (name) => {
  if (isNaN(name)) {
    return await axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  } else {
    return await axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
};

export const getMealRecipes = async (id) => {
  return await axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.data.meals)
    .catch((err) => console.log(err));
};
