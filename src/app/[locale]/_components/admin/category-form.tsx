import React from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import FormSections from "../forms/form-sections";
import FormInput from "../forms/form-input";
import { Button } from "@/components/ui/button";

interface GenericFormProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void;
}

const CategoryForm = <T extends FieldValues>({
  methods,
  onSubmit,
}: GenericFormProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
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
            Submit
          </Button>
        </FormSections>
      </form>
    </FormProvider>
  );
};

export default CategoryForm;
