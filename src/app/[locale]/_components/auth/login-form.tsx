"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../_components/forms/form-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  LoginFormTranslationsProps,
  ROUTES,
  ROUTES_AUTH,
  ValidationMessages,
} from "@/lib/types";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  createLoginSchema,
  LoginSchemaDto,
} from "./_utils/get-login-schema-dto";

export default function LoginForm({
  translations,
  validationMessages,
}: {
  translations: LoginFormTranslationsProps;
  validationMessages: ValidationMessages;
}) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const loginSchema = React.useMemo(
    () =>
      createLoginSchema({
        emailInvalid: validationMessages.emailInvalid,
        emailRequired: validationMessages.emailRequired,
        passwordMin: validationMessages.passwordMin,
        passwordRequired: validationMessages.passwordRequired,
      }),
    [validationMessages]
  );

  const methods = useForm<LoginSchemaDto>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginSchemaDto) => {
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error(JSON.parse(result.error));
      } else if (result?.ok && result.url) {
        toast.success(translations.loginSuccess);
        router.push(`/en${ROUTES.HOME}`);
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
          name={"email"}
          type="email"
          label={translations.emailLabel}
          placeholder={translations.emailPlaceholder}
          className="placeholder:text-slate-300"
          labelClassName="text-white"
        />

        <FormInput
          name="password"
          type="password"
          className="placeholder:text-slate-300"
          label={translations.passwordLabel}
          placeholder={translations.passwordPlaceholder}
          labelClassName="text-white"
        />

        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="text-sm underline text-center text-red-700 hover:text-red-800"
          >
            {translations.forgetPasswordText}
          </Link>
        </div>

        <Button type="submit" className="w-full" size="lg">
          <span className="flex items-center justify-center">
            {loading ? (
              <Loader className="mr-2 animate-spin" />
            ) : (
              `${translations.loginButton}`
            )}
          </span>
        </Button>

        <p className="text-md text-white text-center">
          {translations.noAccountText}
          <Link
            href={`${ROUTES.AUTH}/${ROUTES_AUTH.REGISTER}`}
            className="font-semibold text-indigo-800 mx-1 underline hover:text-indigo-900"
          >
            {translations.signUpText}
          </Link>
        </p>
      </form>
    </FormProvider>
  );
}
