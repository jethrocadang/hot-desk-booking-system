"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  HomeIcon,
  BookmarkIcon,
  InformationCircleIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const userLinks = [
  { name: "Home", href: "/users/dashboard", icon: HomeIcon },
  {
    name: "Booking",
    href: "/users/dashboard/bookings",
    icon: BookmarkIcon,
  },
  {
    name: "Desks",
    href: "/users/dashboard/desks",
    icon: Squares2X2Icon,
  },
  {
    name: "Support",
    href: "/users/dashboard/support",
    icon: InformationCircleIcon,
  },
];

function UserNavLinks() {
  const pathname = usePathname();
  return (
    <>
      {userLinks.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />

            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

const adminLinks = [
  { name: "Home", href: "/admins/dashboard", icon: HomeIcon },
  {
    name: "Bookings",
    href: "/admins/dashboard/bookings",
    icon: BookmarkIcon,
  },
  {
    name: "Desks",
    href: "/admins/dashboard/desks",
    icon: Squares2X2Icon,
  },
  {
    name: "Support",
    href: "/admins/dashboard/support",
    icon: InformationCircleIcon,
  },
];

function AdminNavLinks() {
  const pathname = usePathname();
  return (
    <>
      {adminLinks.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />

            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

const superAdminLinks = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Bookings",
    href: "/superAdmins/dashboard/bookings",
    icon: BookmarkIcon,
  },
  {
    name: "Desks",
    href: "/superAdmins/dashboard/floors",
    icon: Squares2X2Icon,
  },
  {
    name: "Users",
    href: "/superAdmins/dashboard/users",
    icon: UserGroupIcon,
  },

  {
    name: "Support",
    href: "/superAdmins/dashboard/support",
    icon: InformationCircleIcon,
  },
];
function SuperAdminNavLinks() {
  const pathname = usePathname();
  return (
    <>
      {superAdminLinks.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />

            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

export { UserNavLinks, AdminNavLinks, SuperAdminNavLinks };
