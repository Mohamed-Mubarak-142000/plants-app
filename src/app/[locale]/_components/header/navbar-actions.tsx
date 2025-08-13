import { User2Icon } from "lucide-react";
import Link from "../link";

import { ROUTES, ROUTES_AUTH } from "@/lib/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth/auth-optins";
import Image from "next/image";
import { getAvatarName } from "@/hooks/get-avatar-name";
import { Locale } from "@/i18n.config";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import SignoutButton from "./signout-button";
import { UserRole } from "@prisma/client";

export default async function NavbarActions({ locale }: { locale: Locale }) {
  const session = await getServerSession(authOptions);
  const nameByLocale =
    locale === "ar" ? session?.user?.nameAr : session?.user?.nameEn;
  const avatarName = getAvatarName(nameByLocale || "");

  return (
    <div className="flex items-center gap-6">
      {session && session.user.role !== UserRole.ADMIN ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 focus:outline-none">
              {session.user?.image ? (
                <Image
                  src={session.user.image}
                  alt={nameByLocale || "User"}
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

              <div className="max-w-[150px] truncate text-white cursor-pointer">
                {nameByLocale || session.user?.email}
              </div>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem asChild>
              <Link
                href={`/${locale}${ROUTES.HOME}/${ROUTES_AUTH.PROFILE}`}
                className="cursor-pointer hover:bg-green-200 p-0"
              >
                <div className="flex items-center gap-2">
                  <User2Icon />
                  <span className="text-lg">My Profile</span>
                </div>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <SignoutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={`/${locale}/${ROUTES.AUTH}/${ROUTES_AUTH.LOGIN}`}>
          <User2Icon className="cursor-pointer text-white" />
        </Link>
      )}
    </div>
  );
}
