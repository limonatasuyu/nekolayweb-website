"use client";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import Image from "next/image";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-center gap-2 mb-4 text-white">
      <div className="flex items-center justify-between min-w-[400px] w-min">
        <Image width={200} height={40} src="/Logo.png" alt="Logo" />
        <Hamburger toggled={open} toggle={setOpen} />
      </div>
    </div>
  );
};
