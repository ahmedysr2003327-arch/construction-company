import Link from "next/link";
import Container from "../ui/Container";
import { navigationLinks } from "@/data/navigation";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo.jpg"
              alt="Company Logo"
              width={50}
              height={50}
              priority
            />
          </Link>

          {/* Navigation */}
          <ul className="hidden gap-8 md:flex">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-medium text-slate-700 transition hover:text-amber-600"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/201000000000"
            target="_blank"
            className="rounded-lg bg-amber-600 px-5 py-2.5 text-white transition hover:bg-amber-700"
          >
            واتساب
          </a>
        </nav>
      </Container>
    </header>
  );
}
