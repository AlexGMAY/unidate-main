// "use client";

// import {
//   Input,
//   Select,
//   SelectItem,
//   Textarea,
// } from "@nextui-org/react";
// import { format, subYears } from "date-fns";
// import { useFormContext } from "react-hook-form";

// export default function ProfileDetailsForm() {
//   const {
//     register,
//     getValues,
//     setValue,
//     formState: { errors },
//   } = useFormContext();

//   const genderList = [
//     { label: "Male", value: "male" },
//     { label: "Female", value: "female" },
//   ];

//   return (
//     <div className="space-y-4">
//       <Select
//         defaultSelectedKeys={getValues("gender")}
//         label="Gender"
//         aria-label="Select gender"
//         variant="bordered"
//         {...register("gender")}
//         isInvalid={!!errors.gender}
//         errorMessage={
//           errors.gender?.message as string
//         }
//         onChange={(e) =>
//           setValue("gender", e.target.value)
//         }
//       >
//         {genderList.map((item) => (
//           <SelectItem
//             key={item.value}
//             value={item.value}
//           >
//             {item.label}
//           </SelectItem>
//         ))}
//       </Select>
//       <Input
//         defaultValue={getValues("dateOfBirth")}
//         label="Date of birth"
//         max={format(
//           subYears(new Date(), 18),
//           "yyyy-MM-dd"
//         )}
//         type="date"
//         variant="bordered"
//         {...register("dateOfBirth")}
//         isInvalid={!!errors.dateOfBirth}
//         errorMessage={
//           errors.dateOfBirth?.message as string
//         }
//       />
//       <Textarea
//         defaultValue={getValues("description")}
//         label="Description"
//         variant="bordered"
//         {...register("description")}
//         isInvalid={!!errors.description}
//         errorMessage={
//           errors.description?.message as string
//         }
//       />
//       <Input
//         defaultValue={getValues("city")}
//         label="City"
//         variant="bordered"
//         {...register("city")}
//         isInvalid={!!errors.city}
//         errorMessage={
//           errors.city?.message as string
//         }
//       />
//       <Input
//         defaultValue={getValues("country")}
//         label="Country"
//         variant="bordered"
//         {...register("country")}
//         isInvalid={!!errors.country}
//         errorMessage={
//           errors.country?.message as string
//         }
//       />
//     </div>
//   );
// }


"use client";

import {
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { format, subYears } from "date-fns";
import { useFormContext } from "react-hook-form";

export default function ProfileDetailsForm() {
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  const genderList = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          defaultSelectedKeys={getValues("gender")}
          label="Gender"
          aria-label="Select gender"
          variant="bordered"
          size="lg"
          classNames={{
            trigger: "border-1 border-neutral-200 bg-white/50 backdrop-blur-sm h-14",
            label: "text-neutral-700 font-medium",
            value: "text-neutral-800"
          }}
          {...register("gender")}
          isInvalid={!!errors.gender}
          errorMessage={errors.gender?.message as string}
          onChange={(e) => setValue("gender", e.target.value)}
          placeholder="Select your gender"
        >
          {genderList.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="text-neutral-800"
            >
              {item.label}
            </SelectItem>
          ))}
        </Select>

        <Input
          defaultValue={getValues("dateOfBirth")}
          label="Date of Birth"
          max={format(subYears(new Date(), 18), "yyyy-MM-dd")}
          type="date"
          variant="bordered"
          size="lg"
          classNames={{
            inputWrapper: "border-1 border-neutral-200 bg-white/50 backdrop-blur-sm h-14",
            label: "text-neutral-700 font-medium",
            input: "text-neutral-800"
          }}
          {...register("dateOfBirth")}
          isInvalid={!!errors.dateOfBirth}
          errorMessage={errors.dateOfBirth?.message as string}
          placeholder="Select your date of birth"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          defaultValue={getValues("city")}
          label="City"
          variant="bordered"
          size="lg"
          classNames={{
            inputWrapper: "border-1 border-neutral-200 bg-white/50 backdrop-blur-sm h-14",
            label: "text-neutral-700 font-medium",
            input: "text-neutral-800 placeholder:text-neutral-500"
          }}
          {...register("city")}
          isInvalid={!!errors.city}
          errorMessage={errors.city?.message as string}
          placeholder="Enter your city"
        />

        <Input
          defaultValue={getValues("country")}
          label="Country"
          variant="bordered"
          size="lg"
          classNames={{
            inputWrapper: "border-1 border-neutral-200 bg-white/50 backdrop-blur-sm h-14",
            label: "text-neutral-700 font-medium",
            input: "text-neutral-800 placeholder:text-neutral-500"
          }}
          {...register("country")}
          isInvalid={!!errors.country}
          errorMessage={errors.country?.message as string}
          placeholder="Enter your country"
        />
      </div>

      <Textarea
        defaultValue={getValues("description")}
        label="About Me"
        variant="bordered"
        size="lg"
        classNames={{
          inputWrapper: "border-1 border-neutral-200 bg-white/50 backdrop-blur-sm",
          label: "text-neutral-700 font-medium",
          input: "text-neutral-800 placeholder:text-neutral-500"
        }}
        {...register("description")}
        isInvalid={!!errors.description}
        errorMessage={errors.description?.message as string}
        placeholder="Tell us about yourself, your interests, and what makes you unique"
        minRows={4}
      />
    </div>
  );
}
