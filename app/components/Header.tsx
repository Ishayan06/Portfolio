"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <header className="w-full border-b bg-black text-white">
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

          <Link href="/" className="text-xl font-bold hover:text-orange-400">
            Portfolio
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm hover:text-orange-400"
                >
                  {item.label}

                  {/* Gradient underline IF active */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t py-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-sm hover:bg-gray-800 ${
                    isActive ? "text-orange-400 font-semibold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
