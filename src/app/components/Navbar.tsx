import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between py-3 max-w-7xl m-auto items-center">
        <Link href={"/"}>
          <Image
            className="w-40"
            src="/logo.webp"
            alt="Logo"
            width={160}
            height={0}
          />
        </Link>

        <nav>
          <ul className="flex gap-5">
            <li className="hover:text-button duration-500 ease-in-out">
              <Link href={"#"}>Home</Link>
            </li>
            <li className="hover:text-button duration-500 ease-in-out">
              <Link href={"#"}>Docs</Link>
            </li>
            <li className="hover:text-button duration-500 ease-in-out">
              <Link href={"#"}>FAQ</Link>
            </li>
          </ul>
        </nav>

        <button className="text-gray-600 font-thin bg-button hover:bg-layer hover:text-text custom-border duration-500 ease-in-out px-4 py-2 rounded-lg">
          Launch Dapp
        </button>
      </div>
    </div>
  );
};

export default Navbar;
