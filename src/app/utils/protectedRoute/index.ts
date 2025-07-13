import { AxiosResponse } from "axios";
import { AuthApi, } from "../api";
import nookies from "nookies";

interface User {
    picture: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    userStatus: string;
    referralCode: string;
    phoneNumber: string;
    dob: string;
    homeCountry: string;
    residentAddress: string;
    username: string;
    verified: string;
    isGoogleUser: boolean;
    createdAt: string;
    updatedAt: string;
    id: string;
    [key: string]: any; //create room for new fields in the storage
}


export function saveUserData(updatedUser: Partial<User>): void {
  if (typeof window !== 'undefined') { 
      const existingUserData: User | null = JSON.parse(localStorage.getItem('userInfo') || 'null');

      // Define the fields to exclude
      const excludedFields = ['role', 'id', 'bitpowerSubAccountId','kyc','refreshToken','cardholder_id','beneficiaries']; 

      // Create the new user data while excluding certain fields
      const newUserData: User = { 
          ...existingUserData, 
          ...Object.fromEntries(
              Object.entries(updatedUser).filter(([key]) => !excludedFields.includes(key))
          )
      } as User;

      localStorage.setItem('userInfo', JSON.stringify(newUserData));
  }
}


interface User {
    picture: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    userStatus: string;
    referralCode: string;
    phoneNumber: string;
    dob: string;
    homeCountry: string;
    residentAddress: string;
    username: string;
    verified: string;
    isGoogleUser: boolean;
    createdAt: string;
    updatedAt: string;
    id: string;

  }
  
  export const currentUser = (): User | null => {
    if (typeof window !== 'undefined') { 
      const user = localStorage.getItem('userInfo');
      return user ? JSON.parse(user) : null;
    }
    return null; // Return null if not in the browser
  };
  

// export const refreshUser = async () => {
//   if (typeof window !== 'undefined') {
//     try {
//       const response: AxiosResponse<User> =
//         await AuthApi.userDetails();
//       const userDetails = response as unknown as User;
//       saveUserData(userDetails)
//       // console.log(userDetails)
//     } catch (error) {
      
//     }
//   }
// }


export  const signOut = () => {
    if (window !== undefined) {
      nookies.destroy(null, "token", { path: "/" });
      nookies.destroy(null, "refreshToken", { path: "/" });
      localStorage.clear()
      sessionStorage.clear()
    }
};
  
export function formatAmount(amount: number | string | undefined): string {
  if (amount === undefined || amount === null || isNaN(Number(amount))) {
    return "0.00";
  }

  const original = amount.toString().trim();
  const num = Number(original);

  if (!original.includes(".")) {
    return num
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const truncated = Math.trunc(num * 100) / 100;
  const parts = truncated.toString().split(".");
  parts[1] = (parts[1] || "").padEnd(2, "0"); 
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
}

export const toFixed = (value: string | number): number => {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return NaN;
  return Math.trunc(num * 100) / 100;
};


  
// an export function to  open up whatsap https://wa.me/905338563416
export function openWhatsAppWithMessage(message: string, phoneNumber: string = '905338563416') {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
