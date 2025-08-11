"use client";
import React from "react";
import PageHeader from "../../_components/admin/page-header";
import { ChartBarStacked, CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/types";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CategoryForm from "../../_components/admin/category-form";

const addCategorySchema = z.object({
  nameAr: z.string().min(1, "الاسم بالعربي مطلوب"),
  nameEn: z.string().min(1, "الاسم بالإنجليزي مطلوب"),
  descriptionAr: z.string().min(1, "الوصف بالعربي مطلوب"),
  descriptionEn: z.string().min(1, "الوصف بالإنجليزي مطلوب"),
});

type AddCategoryDto = z.infer<typeof addCategorySchema>;

const Page = () => {
  const router = useRouter();

  const navigateToList = () => {
    router.push(`${ROUTES.ADMIN}/${ROUTES.CATEGORY_LIST}`);
  };

  const AddCategoryMethods = useForm<AddCategoryDto>({
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      nameAr: "",
      nameEn: "",
      descriptionAr: "",
      descriptionEn: "",
    },
  });

  const onSubmit = (data: AddCategoryDto) => {
    console.log(data);
  };

  return (
    <>
      <PageHeader
        title="Add Category"
        icon={<ChartBarStacked size={24} />}
        actions={[
          {
            label: "Cancel",
            onClick: () => navigateToList(),
            icon: <CircleArrowLeft size={18} />,
            variant: "primary",
          },
        ]}
      />
      <CategoryForm methods={AddCategoryMethods} onSubmit={onSubmit} />
    </>
  );
};

export default Page;
