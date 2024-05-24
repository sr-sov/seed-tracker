"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3 border-solid border-b-2 border-slate-200 p-4 bg-green-200">
      <Link href="/" className="flex gap-2 flex-center">
        <Image 
          src="/assets/images/mtsc_logo.png"
          width={162}
          height={45}
          alt="MSFTC Logo"
          className="object-contain"
        />
      </Link>
      
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
          <div className="flex gap-3 md:gap-5">
            <Link href="/seed-brochure"
            className="black_btn">
              Seed Tracking System
            </Link>

            <Link href="/suppliers"
            className="black_btn">
              Suppliers
            </Link>

            <Link href="/sdm"
            className="black_btn">
              Seed Maps
            </Link>

            <Link href="/about"
            className="black_btn">
              About Us
            </Link>

            <Link href="/contact"
            className="black_btn">
              Contact
            </Link>
          </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
          <div className="flex">
            <Image
            src='/assets/icons/cart.png'
            width={30}
            height={30}
            alt="Facebook Logo"
            />
            <Image
              src="/assets/icons/menu.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown z-20">
                <Link
                  href="/seed-brochure"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Brochure
                </Link>
                <Link
                  href="/about"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
      </div>

    </nav>
  )
}

export default Nav