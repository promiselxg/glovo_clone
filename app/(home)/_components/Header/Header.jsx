"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Modal from "@/components/ui/modal";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="w-full bg-[--bg-yellow] sticky top-0 z-10">
        <div className="mx-auto w-[1100px] ">
          <div className="flex items-center justify-between h-[100px]">
            <div>
              <Image
                src="/img/logo.svg"
                width={120}
                height={80}
                alt="Glovo Logo"
              />
            </div>
            <div>
              <Button
                className="bg-[--bg-green] border-none rounded-[24px] text-[14px] font-bold h-[44px] leading-[1.4px] shadow-md flex items-center justify-center relative min-w-[100%] capitalize text-white hover:bg-[--bg-green-hover]"
                onClick={() => setOpen(!open)}
              >
                get Started
              </Button>
            </div>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed w-full bg-[rgba(0,0,0,0.5)] top-0 bottom-0 z-40 h-full delay-75 transition-all overflow-hidden">
          <Modal open={open} setOpen={setOpen} />
        </div>
      )}
    </>
  );
};

export default Header;
