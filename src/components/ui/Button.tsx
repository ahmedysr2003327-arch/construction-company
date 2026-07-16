import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-amber-600 text-white hover:bg-amber-700",
    secondary:
      "border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white",
  };

  if (href) {
    return (
      <Link href={href} className={`${baseStyle} ${variants[variant]}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
}
