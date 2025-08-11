import { Environment, ROUTES, ROUTES_AUTH } from "@/lib/types";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/prisma-db";
import { login } from "../_actions/login";
import { Locale } from "@/i18n.config";

export const authOptions: NextAuthOptions = {
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
        const userCredentials = credentials;
        return {
          id: crypto.randomUUID(),
          ...userCredentials,
        };
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  pages: {
    signIn: `${ROUTES.AUTH}/${ROUTES_AUTH.LOGIN}`,
  },
};
