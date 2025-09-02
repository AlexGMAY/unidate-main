import { Input } from "@nextui-org/react";
import { useFormContext, Controller } from "react-hook-form";

export default function UserDetailsForm() {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Name"
            variant="bordered"
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message as string}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Email"
            variant="bordered"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message as string}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="password"
            label="Password"
            variant="bordered"
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message as string}
          />
        )}
      />
    </div>
  );
}
