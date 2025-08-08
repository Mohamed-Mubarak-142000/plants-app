"use client";
import React from "react";
import PageHeader from "../../_components/admin/page-header";
import { ChartBarStacked, DownloadCloud, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES, ROUTES_CATEGORIES } from "@/lib/types";

const Page = () => {
  const router = useRouter();

  const navigateToAddCategory = () => {
    router.push(`${ROUTES.ADMIN}/${ROUTES_CATEGORIES.CATEGORIES_ADD}`);
  };

  return (
    <>
      <PageHeader
        title="Categories List"
        icon={<ChartBarStacked size={24} />}
        actions={[
          {
            label: "Add Category",
            onClick: () => navigateToAddCategory(),
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
