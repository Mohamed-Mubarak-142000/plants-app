"use client";
import React from "react";
import { ChartBarStacked, DownloadCloud, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES, ROUTES_PLANTS } from "@/lib/types";
import PageHeader from "@/app/[locale]/_components/admin/page-header";

const Page = () => {
  const router = useRouter();

  const navigateToAddPlant = () => {
    router.push(
      `${ROUTES.ADMIN}/${ROUTES_PLANTS.PLANTS}/${ROUTES_PLANTS.PLANTS_ADD}`
    );
  };

  return (
    <>
      <PageHeader
        title="Plants List"
        icon={<ChartBarStacked size={24} />}
        actions={[
          {
            label: "Add Plant",
            onClick: () => navigateToAddPlant(),
            icon: <Plus size={16} />,
            variant: "primary",
          },
          {
            label: "Export",
            onClick: () => console.log("Delete"),
            icon: <DownloadCloud size={16} />,
            variant: "default",
          },
        ]}
      />
    </>
  );
};

export default Page;
