"use client";
import React, { useState } from "react";

import { Button } from "src/components/ui/button";
import { useRouter } from "next/navigation";
import GoogleSignInButton from "../github-auth-button";

//icons
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

//redux
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { useAppDispatch } from "src/redux/hooks";
import { logIn } from "src/redux/slices/authSlice";

const errorInit = {
  checkAdmin: true,
  formatEmail: true,
  existsEmail: true,
  password: true,
};

import { useLoginUserMutation } from "src/redux/services/authApi";

export default function UserAuthForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [Login] = useLoginUserMutation();

  const [formLogin, setFormLogin] = useState({
    mail: "",
    password: "",
  });

  const [showPassWord, setShowPassWord] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState(errorInit);

  const handleLogin = async () => {
    await Login(formLogin)
      .unwrap()
      .then((result) => {
        if (result.user.userType === "Admin") {
          dispatch(logIn(result));
          router.push("/dashboard");
        } else {
          setErrorLogin({ ...errorInit, checkAdmin: false });
        }
      })
      .catch((error: FetchBaseQueryError) => {
        const { message }: any = error?.data;
        switch (message) {
          case "Email does not format":
            setErrorLogin({ ...errorInit, formatEmail: false });
            break;
          case "Account not exist":
            setErrorLogin({ ...errorInit, existsEmail: false });
            break;
          case "Wrong password":
            setErrorLogin({ ...errorInit, password: false });
            break;
          case "Email is auth account":
            setErrorLogin({ ...errorInit, existsEmail: false });
            break;
          default:
            break;
        }
      });
  };

  return (
    <>
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            onChange={(e) =>
              setFormLogin({ ...formLogin, mail: e.target.value })
            }
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your email"
          />
          {!errorLogin.checkAdmin && (
            <p className="text-red-400">Account does not Admin Role</p>
          )}
          {!errorLogin.formatEmail && (
            <p className="text-red-400">Email does not format</p>
          )}
          {!errorLogin.existsEmail && (
            <p className="text-red-400">Account does not exist</p>
          )}
        </div>
        <div className="relative">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <div>
            <input
              onChange={(e) =>
                setFormLogin({ ...formLogin, password: e.target.value })
              }
              type={showPassWord ? "text" : "password"}
              name="password"
              id="password"
              placeholder="••••••••"
              className="relative bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />    
            <div
              className="hover:cursor-pointer absolute h-[20px] w-[20px] top-[60%] right-4"
              onClick={() => setShowPassWord(!showPassWord)}
            >
              {showPassWord ? <AiFillEye /> : <AiFillEyeInvisible />}
            </div>
            {!errorLogin.password && (
              <p className="text-red-400">Password is wrong</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="text-gray-500 dark:text-gray-300">
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </a>
        </div>
      </form>

      <Button className="ml-auto w-full" onClick={handleLogin}>
        SignIn
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <GoogleSignInButton />
    </>
  );
}
