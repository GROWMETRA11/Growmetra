'use client'
import { useEffect, useState } from "react";
import nookies from "nookies";
import { useRouter } from "next/navigation";
import React from "react";
// import { refreshUser } from "../helperFunctions";

const withAuth = (WrappedComponent: any) => {
  const AuthComponent = (props: any) => {
    const router = useRouter();
    const { lng = "en" } = props; 

    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const cookies = nookies.get(null);
      const token = cookies?.token;

      if (!token) {
        router.replace(`/${lng}/login`);
      } else {
        setLoading(false); 
      }
    }, [lng]);

    if (loading) {
      return (
        <div className="h-screen flex justify-center items-center">
          <div className="loader2"></div>
        </div>
      ); 
    }

    return <WrappedComponent {...props} />;
  };

  // Assign display name for better debugging
  AuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return AuthComponent;
};

export default withAuth;
