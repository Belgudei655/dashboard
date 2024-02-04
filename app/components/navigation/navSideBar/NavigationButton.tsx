// Importing useRouter from next/navigation
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationButtonProps {
  iconBaseName: string;
  route: string;
  label: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  iconBaseName,
  route,
  label,
}) => {
  // Using usePathname() instead of router.pathname
  const currentPath = usePathname();

  // Set isActive to true if currentPath is the route or if it's the default route ("/" or "")
  const isActive =
    currentPath === route ||
    (route === "/dashboard" && (currentPath === "" || currentPath === "/"));

  // Dynamically generating the iconPath based on the isActive condition
  const iconPath = isActive
    ? `/icons/active_${iconBaseName}.svg`
    : `/icons/inactive_${iconBaseName}.svg`;

  return (
    <Link href={route}>
      <div className="flex flex-row relative items-center h-9">
        <Image
          src={iconPath}
          alt={label}
          width={50}
          height={50}
          className="w-5 h-5"
        />
        <div
          className={`flex items-center ml-3 ${
            isActive ? "text-blue-500" : "text-neutral-500"
          } text-sm font-normal font-[Open Sans] leading-normal tracking-wide`}
        >
          {label}
        </div>
        {/* Add blue box when isActive is true */}
        {isActive && (
          <div className="w-0.5 h-full absolute top-0 right-0 bg-blue-500"></div>
        )}
      </div>
    </Link>
  );
};

export default NavigationButton;
