import { Locale } from "@/i18n.config";
import { ROUTES, ROUTES_AUTH } from "@/lib/types";
import { authOptions } from "@/server/auth/auth-optins";
import { UserRole } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import ProfileForm from "../../_components/auth/profile-form";
import TitleSection from "../../_components/title-section/title-section";

const AdminProfilePage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const session = await getServerSession(authOptions);
  if (session && UserRole.CUSTOMER === session.user.role) {
    redirect(`/${locale}/${ROUTES.HOME}/${ROUTES_AUTH.PROFILE}`);
  }
  return (
    <section className="container lg:min-h-screen-90 w-full items-center justify-center flex flex-col rounded-xl lg:rounded-[50px] shadow-2xl ">
      <TitleSection
        title="Admin Profile"
        subtitle="Update your profile information"
      />
      <ProfileForm user={session?.user} />;
    </section>
  );
};

export default AdminProfilePage;
