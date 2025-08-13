"use server";
import { UpdateSchemaDto } from "@/app/[locale]/_components/auth/profile-form";
import { db } from "@/lib/prisma-db";

//Update User
export const updateUser = async (User: UpdateSchemaDto) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: User.email,
      },
    });

    if (!user) {
      return {
        message: "User not found",
        success: false,
        statusCode: 404,
      };
    }

    const updatedUser = await db.user.update({
      where: {
        email: User.email,
      },
      data: {
        nameAr: User.nameAr,
        nameEn: User.nameEn,
        phone: User.phone,
        role: User?.isAdmin ? "ADMIN" : "CUSTOMER",
        image: User.image,
      },
    });

    return {
      message: "User updated successfully",
      success: true,
      statusCode: 200,
      user: updatedUser,
    };
  } catch (error) {
    console.log("error", error);
  }
};
