import React from "react";
import Link from "next/link";
import FjordLineImage from "../../public/Fjordline_logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-customRed p-2">
      <ul className="flex justify-between items-center">
        <li className="w-full h-full">
          <Link href="/">
            <Image
              src={FjordLineImage}
              alt="Fjordline logo"
              width={150}
              height={50}
            />
          </Link>
        </li>
        <li className="text-white w-1/3 md:mr-2 text-end">
          <a className="">Cabin 8316</a>
        </li>
      </ul>
    </nav>
  );
}
