import axios from "axios";

const BASE_URL = "https://api.themagnit.com/v1";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});

const PAGES = {
  PAGES: `pages/bySlug`,
};

export const getPageDataApi = async (slug) => {
  try {
    let result = await axiosInstance.get(`${PAGES.PAGES}/${slug}`);
    return result.data;
  } catch (error) {
    console.log(error);
    if (error.response === undefined) {
      return { status: 403, message: "Something Went Wrong!" };
    }
    return error.response.data;
  }
};
