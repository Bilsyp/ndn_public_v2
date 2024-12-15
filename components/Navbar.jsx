"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="w-full border-b">
      <div className="container flex h-16 items-center   justify-center px-10">
        {/* Logo */}
        <div className="mr-8 ">
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Menu Item 1 */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Beranda</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">
                          Tentang
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Pelajari lebih lanjut tentang kami
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
