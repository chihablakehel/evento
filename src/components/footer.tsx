import Page from "@/app/privacy-policy/page";
import TermsConditionsPage from "@/app/terms-conditions/page";
import Link from "next/link";

const routes = [
  {
    path: "/terms-conditions",
    name: "Terms & Conditions",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-between items-center mt-auto h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25 ">
      <small className="text-xs">
        &copy; 2050 ChihabLak. All rights reserved
      </small>

      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
