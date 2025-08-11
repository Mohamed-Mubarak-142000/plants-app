"use client";

import React from "react";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../_components/forms/form-input";
import { Button } from "@/components/ui/button";
import { register as registerAction } from "@/server/_actions/register";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import Link from "next/link";
import { ROUTES, ROUTES_AUTH } from "@/lib/types";
import { useRouter } from "next/navigation";

const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    nameAr: z.string().min(1, "الاسم بالعربي مطلوب"),
    nameEn: z.string().min(1, "الاسم بالإنجليزي مطلوب"),
    phone: z.string().min(1, "رقم الجوال مطلوب"),
    isAdmin: z.boolean(),
    confirmPassword: z.string().min(1, "تاكيد كلمة المرور مطلوب"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمة المرور غير متطابقة",
    path: ["confirmPassword"],
  });

export type RegisterSchemaDto = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const methods = useForm<RegisterSchemaDto>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      nameAr: "",
      nameEn: "",
      phone: "",
      isAdmin: false,
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterSchemaDto) => {
    try {
      setLoading(true);
      const result = await registerAction(data);

      if (result?.statusCode === 400 && result?.success === false) {
        toast.error(result.message);
      }

      if (result?.statusCode === 200 && result?.success && result?.user) {
        toast.success(result.message);
        router.push(`/en/${ROUTES.AUTH}/${ROUTES_AUTH.LOGIN}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="mt-10 w-full space-y-6"
      >
        <FormInput
          name="nameAr"
          label="Name (Arabic)"
          placeholder="ادخل الاسم بالعربي"
        />
        <FormInput
          name="nameEn"
          label="Name (English)"
          placeholder="Enter name in English"
        />
        <FormInput
          name="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
        />
        <FormInput
          name="email"
          type="email"
          label="Email address"
          placeholder="Enter your email"
          labelClassName="text-white"
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          labelClassName="text-white"
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          labelClassName="text-white"
        />

        {/* isAdmin checkbox */}
        <div className="flex items-center gap-2">
          <input
            {...methods.register("isAdmin")}
            type="checkbox"
            className="w-5 h-5"
          />
          <label className="text-white">Admin</label>
        </div>

        <Button type="submit" className="w-full" size="lg">
          <span className="flex items-center justify-center">
            {loading ? <Loader className="mr-2 animate-spin" /> : "Register"}
          </span>
        </Button>

        <p className="text-md text-white text-center">
          Already have an account?
          <Link
            href={`${ROUTES.AUTH}/${ROUTES_AUTH.LOGIN}`}
            className="font-semibold text-indigo-800 mx-1 underline hover:text-indigo-900"
          >
            Login
          </Link>
        </p>
      </form>
    </FormProvider>
  );
}
