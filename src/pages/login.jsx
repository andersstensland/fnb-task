import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters long."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});

export default function Login() {
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
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
          <Button type="submit" className="w-full">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}
