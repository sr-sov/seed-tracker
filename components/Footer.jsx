"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <footer className="w-4/5 mx-auto py-2 md:mt-12 text-sm">
        <hr className="h-px bg-gray-500 opacity-30 border-0 mb-4" />
        <div className="flex items-center mx-auto text-gray-600 container justify-center gap-2 py-2">
          <div>
              <span className="font-normal">
              © Copyright 2024, All Rights Reserved{' '}
              </span>
          </div>
          <Image
          src='/assets/images/cfnr.png'
          width={30}
          height={30}
          alt="Instagram Logo"
          />
          <Image
          src='/assets/images/irnr.png'
          width={30}
          height={30}
          alt="Instagram Logo"
          />
          <Image
          src='/assets/images/uplb.png'
          width={30}
          height={30}
          alt="Instagram Logo"
          />
        </div>
    </footer>
  )
}

export default Footer