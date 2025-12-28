"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavButton({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  const base =
    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200";
  const active =
    "bg-white/10 text-white shadow-sm ring-1 ring-white/10 cursor-default";
  const inactive =
    "bg-white/5 text-zinc-200 hover:bg-white/10 hover:text-white ring-1 ring-white/10";

  return isActive ? (
    <span aria-current="page" className={`${base} ${active}`}>
      {label}
    </span>
  ) : (
    <Link href={href} className={`${base} ${inactive}`}>
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const onProjects = pathname.startsWith("/projects");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-4 sm:px-6">
        <nav className="flex items-center gap-3">
          <NavButton href="/" label="My Profile" isActive={onHome} />
          <NavButton href="/projects" label="My projects" isActive={onProjects} />
        </nav>
      </div>
    </header>
  );
}
