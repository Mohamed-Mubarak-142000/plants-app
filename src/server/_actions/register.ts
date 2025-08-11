"use server";
import { RegisterSchemaDto } from "@/app/[locale]/_components/auth/register-form";
import { db } from "@/lib/prisma-db";
import bcrypt from "bcrypt";

export const register = async (userData: RegisterSchemaDto) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: userData.email,
      },
    });

    if (user) {
      return {
        message: "User already exists",
        success: false,
        statusCode: 400,
      };
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = await db.user.create({
      data: {
        email: userData.email,
        nameAr: userData.nameAr,
        nameEn: userData.nameEn,
        phone: userData.phone,
        password: hashedPassword,
        role: userData.isAdmin ? "ADMIN" : "CUSTOMER",
      },
    });

    return {
      message: "User registered successfully",
      success: true,
      statusCode: 200,
      user: newUser,
    };
  } catch (error) {
    console.log("error", error);
  }
};
