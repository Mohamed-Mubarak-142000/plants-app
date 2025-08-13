import React from "react";
import PageHeader from "../../_components/admin/page-header";
import { ChartBarStacked } from "lucide-react";
import CategoryForm from "../../_components/admin/category-form";

const Page = () => {
  return (
    <>
      <PageHeader
        title="Add Category"
        icon={<ChartBarStacked size={24} />}
        actions={
          [
            // {
            //   label: "Cancel",
            //   onClick: () => navigateToList(),
            //   icon: <CircleArrowLeft size={18} />,
            //   variant: "primary",
            // },
          ]
        }
      />
      <CategoryForm />
    </>
  );
};

export default Page;
