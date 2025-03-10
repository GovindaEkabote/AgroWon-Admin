import axios from "axios";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = axios.get("http://localhost:4001" + url);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postData = async (url, formData) => {
  try {
    const { data } = await axios.post("http://localhost:4001" + url, formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
  