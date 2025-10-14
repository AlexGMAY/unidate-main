"use client";

import { registerUser } from "@/app/actions/authActions";
import {
  profileSchema,
  registerSchema,
  RegisterSchema,
} from "@/lib/schemas/RegisterSchema";
import { handleFormServerErrors } from "@/lib/util";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Progress,
} from "@nextui-org/react";
import React, { useState } from "react";
import {
  FormProvider,
  useForm,
} from "react-hook-form";
import { GiPadlock } from "react-icons/gi";
import UserDetailsForm from "./UserDetailsForm";
import ProfileDetailsForm from "./ProfileDetailsForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const stepSchemas = [
  registerSchema,
  profileSchema,
];

export default function RegisterForm() {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = stepSchemas[activeStep];

  const registerFormMethods = useForm<RegisterSchema>({
    resolver: zodResolver(currentValidationSchema),
    mode: "onTouched",
  });

  const {
    handleSubmit,
    getValues,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = registerFormMethods;

  const router = useRouter();

  const onSubmit = async () => {
    const result = await registerUser(getValues());
    if (result.status === "success") {
      router.push("/register/success");
    } else {
      handleFormServerErrors(result, setError);
    }
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <UserDetailsForm />;
      case 1:
        return <ProfileDetailsForm />;
      default:
        return "Unknown step";
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 0:
        return "Account Details";
      case 1:
        return "Profile Information";
      default:
        return "Registration";
    }
  };

  const onBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const onNext = async () => {
    if (activeStep === stepSchemas.length - 1) {
      await onSubmit();
    } else {
      setActiveStep((prev) => prev + 1);
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
              
              <div className="space-y-2 mb-4">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-700 bg-clip-text text-transparent">
                  {getStepTitle(activeStep)}
                </h1>
                <p className="text-neutral-600 text-sm">
                  Step {activeStep + 1} of {stepSchemas.length}
                </p>
              </div>
              
              {/* Progress Bar */}
              <Progress 
                value={(activeStep + 1) * 50} 
                className="w-full max-w-xs"
                classNames={{
                  track: "bg-pink-100",
                  indicator: "bg-gradient-to-r from-pink-500 to-rose-600"
                }}
                size="sm"
              />
            </div>
            
            <FormProvider {...registerFormMethods}>
              <form onSubmit={handleSubmit(onNext)}>
                <div className="space-y-6">
                  {getStepContent(activeStep)}
                  
                  {errors.root?.serverError && (
                    <div className="p-4 rounded-xl bg-danger-50 border border-danger-200">
                      <p className="text-danger text-sm text-center">
                        {errors.root.serverError.message}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-row gap-4">
                    {activeStep !== 0 && (
                      <Button
                        onClick={onBack}
                        className="flex-1 py-6 rounded-xl border border-neutral-200 bg-white/50 backdrop-blur-sm text-neutral-700 font-medium hover:bg-white transition-all"
                        size="lg"
                      >
                        Back
                      </Button>
                    )}
                    
                    <Button
                      isLoading={isSubmitting}
                      isDisabled={!isValid}
                      className={`flex-1 py-6 rounded-xl font-medium text-white text-md shadow-lg hover:shadow-xl transition-all ${
                        activeStep === stepSchemas.length - 1 
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700" 
                          : "bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
                      }`}
                      type="submit"
                      size="lg"
                    >
                      {isSubmitting ? (
                        "Processing..."
                      ) : activeStep === stepSchemas.length - 1 ? (
                        "Create Account"
                      ) : (
                        "Continue"
                      )}
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-neutral-600 pt-4 border-t border-neutral-100">
                    Already have an account?{" "}
                    <a 
                      href="/login" 
                      className="text-pink-600 hover:text-rose-700 font-medium transition-colors hover:underline"
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </form>
            </FormProvider>
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
              <h3 className="text-xl font-semibold text-pink-800/80">Join Our Community</h3>
              <p className="text-sm text-pink-700/70 max-w-xs">
                Create your account and start connecting with amazing people today.
              </p>
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