"use client";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

export default function AppHeader() {
  const activePathname = usePathname();

  console.log(activePathname);

  return (
    <header className="flex justify-between items-center border-b border-white py-2">
      <Logo />

      <nav>
        <ul className="flex gap-2 text-xs">
          {routes.map((e) => (
            <li key={e.path}>
              <Link
                href={e.path}
                className={cn(
                  "text-white/70  rounded-sm px-2 py-1 hover:text-white transition",
                  {
                    "bg-black/10": e.path === activePathname,
                  }
                )}
              >
                {e.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
