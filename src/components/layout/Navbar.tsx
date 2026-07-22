"use client";
import Link from "next/link";
import Container from "../ui/Container";
import { navigationLinks } from "@/data/navigation";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import useActiveSection from "@/hooks/useActiveSection";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeSection = useActiveSection();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo.jpg"
              alt="كنوز الذوق"
              width={50}
              height={50}
              priority
              className="rounded-full"
            />

            <div className=" sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                كنوز الذوق
              </h1>

              <p className="text-xs text-slate-500">للتشطيبات والديكورات</p>
            </div>
          </Link>

          {/* Navigation */}
          <ul className="hidden gap-8 md:flex">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-amber-600"
                      : "text-slate-700 hover:text-amber-600"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          {/* CTA */}
          <div className="hidden items-center gap-5 md:flex">
            <a
              href="tel:+966565063320"
              className="font-medium text-slate-700 hover:text-amber-600"
            >
              📞 0565 063 320
            </a>

            <a
              href="https://wa.me/966565063320?text=السلام عليكم، أرغب في الاستفسار عن خدماتكم."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-amber-600 px-5 py-2.5 text-white transition hover:bg-amber-700"
            >
              واتساب
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-slate-700"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </nav>
        {isOpen && (
          <div className="border-t bg-white md:hidden">
            <ul className="flex flex-col py-4">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 transition hover:bg-slate-100"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}

              <a
                href="https://wa.me/966565063320?text=السلام عليكم، أرغب في الاستفسار عن خدماتكم."
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-4 rounded-lg bg-amber-600 py-3 text-center text-white"
              >
                واتساب
              </a>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
