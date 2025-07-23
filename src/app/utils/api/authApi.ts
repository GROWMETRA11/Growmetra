import { axios$ } from "..";

interface UserRegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?:string;
 
}

  
  export const register = async (data:UserRegistrationData) => {
    try {
      const response = await axios$.post("/auth/register/",  data );
      return response;
    } catch (error) {
      throw error;
    }
  };
 
  
  export const login = async (email:string, password:string) => {
    try {
      const response = await axios$.post("/auth/login/",  {
        email,password
      } );
      return response;
    } catch (error) {
      throw error;
    }
  };
  
  export const verifyOTP = async (email:string, otp:string) => {
    try {
      const response = await axios$.post("/auth/verify-email/",  {
        email,otp
      } );
      return response;
    } catch (error) {
      throw error;
    }
  };
 