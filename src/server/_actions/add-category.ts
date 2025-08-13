"use server";
import { AddCategoryDto } from "@/app/[locale]/admin/add-category/page";
import { db } from "@/lib/prisma-db";

export const addCategory = async (CategoryData: AddCategoryDto) => {
  try {
    const { nameAr, nameEn, descriptionAr, descriptionEn, image } =
      CategoryData;
    if (!nameAr || !nameEn || !descriptionAr || !descriptionEn) {
      return {
        message: "All fields are required",
        success: false,
        statusCode: 400,
      };
    }

    const isNameExist = await db.category.findFirst({
      where: {
        nameAr: nameAr,
        nameEn: nameEn,
      },
    });

    if (isNameExist) {
      return {
        message: "Category already exists",
        success: false,
        statusCode: 400,
      };
    }

    const newCategory = await db.category.create({
      data: {
        nameAr: nameAr,
        nameEn: nameEn,
        descriptionAr: descriptionAr,
        descriptionEn: descriptionEn,
        image: image,
        order: 1,
      },
    });

    return {
      message: "Category added successfully",
      success: true,
      statusCode: 200,
      category: newCategory,
    };
  } catch (error) {
    console.log("error", error);
  }
};
