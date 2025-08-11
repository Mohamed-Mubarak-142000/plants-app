import { User2Icon } from "lucide-react";
import Link from "../link";

import { ROUTES, ROUTES_AUTH } from "@/lib/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth/auth-optins";
import Image from "next/image";
import { getAvatarName } from "@/hooks/get-avatar-name";
import { Locale } from "@/i18n.config";

export default async function NavbarActions({ locale }: { locale: Locale }) {
  const session = await getServerSession(authOptions);
  const avatarName = getAvatarName(
    session?.user?.name || session?.user?.email || ""
  );

  return (
    <div className="flex items-center gap-6">
      {session ? (
        <Link href={`/${locale}/${ROUTES.AUTH}/${ROUTES_AUTH.PROFILE}`}>
          <div className="flex items-center gap-2 ">
            {session.user?.image ? (
              <Image
                src={session.user?.image}
                alt={session.user?.name || "User"}
                width={40}
                height={40}
                className="rounded-full bg-emerald-50"
                loading="lazy"
              />
            ) : (
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">
                {avatarName}
              </div>
            )}

            <div className="max-w-[150px] truncate">
              {session.user?.name || session.user?.email}
            </div>
          </div>
        </Link>
      ) : (
        <Link href={`/${locale}/${ROUTES.AUTH}/${ROUTES_AUTH.LOGIN}`}>
          <User2Icon className="cursor-pointer text-white" />
        </Link>
      )}
    </div>
  );
}
