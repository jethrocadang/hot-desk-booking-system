import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { lusitana, inter } from "@/app/ui/fonts";
import Image from "next/image";

export default function CompanyLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none text-white`}
    >
        <div className="h-50 w-50 ">
            <Image
            src="/LOGO.png"
            width={40}
            height={40}
            alt="logo"
            />
        </div>
        <p className="text-xl antialiased font-extrabold ml-2	">DeskFlow</p>

    </div>
  );
}
