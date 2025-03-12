import axios from "axios";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } =await axios.get("http://localhost:4001" + url);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const editDataFromApi = async(url, updateData) =>{
  try {
    const { data } =await axios.put(`http://localhost:4001${url}`, updateData);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const postData = async (url, formData) => {
  try {
    const { data } = await axios.post("http://localhost:4001" + url, formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
  

export const deleteDataApi = async(url) =>{
  try {
    const { data } =await axios.delete(`http://localhost:4001${url}`);
    return data;
  } catch (error) {
    console.log(error);    
  }
}