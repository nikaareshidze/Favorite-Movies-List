import React from "react";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <div className="flex w-11/12 m-auto mt-8">
      <div className="w-2/5">
        <h1 className="mb-4">Sign Up</h1>
        <SignUpForm />
        <button className="mt-4">
          Already a mamber? <span className="underline">Sign in</span>
        </button>
      </div>
      <div className="w-3/5"></div>
    </div>
  );
}
