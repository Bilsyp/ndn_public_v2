import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import AppConfig from "../config/AppConfig";
import { Settings } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className=" text-center text-3xl font-semibold">
          <Settings className="w-8 font-bold h-8 inline m-2" />
          Configuration
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <AppConfig />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
