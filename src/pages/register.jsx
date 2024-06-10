import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters long."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  confirmPassword: z
    .string()
    .min(6, "Confirm Password must match Password.")
    .refine((data, context) => context.parent.password === data, {
      message: "Passwords don't match",
    }),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Username"
            {...register("username")}
            error={errors.username?.message}
          />
          <Input
            label="Password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <Input
            label="Confirm Password"
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
