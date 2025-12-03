"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link
} from "@nextui-org/react";

export default function MainNavbar() {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200"
    >
      {/* Logo */}
      <NavbarBrand>
        <Link href="/" className="text-2xl font-serif tracking-wide text-gray-800">
          PPHU <span className="text-yellow-700 font-bold">APLIKA</span>
        </Link>
      </NavbarBrand>

      {/* Menu */}
      <NavbarContent className="hidden md:flex gap-8" justify="center">
        <NavbarItem>
          <Link href="#uslugi" className="text-gray-700 hover:text-yellow-700">
            Usługi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#realizacje" className="text-gray-700 hover:text-yellow-700">
            Realizacje
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#o-nas" className="text-gray-700 hover:text-yellow-700">
            O firmie
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#kontakt" className="text-gray-700 hover:text-yellow-700">
            Kontakt
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
