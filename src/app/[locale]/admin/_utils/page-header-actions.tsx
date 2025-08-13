"use client";

import { useRouter } from "next/navigation";
import { Plus, DownloadCloud, ChartBarStacked } from "lucide-react";
import { ROUTES, ROUTES_CATEGORIES } from "@/lib/types";
import PageHeader from "../../_components/admin/page-header";

export function PageHeaderListCategoriesActions() {
  const router = useRouter();

  const navigateToAddCategory = () => {
    router.push(`${ROUTES.ADMIN}/${ROUTES_CATEGORIES.CATEGORIES_ADD}`);
  };

  return (
    <PageHeader
      title="Categories List"
      icon={<ChartBarStacked size={24} />}
      actions={[
        {
          label: "Add Category",
          onClick: navigateToAddCategory,
          icon: <Plus size={16} />,
          variant: "primary",
        },
        {
          label: "Export",
          onClick: () => console.log("Export"),
          icon: <DownloadCloud size={16} />,
          variant: "default",
        },
      ]}
    />
  );
}
