// app/admin/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../_components/admin/app-sidebar";
import { Locale } from "@/i18n.config";
import { getSidebarLinks } from "./_utils/get-sidebar-links";

export default async function AdminLayout({
  children,
  params,
}: {
  params: { locale: Locale };
  children: React.ReactNode;
}) {
  const locale = params.locale;
  const SidebarLinks = await getSidebarLinks(locale);

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
