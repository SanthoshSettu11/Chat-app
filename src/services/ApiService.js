import axios from "axios";
import { environment_URL } from "../environment/base";

export const getMethod = async (request, requestObject) => {
  const url = environment_URL.baseURL + request;
  await axios
    .get(url, {
      data: requestObject,
      crossorigin: true,
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        referrer: "no-referrer",
        Referer: "no-referrer",
        credentials: true,
        method: "GET,OPTIONS,POST"
      }
    })
    .then((response) => {
      return response;
    })
    .catch((exp) => {
      throw exp;
    });
};

export const postMethod = async (request, requestObject) => {
  const url = environment_URL.baseURL + request;
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  };
  await axios
    .get(url, requestObject, axiosConfig)
    .then((response) => {
      return response;
    })
    .catch((exp) => {
      throw exp;
    });
};
