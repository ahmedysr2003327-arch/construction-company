import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { company, footerServices, quickLinks } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Image
                src={company.logo}
                alt={company.name}
                width={55}
                height={55}
                className="rounded-full"
              />

              <div>
                <h3 className="text-xl font-bold">{company.name}</h3>

                <p className="text-sm text-slate-400">للتشطيبات والديكورات</p>
              </div>
            </div>

            <p className="leading-8 text-slate-300">{company.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">روابط سريعة</h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition hover:text-amber-500"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">خدماتنا</h3>

            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service} className="text-slate-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">تواصل معنا</h3>

            <ul className="space-y-4 text-slate-300">
              <li>📞 {company.phone}</li>

              <li>✉ {company.email}</li>

              <li>📍 {company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} {company.name}. جميع الحقوق محفوظة.
        </div>
      </Container>
    </footer>
  );
}
