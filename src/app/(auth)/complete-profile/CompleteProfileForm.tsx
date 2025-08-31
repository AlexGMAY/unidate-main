// "use client";

// import CardWrapper from "@/components/CardWrapper";
// import {
//   ProfileSchema,
//   profileSchema,
// } from "@/lib/schemas/RegisterSchema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   FormProvider,
//   useForm,
// } from "react-hook-form";
// import { RiProfileLine } from "react-icons/ri";
// import ProfileForm from "../register/ProfileDetailsForm";
// import { Button } from "@nextui-org/react";
// import { completeSocialLoginProfile } from "@/app/actions/authActions";
// import { signIn } from "next-auth/react";

// export default function CompleteProfileForm() {
//   const methods = useForm<ProfileSchema>({
//     resolver: zodResolver(profileSchema),
//     mode: "onTouched",
//   });

//   const {
//     handleSubmit,
//     formState: { errors, isSubmitting, isValid },
//   } = methods;

//   const onSubmit = async (
//     data: ProfileSchema
//   ) => {
//     const result =
//       await completeSocialLoginProfile(data);

//     if (result.status === "success") {
//       signIn(result.data, {
//         callbackUrl: "/members",
//       });
//     }
//   };

//   return (
//     <CardWrapper
//       headerText="About you"
//       subHeaderText="Please complete your profile to continue to the app"
//       headerIcon={RiProfileLine}
//       body={
//         <FormProvider {...methods}>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="space-y-4">
//               <ProfileForm />
//               {errors.root?.serverError && (
//                 <p className="text-danger text-sm">
//                   {
//                     errors.root.serverError
//                       .message
//                   }
//                 </p>
//               )}
//               <div className="flex flex-row items-center gap-6">
//                 <Button
//                   isLoading={isSubmitting}
//                   isDisabled={!isValid}
//                   fullWidth
//                   color="default"
//                   type="submit"
//                 >
//                   Submit
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </FormProvider>
//       }
//     />
//   );
// }


"use client";

import CardWrapper from "@/components/CardWrapper";
import {
  ProfileSchema,
  profileSchema,
} from "@/lib/schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormProvider,
  useForm,
} from "react-hook-form";
import { RiProfileLine } from "react-icons/ri";
import ProfileForm from "../register/ProfileDetailsForm";
import { Button } from "@nextui-org/react";
import { completeSocialLoginProfile } from "@/app/actions/authActions";
import { signIn } from "next-auth/react";

export default function CompleteProfileForm() {
  const methods = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    mode: "onTouched",
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = methods;

  const onSubmit = async (data: ProfileSchema) => {
    const result = await completeSocialLoginProfile(data);

    if (result.status === "success") {
      signIn(result.data, {
        callbackUrl: "/members",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      <div className="w-full max-w-md">
        <CardWrapper
          headerText="Complete Your Profile"
          subHeaderText="Just a few more details to personalize your experience"
          headerIcon={RiProfileLine}
          body={
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-6">
                  <ProfileForm />
                  
                  {errors.root?.serverError && (
                    <div className="p-4 rounded-xl bg-danger-50 border border-danger-200">
                      <p className="text-danger text-sm text-center">
                        {errors.root.serverError.message}
                      </p>
                    </div>
                  )}
                  
                  <Button
                    isLoading={isSubmitting}
                    isDisabled={!isValid}
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium text-md py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                    type="submit"
                  >
                    {isSubmitting ? "Completing Profile..." : "Complete Profile & Continue"}
                  </Button>
                </div>
              </form>
            </FormProvider>
          }
          cardProps={{
            className: "backdrop-blur-md bg-white/80 border border-white/20 shadow-xl rounded-2xl overflow-hidden p-8"
          }}
          headerIconProps={{
            className: "flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg mb-4"
          }}
          headerTextProps={{
            className: "text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-700 bg-clip-text text-transparent mb-2"
          }}
          subHeaderProps={{
            className: "text-neutral-600 text-sm mb-8"
          }}
        />
      </div>
    </div>
  );
}