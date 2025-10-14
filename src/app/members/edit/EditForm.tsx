"use client";

import {
  memberEditSchema,
  MemberEditSchema,
} from "@/lib/schemas/MemberEditSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Member } from "@prisma/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  Textarea,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { updateMemberProfile } from "@/app/actions/userActions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { handleFormServerErrors } from "@/lib/util";

type Props = {
  member: Member;
};

export default function EditForm({ member }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: {
      isValid,
      isDirty,
      isSubmitting,
      errors,
    },
  } = useForm<MemberEditSchema>({
    resolver: zodResolver(memberEditSchema),
    mode: "onTouched",
  });

  useEffect(() => {
    if (member) {
      reset({
        name: member.name,
        description: member.description,
        city: member.city,
        country: member.country,
      });
    }
  }, [member, reset]);

  const onSubmit = async (data: MemberEditSchema) => {
    const nameUpdated = data.name !== member.name;
    const result = await updateMemberProfile(data, nameUpdated);

    if (result.status === "success") {
      toast.success("Profile updated successfully!");
      router.refresh();
      reset({ ...data });
    } else {
      handleFormServerErrors(result, setError);
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl">
      <CardHeader className="p-6 pb-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-700 bg-clip-text text-transparent">
          Edit Profile
          <br />
          <p className="text-gray-600 text-sm">Update your profile information</p>
        </h2>
        
      </CardHeader>
      
      <Divider className="bg-gray-200" />
      
      <CardBody className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <Input
            label="Name"
            variant="bordered"
            size="lg"
            classNames={{
              inputWrapper: "border-1 border-gray-200 bg-white/50 backdrop-blur-sm h-14",
              label: "text-gray-700 font-medium",
              input: "text-gray-900 placeholder:text-gray-500"
            }}
            {...register("name")}
            defaultValue={member.name}
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message}
            placeholder="Enter your full name"
          />

          {/* Description Field */}
          <Textarea
            label="About Me"
            variant="bordered"
            size="lg"
            classNames={{
              inputWrapper: "border-1 border-gray-200 bg-white/50 backdrop-blur-sm",
              label: "text-gray-700 font-medium",
              input: "text-gray-900 placeholder:text-gray-500"
            }}
            {...register("description")}
            defaultValue={member.description}
            isInvalid={!!errors.description}
            errorMessage={errors.description?.message}
            placeholder="Tell others about yourself, your interests, and what you're looking for"
            minRows={6}
          />

          {/* Location Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="City"
              variant="bordered"
              size="lg"
              classNames={{
                inputWrapper: "border-1 border-gray-200 bg-white/50 backdrop-blur-sm h-14",
                label: "text-gray-700 font-medium",
                input: "text-gray-900 placeholder:text-gray-500"
              }}
              {...register("city")}
              defaultValue={member.city}
              isInvalid={!!errors.city}
              errorMessage={errors.city?.message}
              placeholder="Enter your city"
            />
            
            <Input
              label="Country"
              variant="bordered"
              size="lg"
              classNames={{
                inputWrapper: "border-1 border-gray-200 bg-white/50 backdrop-blur-sm h-14",
                label: "text-gray-700 font-medium",
                input: "text-gray-900 placeholder:text-gray-500"
              }}
              {...register("country")}
              defaultValue={member.country}
              isInvalid={!!errors.country}
              errorMessage={errors.country?.message}
              placeholder="Enter your country"
            />
          </div>

          {/* Server Error Message */}
          {errors.root?.serverError && (
            <div className="p-4 rounded-xl bg-danger-50 border border-danger-200">
              <p className="text-danger text-sm text-center">
                {errors.root.serverError.message}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
              isDisabled={!isValid || !isDirty}
              isLoading={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Profile"}
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}