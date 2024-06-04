import axios from "axios";
import { API_ROUTE } from "utils/constants";
import { APIError } from "./Errors";

const makeCall = async (config) => {
  try {
    const fullURL = `${API_ROUTE}${config.route}`;
    const header = config.header ? { ...config.header } : {};

    if (config.reCaptchaToken) {
      header["RECAPTCHA-RESPONSE"] = config.reCaptchaToken;
    }

    const response = await axios({
      method: config.method,
      params: config.query,
      data: config.body,
      url: fullURL,
      headers: header,
      responseType: config.responseType || "json",
      // onUploadProgress: config.onUploadProgress,
    });

    if (config.isOnDownload && response.data.code === "0") {
      const fileExtension = response.data.url.slice(
        response.data.url.lastIndexOf(".") + 1
      );
      // const url = URL.createObjectURL(new Blob([response.data]));
      const url = response.data.url;
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${Date.now()}.${fileExtension}`);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    } else if (response.status === 200 && config.returnCleanResponse) {
      return response;
    } else if (response.status === 200) {
      return response.data;
    } else {
      throw new APIError(response.status, response.data?.message);
    }
  } catch (error) {
    let errorData = {};
    if (error?.response) {
      const { response } = error;
      if (response.status === 401) {
        if (response.data.message === "Could not validate credentials")
          throw new APIError(401, { ...response.data, status: 401 } || {});
      }
      if (config.isLockModule) {
        errorData = response.data || {};
      } else {
        throw new APIError(response?.status, response.data?.message);
      }
    }
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(500, errorData);
  }
};

export default makeCall;
