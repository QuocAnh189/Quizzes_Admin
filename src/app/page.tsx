import { Metadata } from "next";
import Link from "next/link";
import UserAuthForm from "src/components/forms/user-auth-form";
import { buttonVariants } from "src/components/ui/button";
import { cn } from "src/lib/utils";
import logo from "src/public/logoApp.png";
import background from "src/public/background.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SignIn",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 hidden top-4 md:right-8 md:top-8",
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium gap-3">
            <Image src={logo} alt="" className="w-10 h-10" />
            Logo
          </div>
          <div className="relative">
            <Image
              src={background}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Quizzes App</footer>
            </blockquote>
          </div>
        </div>
        <div className="p-4 lg:p-8 h-full flex items-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col justify-center space-y-2 text-center">
              <div className="w-full flex justify-center">
              <Image src={logo} alt="" className=" w-10 h-10" />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome to Quizzes App
              </h1>
              <p className="text-sm text-muted-foreground">
                Are you admin ? Enter your account below
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
