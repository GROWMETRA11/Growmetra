import axios from "axios";
import nookies from "nookies";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials:true
});

axiosInstance.interceptors.request.use(
  async(config) => {
    const accessToken = nookies.get(null)['token'];
    const refreshToken = nookies.get(null)['refreshToken'];

    
       // Add access token to Authorization header if it exists
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    // Add refresh token to custom header (or wherever appropriate)
    // if (refreshToken) {
    //   config.headers["refresh-token"] = refreshToken;
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    
    return response.data;
  },
  (error) => {
    if (!error.response) {
      // Network error (no response)
      if (error.code === 'ECONNABORTED') {
        throw new Error("Network timeout. Please check your internet connection.");
      }
      else if (error.code === "ERR_NETWORK") {
        throw new Error(
          "No Internet connection,Please check your internet connection."
        );
      } else {
        throw new Error(error.code);
      }
    }

     // Check for 401 Unauthorized
    if (error.response.status === 401) {
      //  const loginPageUrl = "/en/login"; 
      // if (typeof window !== "undefined") {
      //   window.location.href = loginPageUrl; 
      // }
      throw new Error(
        error.response.data.message ||
          "Unauthorized access. Please log in again."
      );
    }

       if (error.response.status === 413) {
         throw new Error(
           "Payload too large. Please reduce the size of your request."
         );
       }

    // Server down or 5xx errors
    if (error.response.status >= 500) {
      throw new Error("Server is currently down. Please try again later.");
    }

    // Other error cases (e.g., 4xx errors)
    throw new Error(error.response.data.message || "An error occurred.");
  }


  // (error) => {
  //   // Handle network errors
  //   if (error.code === "ECONNABORTED") {
  //     throw new Error(
  //       "Network timeout. Please check your internet connection."
  //     );
  //   }

  //   if (!error.response) {
  //     // Network error with no response
  //     throw new Error(error);
  //   }

  //   // Extract response errors
  //   const { response } = error;

  //   // Handle Unauthorized (401)
  //   if (response.status === 401) {
  //     throw new Error("Unauthorized access. Please log in again.");
  //   }
  //   // Handle specific status codes
  //   if (response.status === 413) {
  //     throw new Error(
  //       "Payload too large. Please reduce the size of your request."
  //     );
  //   }

  //   // Handle Server Errors (5xx)
  //   if (response.status >= 500) {
  //     throw new Error("Server is currently down. Please try again later.");
  //   }

  //   // Default to the actual error message from the response
  //   const errorMessage =
  //     response.data?.message || response.statusText || "An error occurred.";
  //   throw new Error(errorMessage);
  // }
);

export default axiosInstance;
