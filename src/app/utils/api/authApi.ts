import { axios$ } from "..";

interface UserRegistrationData {
  email: string;
  password: string;
  confirmPassword: string;
  referralCode?: string;
  firstName: string;
  lastName: string;
 
}

  
  export const register = async (data:UserRegistrationData) => {
    try {
      const response = await axios$.post("/user/create-user",  data );
      return response;
    } catch (error) {
      throw error;
    }
  };
 