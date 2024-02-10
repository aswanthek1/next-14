"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const pathname = usePathname()
const [input, setInput] = useState("");
return (
    <div>
        <div>
            <input className="bg-gray-300 border-b-rose-900" type="text" value={input} onChange={(event) => setInput(event.target.value)} />
        </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
          <Link
            className={ isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}