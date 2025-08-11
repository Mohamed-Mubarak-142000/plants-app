"use client";
import PageHeader from "@/app/[locale]/_components/admin/page-header";
import PlantForm from "@/app/[locale]/_components/admin/plant-form";
import { ROUTES, ROUTES_PLANTS } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChartBarStacked, CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const addPlantSchema = z.object({
  nameAr: z.string().min(1, "الاسم بالعربي مطلوب"),
  nameEn: z.string().min(1, "الاسم بالإنجليزي مطلوب"),
  descriptionAr: z.string().min(1, "الوصف بالعربي مطلوب"),
  descriptionEn: z.string().min(1, "الوصف بالإنجليزي مطلوب"),
  image: z.string().url("رابط الصورة غير صحيح"),
  order: z.number().optional(),
  basePrice: z.number().min(0, "السعر الأساسي يجب أن يكون رقم موجب"),
  offerPrice: z.number().optional(),
  stock: z.number().min(0, "المخزون يجب أن يكون رقم موجب"),
  categoryId: z.string().min(1, "معرّف الفئة مطلوب"),
});

type AddPlantDto = z.infer<typeof addPlantSchema>;

const Page = () => {
  const router = useRouter();

  const navigateToList = () => {
    router.push(
      `${ROUTES.ADMIN}/${ROUTES_PLANTS.PLANTS}/${ROUTES_PLANTS.PLANTS_LIST}`
    );
  };

  const AddPlantMethods = useForm<AddPlantDto>({
    resolver: zodResolver(addPlantSchema),
    defaultValues: {
      nameAr: "",
      nameEn: "",
      descriptionAr: "",
      descriptionEn: "",
      image: "",
      order: 0,
      basePrice: 0,
      offerPrice: 0,
      stock: 0,
      categoryId: "",
    },
  });

  const onSubmit = (data: AddPlantDto) => {
    console.log(data);
  };

  return (
    <>
      <PageHeader
        title="Add Plant"
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
      <PlantForm methods={AddPlantMethods} onSubmit={onSubmit} />
    </>
  );
};

export default Page;
