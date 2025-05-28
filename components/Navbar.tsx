"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const user = {};
const Navbar = () => {
  const router = useRouter();
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={90}
            height={30}
          />
        </Link>

        {user && (
          <figure>
            <button onClick={() => router.push("/profile/12345")}>
              <Image
                alt="user-image"
                src="/assets/images/dummy.jpg"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>

            <button className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
