import axios from "axios";
import { environment_URL } from "../environment/base";
const axiosInstance = axios.create({
  baseURL: environment_URL.baseURL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }
});

export const getMethod = async (request, requestObject) => {
  const url = request;
  console.log(axiosInstance);
  await axiosInstance
    .get(url, requestObject)
    .then((response) => {
      return response;
    })
    .catch((exp) => {
      throw exp;
    });
};

export const postMethod = async (request, requestObject) => {
  const url = request;
  console.log(axiosInstance);
  await axiosInstance
    .post(url, requestObject)
    .then((response) => {
      return response;
    })
    .catch((exp) => {
      throw exp;
    });
};
