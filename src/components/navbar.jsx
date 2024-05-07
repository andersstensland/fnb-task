import React from "react";
import Link from "next/link";
import FjordLineImage from "../../public/Fjordline_logo.svg";
import Image from "next/image";

export default function Navbar() {
  // add tailwind
  return (
    <nav className="w-full bg-red-600">
      <ul className="flex space-between">
        <li className="w-full h-full">
          <Link href="/" className="">
            <Image src={FjordLineImage} alt="Fjordline logo" />
          </Link>
        </li>
        <li className="w-full flex items-center text-white">
          <a className="flex justify-items-end">Cabin 8316</a>
        </li>
      </ul>
    </nav>
  );
}
