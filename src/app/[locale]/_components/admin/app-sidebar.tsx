import Link from "next/link";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import Logo from "../logo";
import { SidebarLink } from "@/lib/types";

export function AppSidebar({ SidebarLinks }: { SidebarLinks: SidebarLink[] }) {
  return (
    <Sidebar>
      <SidebarContent className="bg-green-700">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white flex items-center justify-center h-20 text-lg">
            <Logo />
          </SidebarGroupLabel>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SidebarLinks.map((item) =>
                item.children ? (
                  <Collapsible key={item.title}>
                    <SidebarMenuItem className="my-2">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="text-white w-full text-[16px] justify-start">
                          <div className="flex items-center gap-2">
                            {item.icon()}
                            {item.title}
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.children.map((sub) => (
                            <SidebarMenuSubItem
                              className="my-2 text-white text-[16px]"
                              key={sub.title}
                            >
                              <Link
                                href={sub.href}
                                className="flex items-center"
                              >
                                {sub.icon()}
                                {sub.title}
                              </Link>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="text-white text-[16px] my-2"
                    >
                      <Link href={item.href} className="flex items-center ">
                        {item.icon()}
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
