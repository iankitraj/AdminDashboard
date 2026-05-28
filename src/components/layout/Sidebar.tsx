"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/src/constants/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white p-4">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>

      <nav className="mt-8 space-y-2">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;

          const isActive = pathname === link.href;

          return (
            <Link
              key={link.title}
              href={link.href}
              className={clsx(
                `
                  flex items-center gap-3 rounded-xl p-3
                  transition-all duration-200
                `,
                {
                  "bg-black text-white": isActive,

                  "text-gray-700 hover:bg-gray-100 hover:text-black": !isActive,
                },
              )}
            >
              <Icon size={20} />

              <span>{link.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
