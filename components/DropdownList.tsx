"use client";

import { useState } from "react";
import Image from "next/image";

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <Image
              src="/assets/icons/hamburger.svg"
              alt="menu"
              height={14}
              width={14}
            />
            <span>Most recent</span>
          </figure>
          <Image
            alt="arrow-down"
            src="/assets/icons/arrow-down.svg"
            width={20}
            height={20}
          />
        </div>
        {isOpen && (
          <ul className="dropdown">
            {["Most recent", "Most popular", "Most commented"].map((item) => (
              <li className="list-item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownList;
