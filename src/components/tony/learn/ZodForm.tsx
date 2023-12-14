import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

type Props = {};

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10).max(100),
    passwordConfirmation: z.string().min(10).max(100),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
  });

type TSignUpSchema = z.infer<typeof signUpSchema>;

export default function ZodForm({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    console.log(data.email);
    setTimeout(() => {
      toast.success("Submit Success");
      reset();
    }, 2000);
  };

  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <label htmlFor="email">Email</label>
      <input
        {...register("email")}
        type="email"
        id="email"
        className="rounded border p-2 outline-none"
      />
      <label htmlFor="password">Password</label>
      <input
        {...register("password")}
        type="password"
        id="password"
        className="rounded border p-2 outline-none"
      />
      {/* errors will return when field validation fails  */}
      {errors.password && (
        <span className="text-red-500">*{errors.password.message}</span>
      )}

      <label htmlFor="confirmedPassword">Confirmed Password</label>
      <input
        {...register("passwordConfirmation")}
        type="password"
        id="confirmedPassword"
        className="rounded border p-2 outline-none"
      />

      <Button className="flex items-center gap-2">
        {isSubmitting && (
          <Loader2 className="h-4 w-4 animate-spin text-violet-500" />
        )}
        Submit
      </Button>
      <Toaster />
    </form>
  );
}
