"use server";

import { Locale } from "@/i18n.config";
import { db } from "@/lib/prisma-db";
import bcrypt from "bcrypt";

export const login = async (
  credentials: Record<"email" | "password", string> | undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  locale: Locale
) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: credentials?.email,
      },
    });
    if (!user) {
      return { message: "user not found", success: false, statusCode: 404 };
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials?.password || "",
      user.password
    );

    if (!isPasswordCorrect) {
      return {
        message: "password is incorrect",
        success: false,
        statusCode: 401,
      };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...allDataWithoutPassword } = user;

    return {
      message: "success",
      success: true,
      statusCode: 200,
      user: allDataWithoutPassword,
    };
  } catch (error) {
    console.log("error", error);
    return {
      message: "something went wrong",
      success: false,
      statusCode: 500,
    };
  }
};
