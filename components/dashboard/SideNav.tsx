"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, UserPlus, Bookmark } from "react-feather";

// feather Icons
const sideNavLinks = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    id: 2,
    name: "Kunden",
    href: "/dashboard/allKunde",
    icon: User,
  },
  {
    id: 3,
    name: "Rechnungen",
    href: "/dashboard/rechnungen",
    icon: Bookmark,
  },
];

const SideNav = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-[calc(100vh-7vh)] bg-gray-100 py-4 flex flex-col justify-between">
      <ul className="relative flex flex-col gap-3">
        <li>
          <h2 className="mb-5 px-5 text-2xl ">Navigation</h2>
        </li>
        {sideNavLinks.map((link) => {
          const LinkIcon = link.icon;
          return (
            <li
              key={link.id}
              className={
                link.href === pathname
                  ? "pl-4 py-3 rounded-lg text-white bg-blue-400"
                  : "pl-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-blue-400 hover:transition"
              }
            >
              <Link href={link.href}>
                <span className="flex gap-3 items-center ">
                  <LinkIcon size={20} /> {link.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="bg-blue-400 pl-4 py-3 rounded-xl">
        <Link
          className="flex items-center gap-3 text-white"
          href="/dashboard/addKunde"
        >
          <span>
            <UserPlus size={20} />
          </span>
          Neuer Kunde
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
