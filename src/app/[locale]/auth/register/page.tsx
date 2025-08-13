import Image from "next/image";
import Logo from "../../_components/logo";
import RegisterForm from "../../_components/auth/register-form";
import { RegisterAuth } from "../../../../../public/images";

export default function RegisterPage() {
  return (
    <div className="grid grid-cols-3 h-screen">
      {/* Left side image */}
      <div className="col-span-1">
        <Image
          src={RegisterAuth}
          alt="Authentication"
          width={300}
          height={500}
          placeholder="blur"
          className="w-full h-full"
        />
      </div>

      {/* Right side form */}
      <div className="col-span-2 flex items-center justify-center bg-green-700">
        <div className="w-full px-5 space-y-8">
          <div className="w-full h-36 rounded-xl flex items-center justify-center mx-auto">
            <Logo />
          </div>

          <div className="text-start space-y-5">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
              Create an account
            </h2>
            <p className="mt-2 text-sm text-gray-100">
              Welcome to our store. Buy your dream plants — the world in which
              we live is a reflection of our attitudes and expectations!
            </p>
          </div>

          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
