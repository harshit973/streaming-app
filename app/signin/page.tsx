"use client";
import React from "react";
import { signIn } from "next-auth/react";

const AuthPage = () => {
  const signin = () => {
    console.log("Signing in Google");
    signIn("google");
  };

  return (
    <div
      style={{ height: "93%" }}
      className={"flex justify-center items-center flex-col"}
    >
      <div className="m-10">
        <button
          type="submit"
          style={{ width: "100%" }}
          onClick={signin}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};
export default AuthPage;
