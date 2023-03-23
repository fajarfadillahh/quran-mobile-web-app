import axios from "axios";

const RESTSurah = axios.create({
  baseURL: "https://apimuslimify.vercel.app/api/v1",
});

// get all surah
const getAllSurah = async () => {
  const response = await RESTSurah.get(`/surah`);
  return response.data.data;
};

export { getAllSurah };
