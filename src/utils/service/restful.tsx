import axios, { AxiosInstance, AxiosResponse } from "axios";
import qs from "querystring";
import { IPayload } from "../../@types";

const getToken = (): string | null => {
  return null;
};

/**
 * check res is success
 * @param response
 */
function isSuccessResponse(response: AxiosResponse) {
  const { status } = response;
  return status === 200 || status === 201;
}

/**
 * handle success res
 * @param response
 */
export const handleSuccessResponse = (response: AxiosResponse) => {
  const { data } = response;
  if (data?.error) return { errors: data.error };
  return { data };
};

/**
 * handle error res
 * @param response
 */
export const handleErrorResponse = (response: AxiosResponse) => {
  const { status, data } = response;
  if (status === 401 || status === 403) {
    let clearUser = false;
    /**
     * Handle Unauthorization
     */
    if (data) {
      if (
        data === "This account no longer exists" ||
        data === "Customer was disabled." ||
        data === "Customer was disabled."
      )
        clearUser = true;
    }
    return { errors: data, reset: clearUser };
  }
  if (status === 400) {
    /**
     * Handle Validation Errors
     */

    return { errors: data };
  }
  if (status === 404) {
    /**
     * Handle update failure: not found"
     */

    return { errors: data };
  }
  if (status === 500) {
    /**
     * Handle server is down or some thing is broken"
     */
    return { errors: data };
  }
  if (status === 503) {
    /**
     * Handle overloaded with requests"
     */
    return { errors: data };
  }
  return { errors: data };
};

/**
 * Handle response
 */
export const handleApiResponse = (response: AxiosResponse) => {
  if (isSuccessResponse(response)) return handleSuccessResponse(response);
  return response;
};

const service = (): AxiosInstance => {
  try {
    const instance = axios.create({
      baseURL: "",
      timeout: 3000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    instance.interceptors.request.use(async function (config) {
      const token = await getToken();
      if (token) config.headers.authorization = `Bearer ${token}`;
      return config;
    });
    instance.interceptors.response.use(
      (res) => res,
      (err) => handleErrorResponse(err)
    );
    return instance;
  } catch (error) {
    return error;
  }
};

const restful = {
  GET: async (path: string, payload?: IPayload) => {
    if (payload?.req) path += `?${qs.stringify(payload.req)}`;
    if (payload?.ID) path += `/${payload.ID}`;
    return handleApiResponse(await service().get(path));
  },
  POST: async (path: string, payload?: IPayload) => {
    return handleApiResponse(await service().post(path, payload?.req || {}));
  },
  PUT: async (path: string, payload?: IPayload) => {
    if (payload?.ID) path += `/${payload.ID}`;
    return handleApiResponse(await service().put(path, payload?.req || {}));
  },
  DELETE: async (path: string, payload?: IPayload) => {
    if (payload?.ID) path += `/${payload.ID}`;
    return handleApiResponse(await service().delete(path));
  },
};

export default restful;
