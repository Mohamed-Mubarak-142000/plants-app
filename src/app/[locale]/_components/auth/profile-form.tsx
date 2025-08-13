"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../forms/form-input";
import { useRouter } from "next/navigation";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ROUTES } from "@/lib/types";
import { updateUser } from "@/server/_actions/update-profile";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { Session } from "next-auth";
import { getAvatarName } from "@/hooks/get-avatar-name";
import Image from "next/image";
import { UserRole } from "@prisma/client";
// import { UserRole } from "@prisma/client";

const updateSchema = z.object({
  email: z.string().email(),
  nameAr: z.string().min(1, "الاسم بالعربي مطلوب"),
  nameEn: z.string().min(1, "الاسم بالإنجليزي مطلوب"),
  phone: z.string().min(1, "رقم الجوال مطلوب"),
  image: z.string().optional(),
  isAdmin: z.boolean().optional(),
});

export type UpdateSchemaDto = z.infer<typeof updateSchema>;

const ProfileForm = ({ user }: { user: Session["user"] }) => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const avaterName = getAvatarName(user?.nameEn || "");

  const methods = useForm<UpdateSchemaDto>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      email: user?.email || "",
      nameAr: user?.nameAr || "",
      nameEn: user?.nameEn || "",
      phone: user?.phone || "",
      image: user?.image || "",
      isAdmin: user?.role === "ADMIN",
    },
  });

  console.log("methods", methods.formState.errors);

  const onSubmit = async (data: UpdateSchemaDto) => {
    try {
      setLoading(true);
      const result = await updateUser(data);

      if (result?.statusCode === 400 && result?.success === false) {
        toast.error(result.message);
      }

      if (result?.statusCode === 200 && result?.success && result?.user) {
        toast.success(result.message);
        router.push(`/en/${ROUTES.ADMIN}/${ROUTES.DASHBOARD}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full flex items-start justify-between "
      >
        <div className="flex flex-col items-center justify-start w-full lg:w-1/3">
          {
            // image
            user?.image ? (
              <div className="flex items-center justify-center w-48 h-48 border-2 border-green-600 rounded-full">
                <Image
                  src={user?.image}
                  alt={user?.nameAr || "User"}
                  width={100}
                  height={100}
                  className="rounded-full w-full h-full bg-emerald-50"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="w-64 h-64 border-2 border-green-600 bg-green-100 hover:bg-green-200 cursor-pointer rounded-full mx-auto flex items-center justify-center text-xl">
                {avaterName}
              </div>
            )
          }
          <div className="my-4 ">
            <label
              htmlFor="image"
              className="text-green-500 hover:text-green-500 transition-all duration-150 cursor-pointer bg-green-50 hover:bg-green-100 border border-green-500 hover:border-green-500 py-2 px-4 rounded-full"
            >
              Upload image
            </label>
            <input
              type="file"
              id="image"
              className="hidden"
              accept="image/*"
              {...methods.register("image")}
            />
          </div>

          <div className="space-y-2 text-center">
            <p className="font-normal text-gray-400">{user?.email}</p>
            <p className="font-bold text-green-700">{user?.role}</p>
          </div>
        </div>

        <div className="space-y-6 w-full lg:w-2/3">
          <FormInput
            name="nameAr"
            label="Name (Arabic)"
            placeholder="ادخل الاسم بالعربي"
          />
          <FormInput
            name="nameEn"
            label="Name (English)"
            placeholder="Enter name in English"
          />
          <FormInput
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <FormInput
            name="email"
            type="email"
            label="Email address"
            placeholder="Enter your email"
            disabled
          />

          {/* isAdmin checkbox */}
          {user?.role === UserRole.ADMIN && (
            <div className="flex items-center gap-2">
              <input
                {...methods.register("isAdmin")}
                type="checkbox"
                className="w-5 h-5"
              />
              <label className="">Admin</label>
            </div>
          )}

          <Button type="submit" className="w-full" size="lg">
            <span className="flex items-center justify-center">
              {loading ? <Loader className="mr-2 animate-spin" /> : "Update"}
            </span>
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProfileForm;
