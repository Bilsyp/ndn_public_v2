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
      <div className="container flex h-16 items-center   justify-between px-10">
        {/* Logo */}
        <div className="mr-8 ">
          <Link href="/" className="text-xl z-50 relative font-bold">
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
                    <Link href="/features" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">
                          Fitur
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Lihat semua fitur yang tersedia
                        </p>
                      </NavigationMenuLink>
                    </Link>
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

            {/* Menu Item 2 */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Produk</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <div className="grid grid-cols-1 gap-3">
                    <Link href="/products/new" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">
                          Produk Baru
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Lihat produk terbaru kami
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/products/featured" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">
                          Produk Unggulan
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Produk terbaik pilihan kami
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Menu Item 3 - Direct Link */}
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Kontak
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
