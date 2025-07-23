"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { AuthApi } from "@/app/utils";
import { useRouter } from "next/navigation";
import Otp from "@/components/views/Otp";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [OtpScreen,setOtpScreen] = useState(false);
  const router = useRouter()
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
 try{
  const response =await AuthApi.register(
    {  email, password,firstName,lastName, role, }
  )
 // router.push("/dashboard")
 setOtpScreen(true)
 setAcceptTerms(true)
  console.log(response)
 }
 catch(error){
  console.error(error)
 }
    
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <h2 className="text-3xl font-bold text-[#1E293B] mb-8">Create account</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
            />
          </div>
          <div>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Surname"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
            />
          </div>
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
          />
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        <div>
          <select
            name="option"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
          >
            <option value="" disabled>
              Select an Option
            </option>
            <option value="farmer">Farmer</option>
            <option value="customer">Customer</option>
          </select>
        </div>

        <div className="flex items-start">
           <input
            type="checkbox"
            id="terms"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#4ADE80] focus:ring-[#4ADE80]"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I have read and accept{" "}
            <Link href="#" className="text-[#4ADE80] hover:underline">
              the conditions
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#4ADE80] hover:underline">
              the privacy policy
            </Link>
          </label>
        </div>

        <button disabled = {!acceptTerms}
          type="submit"
          className="w-full bg-[#4ADE80] disabled:opacity-45 cursor-pointer disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium hover:bg-[#22C55E] transition-colors"
        >
          Sign Up
        </button>

        <div className="text-center mt-6">
          <span className="text-gray-700">Already have an account? </span>
          <Link href="/login" className="text-[#4ADE80] hover:underline">
            Login
          </Link>
        </div>
      </form>
      {OtpScreen && <Otp email={email} />}
    </div>
  );
}
