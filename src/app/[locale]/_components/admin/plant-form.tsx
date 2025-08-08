"use client";
import React from "react";
import FormSections from "../forms/form-sections";
import FormInput from "../forms/form-input";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface GenericFormProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void;
}

const PlantForm = <T extends FieldValues>({
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

          <FormSections.Grid>
            <FormSections.Start>
              <FormInput
                name="image"
                label="Image URL"
                placeholder="https://example.com/image.jpg"
              />
            </FormSections.Start>

            <FormSections.End>
              <FormInput name="order" label="Order" type="number" />
            </FormSections.End>
          </FormSections.Grid>

          <FormSections.Grid>
            <FormSections.Start>
              <FormInput name="basePrice" label="Base Price" type="number" />
            </FormSections.Start>

            <FormSections.End>
              <FormInput name="offerPrice" label="Offer Price" type="number" />
            </FormSections.End>
          </FormSections.Grid>

          <FormSections.Grid>
            <FormSections.Start>
              <FormInput name="stock" label="Stock" type="number" />
            </FormSections.Start>

            <FormSections.End>
              <FormInput name="categoryId" label="Category ID" />
            </FormSections.End>
          </FormSections.Grid>
        </FormSections>

        <Button variant={"default"} type="submit">
          Create Plant
        </Button>
      </form>
    </FormProvider>
  );
};

export default PlantForm;
