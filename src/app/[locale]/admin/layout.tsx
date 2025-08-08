import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../_components/admin/app-sidebar";
import { ROUTES, ROUTES_PLANTS, SidebarLink } from "@/lib/types";
import {
  Flower,
  Inbox,
  LayoutDashboard,
  Leaf,
  ListOrdered,
  Users,
} from "lucide-react";
import { Locale } from "@/i18n.config";
import getTrans from "@/lib/translation";

export default async function AdminLayout({
  children,
  params,
}: {
  params: Promise<{ locale: Locale }>;
  children: React.ReactNode;
}) {
  const locale = (await params).locale;
  const { admin } = await getTrans(locale);
  const SidebarLinks: SidebarLink[] = [
    {
      title: admin.sidebar.dashboard,
      href: `${ROUTES.ADMIN}/${ROUTES.DASHBOARD}`,
      icon: () => <LayoutDashboard className="w-4 h-4 mr-2" />,
    },

    {
      title: admin.sidebar.plant_section_title,
      href: "/plants",
      icon: () => <Leaf className="w-4 h-4 mr-2" />,
      children: [
        {
          title: admin.sidebar.plants_list,
          href: `${ROUTES.ADMIN}/${ROUTES_PLANTS.PLANTS}/${ROUTES_PLANTS.PLANTS_LIST}`,
          icon: () => <Flower className="w-4 h-4 mr-2" />,
        },
        {
          title: admin.sidebar.plants_transactions,
          href: `${ROUTES.ADMIN}/${ROUTES_PLANTS.PLANTS}/${ROUTES_PLANTS.PLANTS_TRANSACTIONS}`,
          icon: () => <Flower className="w-4 h-4 mr-2" />,
        },
      ],
    },
    {
      title: admin.sidebar.categories_list,
      href: `${ROUTES.ADMIN}/${ROUTES.CATEGORY_LIST}`,
      icon: () => <Flower className="w-4 h-4 mr-2" />,
    },
    {
      title: admin.sidebar.users,
      href: `${ROUTES.ADMIN}/${ROUTES.USERS}`,
      icon: () => <Users className="w-4 h-4 mr-2" />,
    },
    {
      title: admin.sidebar.orders,
      href: `${ROUTES.ADMIN}/${ROUTES.ORDERS}`,
      icon: () => <ListOrdered className="w-4 h-4 mr-2" />,
    },
    {
      title: admin.sidebar.inbox,
      href: `${ROUTES.ADMIN}/${ROUTES.INBOX}`,
      icon: () => <Inbox className="w-4 h-4 mr-2" />,
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar SidebarLinks={SidebarLinks} />
      <main className="min-h-screen-90 w-full p-2">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
