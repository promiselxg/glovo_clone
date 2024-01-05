import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
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
              <Button className="bg-[--bg-green] border-none rounded-[24px] text-[14px] font-bold h-[44px] leading-[1.4px] shadow-md flex items-center justify-center relative min-w-[100%] capitalize text-white hover:bg-[--bg-green-hover] ">
                get Started
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
