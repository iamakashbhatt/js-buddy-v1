import axios from "axios";

const baseUrl = `${process.env.REACT_APP_BASE_URL}`;
async function apiGetMethod(url, param = {}, headers = {}) {
  try {
    console.log("headers", headers);
    let response = await axios.get(`${baseUrl}${url}`, {
      param,
      headers,
    });
    if (response) {
      return response;
    }
  } catch (err) {
    return err;
  }
}

async function apiPostMethod(url, data = {}, headers = {}) {
  try {
    let response = await axios.post(`${baseUrl}${url}`, data, headers);
    if (response) {
      return response;
    }
  } catch (err) {
    return err;
  }
}

export { apiGetMethod, apiPostMethod };
