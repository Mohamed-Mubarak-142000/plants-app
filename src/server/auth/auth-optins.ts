import { Environment, ROUTES, ROUTES_AUTH } from "@/lib/types";
import { DefaultSession, NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/prisma-db";
import { login } from "../_actions/login";
import { Locale } from "@/i18n.config";
import { JWT } from "next-auth/jwt";
import { User, UserRole } from "@prisma/client";

declare module "next-auth/jwt" {
  interface JWT extends Partial<User> {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    nameAr: string;
    nameEn: string;
    image: string;
    phone: string;
    lang: string;
    lat: string;
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.nameAr = token.nameAr;
        session.user.nameEn = token.nameEn;
        session.user.role = token.role;
        session.user.image = token.image;
        session.user.phone = token.phone;
        session.user.lang = token.lang;
        session.user.lat = token.lat;
      }

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          email: token.email,
          nameAr: token.nameAr,
          nameEn: token.nameEn,
          role: token.role,
          image: token.image,
          phone: token.phone,
          lang: token.lang,
          lat: token.lat,
        },
      };
    },
    jwt: async ({ token }): Promise<JWT> => {
      const dbUser = await db.user.findUnique({
        where: {
          email: token?.email,
        },
      });
      if (!dbUser) {
        return token;
      }

      return {
        ...token,
        id: dbUser.id,
        email: dbUser.email,
        nameAr: dbUser.nameAr,
        nameEn: dbUser.nameEn,
        role: dbUser.role,
        image: dbUser.image || "",
        phone: dbUser.phone || "",
        lang: dbUser.lang || "",
        lat: dbUser.lat || "",
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days ==> refresh token
    updateAge: 24 * 60 * 60, // 24 hours ==> access token
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === Environment.DEVELOPMENT,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      authorize: async (credentials, req) => {
        const currentUrl = req?.headers?.referer;
        const currentLocale = currentUrl?.split("/")[3] as Locale;

        const result = await login(credentials, currentLocale);

        if (result.statusCode === 200 && result.user) {
          return result.user;
        } else {
          throw new Error(JSON.stringify(result?.message));
        }
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  pages: {
    signIn: `${ROUTES.AUTH}/${ROUTES_AUTH.LOGIN}`,
  },
};
