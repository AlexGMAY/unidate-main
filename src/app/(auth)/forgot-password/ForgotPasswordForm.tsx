// "use client";

// import { generateResetPasswordEmail } from "@/app/actions/authActions";
// import CardWrapper from "@/components/CardWrapper";
// import ResultMessage from "@/components/ResultMessage";
// import { ActionResult } from "@/types";
// import { Button, Input } from "@nextui-org/react";
// import { useState } from "react";
// import {
//   FieldValues,
//   useForm,
// } from "react-hook-form";
// import { GiPadlock } from "react-icons/gi";

// export default function ForgotPasswordForm() {
//   const [result, setResult] =
//     useState<ActionResult<string> | null>(null);
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { isSubmitting, isValid },
//   } = useForm();

//   const onSubmit = async (data: FieldValues) => {
//     setResult(
//       await generateResetPasswordEmail(data.email)
//     );
//     reset();
//   };

//   return (
//     <CardWrapper
//       headerIcon={GiPadlock}
//       headerText="Forgot password"
//       subHeaderText="Enter account email to reset your password"
//       body={
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="flex flex-col space-y-4"
//         >
//           <Input
//             type="email"
//             placeholder="Email address"
//             variant="bordered"
//             defaultValue=""
//             {...register("email", {
//               required: true,
//             })}
//           />
//           <Button
//             type="submit"
//             color="default"
//             isLoading={isSubmitting}
//             isDisabled={!isValid}
//           >
//             Send reset email
//           </Button>
//         </form>
//       }
//       footer={<ResultMessage result={result} />}
//     />
//   );
// }


"use client";

import { generateResetPasswordEmail } from "@/app/actions/authActions";
import CardWrapper from "@/components/CardWrapper";
import ResultMessage from "@/components/ResultMessage";
import { ActionResult } from "@/types";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import {
  FieldValues,
  useForm,
} from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

export default function ForgotPasswordForm() {
  const [result, setResult] = useState<ActionResult<string> | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    setResult(await generateResetPasswordEmail(data.email));
    reset();
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <CardWrapper
          headerIcon={GiPadlock}
          headerText="Reset Your Password"
          subHeaderText="Enter your email address and we'll send you instructions to reset your password"
          body={
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  variant="bordered"
                  size="lg"
                  classNames={{
                    inputWrapper: "border-1 border-neutral-200 bg-white/50 backdrop-blur-sm h-14",
                    input: "placeholder:text-neutral-500",
                    label: "text-neutral-700 font-medium"
                  }}
                  defaultValue=""
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message as string}
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium text-md py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                isLoading={isSubmitting}
                isDisabled={!isValid}
              >
                {isSubmitting ? "Sending..." : "Send Reset Instructions"}
              </Button>
              
              <div className="text-center pt-4">
                <a 
                  href="/login" 
                  className="text-pink-600 hover:text-rose-700 text-sm font-medium transition-colors hover:underline"
                >
                  Back to Login
                </a>
              </div>
            </form>
          }
          footer={<ResultMessage result={result} />}
          cardProps={{
            className: "backdrop-blur-md bg-white/80 border border-white/20 shadow-xl rounded-2xl overflow-hidden"
          }}
          headerIconProps={{
            className: "flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg"
          }}
          headerTextProps={{
            className: "text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-700 bg-clip-text text-transparent"
          }}
          subHeaderProps={{
            className: "text-neutral-600 text-sm"
          }}
        />
      </div>
    </div>
  );
}