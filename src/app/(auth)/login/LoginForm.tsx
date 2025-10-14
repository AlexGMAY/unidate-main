"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
} from "@nextui-org/react";
import React, { useState } from "react";
import { GiPadlock } from "react-icons/gi";
import { useForm } from "react-hook-form";
import {
  loginSchema,
  LoginSchema,
} from "@/lib/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInUser } from "@/app/actions/authActions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (data: LoginSchema) => {
    const result = await signInUser(data);
    if (result.status === "success") {
      toast.success("Login successful! Redirecting...");
      router.push("/members");
      router.refresh();
    } else {
      toast.error(result.error as string);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-8xl mt-10 mx-auto backdrop-blur-md bg-white/80 border border-white/20 shadow-xl rounded-2xl overflow-hidden">
        <div className="flex flex-row">
          {/* Left side - Form content */}
          <div className="flex-1 p-8">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg mb-4">
                <GiPadlock size={28} />
              </div>
              
              <div className="space-y-2 mb-6">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-700 bg-clip-text text-transparent">
                  Welcome Back
                </h1>
                <p className="text-neutral-600 text-sm">
                  Sign in to continue your journey
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                defaultValue=""
                label="Email"
                variant="bordered"
                size="lg"
                classNames={{
                  inputWrapper: "border-1 border-neutral-200 bg-white/50 backdrop-blur-sm h-14",
                  label: "text-neutral-700 font-medium"
                }}
                {...register("email")}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message as string}
                placeholder="Enter your email"
              />
              
              <Input
                defaultValue=""
                label="Password"
                variant="bordered"
                size="lg"
                classNames={{
                  inputWrapper: "border-1 border-neutral-200 bg-white/50 backdrop-blur-sm h-14",
                  label: "text-neutral-700 font-medium"
                }}
                {...register("password")}
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message as string}
                placeholder="Enter your password"
                type={isVisible ? "text" : "password"}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
              />
              
              <div className="flex justify-end">
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-pink-600 hover:text-rose-700 transition-colors hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              
              <Button
                fullWidth
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium text-md py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                type="submit"
                isDisabled={!isValid || isSubmitting}
                isLoading={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
              
              <div className="relative flex items-center justify-center my-6">
                <div className="flex-1 border-t border-neutral-200"></div>
                <span className="px-3 text-sm text-neutral-500">or continue with</span>
                <div className="flex-1 border-t border-neutral-200"></div>
              </div>
              
              <SocialLogin />
              
              <div className="text-center text-sm text-neutral-600 mt-4 pt-4 border-t border-neutral-100">
                Don't have an account?{" "}
                <Link 
                  href="/register" 
                  className="text-pink-600 hover:text-rose-700 font-medium transition-colors hover:underline"
                >
                  Sign up
                </Link>
              </div>
            </form>
          </div>

          {/* Right side - Decorative panel */}
          <div className="w-1/3 bg-gradient-to-br from-pink-500/10 to-rose-600/10 flex items-center justify-center p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/30 to-transparent"></div>
            
            <div className="text-center space-y-4 z-10">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-400/20 to-rose-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <GiPadlock size={40} className="text-pink-600/70" />
              </div>
              <h3 className="text-xl font-semibold text-pink-800/80">Welcome Back!</h3>
              <p className="text-sm text-pink-700/70 max-w-xs">
                We're excited to see you again. Continue your journey with us.
              </p>
              
              {/* Feature highlights */}
              <div className="space-y-2 mt-6 text-left">
                <div className="flex items-center text-sm text-pink-700/70">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  <span>Access your matches</span>
                </div>
                <div className="flex items-center text-sm text-pink-700/70">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  <span>Continue conversations</span>
                </div>
                <div className="flex items-center text-sm text-pink-700/70">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  <span>Discover new connections</span>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-pink-300/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-rose-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Eye icon components
const EyeSlashFilledIcon = (props: any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
      fill="currentColor"
    />
    <path
      d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
      fill="currentColor"
    />
    <path
      d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
      fill="currentColor"
    />
    <path
      d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
      fill="currentColor"
    />
    <path
      d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
      fill="currentColor"
    />
  </svg>
);

const EyeFilledIcon = (props: any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
      fill="currentColor"
    />
    <path
      d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
      fill="currentColor"
    />
  </svg>
);