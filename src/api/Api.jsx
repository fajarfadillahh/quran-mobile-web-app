import axios from "axios";

const RESTSurah = axios.create({
  baseURL: "http://apimuslimify.vercel.app/api/v2",
});

// get all surah
const getAllSurah = async () => {
  const response = await RESTSurah.get(`/surah`);
  return response.data.data;
};

// get surah by id
const getSurahById = async (id) => {
  const response = await RESTSurah.get(`/surah?number=${id}`);
  return response.data.data;
};

export { getAllSurah, getSurahById };
