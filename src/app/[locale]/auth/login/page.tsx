import Image from "next/image";

import Logo from "../../_components/logo";
import LoginForm from "../../_components/auth/login-form";
import { getCurrentLang } from "@/lib/get-current-lang";
import getTrans from "@/lib/translation";
import { LoginAuth } from "../../../../../public/images";

export default async function LoginPage() {
  const locale = await getCurrentLang();
  const { auth } = await getTrans(locale);
  return (
    <div className="grid grid-cols-3 h-screen">
      {/* Left image */}
      <div className="col-span-2">
        <Image
          src={LoginAuth}
          alt="image"
          width={300}
          height={500}
          placeholder="blur"
          className="w-full h-full"
        />
      </div>

      {/* Right form */}
      <div className="col-span-1 flex items-center justify-center bg-green-700">
        <div className="w-full px-5 space-y-8">
          <div className="w-full h-36 rounded-xl flex items-center justify-center mx-auto">
            <Logo />
          </div>

          <div className="text-start space-y-5">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
              {auth.signin}
            </h2>
            <p className="mt-2 text-sm text-gray-100">{auth.welcome}</p>
          </div>

          {/* Client component */}
          <LoginForm
            translations={auth}
            validationMessages={auth.validationMessages}
          />
        </div>
      </div>
    </div>
  );
}
