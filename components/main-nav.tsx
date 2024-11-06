"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface MainNavProps extends React.HtmlHTMLAttributes<HTMLElement> {
  scrolled: boolean;
}
export const MainNav = ({ className, scrolled, ...props }: MainNavProps) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/`,
      lable: "Trang chủ",
      active: pathname === `/`,
    },
    {
      href: `/menu`,
      lable: "Sản phẩm",
      active: pathname === `/menu`,
    },
    {
      href: `/orders`,
      lable: "Đặt hàng",
      active: pathname === `/order`,
    },
    {
      href: `/about`,
      lable: "Giới thiệu",
      active: pathname === `/about`,
    },
    {
      href: `/contact`,
      lable: "Liên hệ",
      active: pathname === `/contact`,
    },
  ];
  return (
    <div className="ml-auto">
      <nav
        className={cn(
          "flex items-center space-x-4 lg:space-x-12 pl-6",
          className
        )}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-base font-medium transition-colors hover:text-white hover:underline",
              route.active
                ? `${
                    scrolled
                      ? "text-white font-bold"
                      : "text-white dark:text-white"
                  }`
                : `${scrolled ? "text-black" : "text-black"}`
            )}
          >
            {route.lable}
          </Link>
        ))}
      </nav>
    </div>
  );
};
