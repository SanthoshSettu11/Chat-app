import axios from "axios";
import { environment_URL } from "../environment/base";

export const getMethod = async (request, requestObject) => {
  const url = environment_URL.baseURL + request;
  let response = {};
  response = await axios
    .get(url, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true"
      },
      data: JSON.stringify(requestObject)
    })
    .then((response) => {
      return response.data;
    })
    .catch((exp) => {
      throw exp;
    });
  return await response;
};

export const postMethod = async (request, requestObject) => {
  const url = environment_URL.baseURL + request;
  let axiosConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  };
  let response = {};
  response = await axios
    .post(url, requestObject, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Accept-Type": "application/json",
        "Access-Control-Allow-Headers": "*"
      },
      withCredentials: false
    })
    .then((response) => {
      return response.data;
    })
    .catch((exp) => {
      throw exp;
    });
  return await response;
};
