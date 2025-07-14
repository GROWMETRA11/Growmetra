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
 