"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import AuthHeader from "@/components/scaffold/headerAuth"

import React from 'react'
import { AuthApi } from "@/app/utils"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/toast/ToastContext"

export default function page() {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const router = useRouter()
    const { showToast } = useToast();

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
  setLoading(true)
      try{
        const response = await AuthApi.login(
          email, password
        )
        showToast("Login successfull!",'success')
        router.push("/dashboard")
        console.log(response)
      }
      catch(error:any){
         showToast(error.message || "Error, try again ",'error')
      
       }
       finally{
        setLoading(false)
       }
    }

  return (
    <div className="w-full max-w-md space-y-8">
    <h2 className="text-3xl font-bold text-[#1E293B] mb-8">Log In</h2>

    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <input
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
        />
      </div>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>

      <button
      disabled={loading}
        type="submit"
        className="w-full bg-[#4ADE80] text-white py-3 rounded-lg font-medium hover:bg-[#22C55E] transition-colors"
      >
       {loading?"Loading ...":"Log in"}
      </button>

      <div className="text-center">
        <Link href="/forgot-password" className="text-[#4ADE80] hover:underline">
          Forgot your Password?
        </Link>
      </div>

      {/* <div className="text-center">
        <span className="text-gray-500">Or</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          type="button"
          className="flex items-center justify-center gap-2 bg-[#6B7FD7] text-white py-3 px-4 rounded-lg hover:bg-[#5A6DC4] transition-colors"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
          continue with facebook
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Sign in with Google
        </button>
      </div> */}

      <div className="text-center mt-6">
        <span className="text-gray-700">Not signed in before? </span>
        <Link href="/signup" className="text-[#4ADE80] hover:underline">
          Create a account
        </Link>
      </div>
    </form>
  </div>
  )
}
