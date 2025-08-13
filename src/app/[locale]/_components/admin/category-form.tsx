"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormSections from "../forms/form-sections";
import FormInput from "../forms/form-input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { addCategory } from "@/server/_actions/add-category";
import { Loader } from "lucide-react";

const addCategorySchema = z.object({
  nameAr: z.string().min(1, "الاسم بالعربي مطلوب"),
  image: z.string().url("رابط الصورة غير صحيح").optional(),
  nameEn: z.string().min(1, "الاسم بالإنجليزي مطلوب"),
  descriptionAr: z.string().min(1, "الوصف بالعربي مطلوب"),
  descriptionEn: z.string().min(1, "الوصف بالإنجليزي مطلوب"),
});

export type AddCategoryDto = z.infer<typeof addCategorySchema>;

const CategoryForm = () => {
  const [loading, setLoading] = React.useState(false);
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

  const onSubmit = async (data: AddCategoryDto) => {
    try {
      setLoading(true);
      const result = await addCategory(data);
      if (result?.success) {
        navigateToList();
        toast(result.message);
      } else {
        toast(result?.message);
      }
      console.log(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...AddCategoryMethods}>
      <form
        onSubmit={AddCategoryMethods.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <FormSections>
          <FormSections.Grid>
            <FormSections.Start>
              <FormInput
                name="nameAr"
                label="Name (Arabic)"
                placeholder="ادخل الاسم بالعربي"
              />
            </FormSections.Start>

            <FormSections.End>
              <FormInput
                name="nameEn"
                label="Name (English)"
                placeholder="Enter name in English"
              />
            </FormSections.End>
          </FormSections.Grid>

          <FormSections.Grid>
            <FormSections.Start>
              <FormInput
                name="descriptionAr"
                label="Description (Arabic)"
                placeholder="ادخل الوصف بالعربي"
              />
            </FormSections.Start>

            <FormSections.End>
              <FormInput
                name="descriptionEn"
                label="Description (English)"
                placeholder="Enter description in English"
              />
            </FormSections.End>
          </FormSections.Grid>

          <Button type="submit" variant={"default"}>
            {loading ? (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Save"
            )}
          </Button>
        </FormSections>
      </form>
    </FormProvider>
  );
};

export default CategoryForm;
