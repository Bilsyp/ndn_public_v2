import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
export default function PlayerLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main>{children}</main>
    </SidebarProvider>
  );
}
