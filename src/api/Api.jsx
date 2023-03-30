import axios from "axios";

const URL = axios.create({
  baseURL: "https://apimuslimify.vercel.app/api/v2",
});

// get all surah
const getAllSurah = async () => {
  const response = await URL.get(`/surah`);
  return response.data.data;
};

// get surah by id
const getSurahById = async (id) => {
  const response = await URL.get(`/surah?number=${id}`);
  return response.data.data;
};

// get quote
const getQuote = async () => {
  const response = await URL.get(`/quote`);
  return response.data.data;
};

// get daiily prayer
const getDailyPrayer = async () => {
  const response = await URL.get(`/doaharian`);
  return response.data.data;
};

// get asmaul-husna
const getAsmaulHusna = async () => {
  const response = await URL.get(`/asmaulhusna`);
  return response.data.data;
};

export { getAllSurah, getSurahById, getQuote, getDailyPrayer, getAsmaulHusna };
