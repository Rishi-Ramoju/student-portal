import Lottie from "lottie-react";
import React from "react";
import { Outlet, useLocation } from "react-router";
import auth from "../assets/lottie/auth.json";

function AuthLayout() {
  const location = useLocation();
  return (
    <div className="flex w-full h-screen items-center justify-start bg-[#9C6FE4]">
      <Outlet />
      {location.pathname == "/login" && (
        <Lottie
          animationData={auth}
          loop={true}
          className="w-[45%] p-4 mx-auto"
        />
      )}
    </div>
  );
}

export default AuthLayout;
