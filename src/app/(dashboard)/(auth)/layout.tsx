import React, { PropsWithChildren } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import Logo from "@/components/scaffold/logo";
import farmer from "../../../../public/assets/farmer.svg";
function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full">
      {/* Green side - hidden on mobile and tablet */}

      <div className="hidden lg:flex lg:w-1/2 bg-[#C8EAD1] flex-col justify-center relative ">
        <div className="max-w-md mx-auto">
          <div className=" mb-8">
            <Image
              src={farmer.src}
              alt="Farmer illustration"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-3xl font-bold mb-8 text-[#1E293B]">
            Hey there! Ready to connect with fresh produce?
          </h1>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4ADE80] flex items-center justify-center mt-0.5">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-[#1E293B] text-lg">
                Certified organic farmers
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4ADE80] flex items-center justify-center mt-0.5">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-[#1E293B] text-lg">
                Refund or replacement for defects
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4ADE80] flex items-center justify-center mt-0.5">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-[#1E293B] text-lg">
                99.8% issue-free delivery
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Form side */}
      <div className="w-full lg:w-1/2 p-6 md:p-12 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default Layout;
