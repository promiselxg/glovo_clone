import Image from "next/image";
import Link from "next/link";

const { Button } = require("@/components/ui/button");

const ButtonLink = ({ label }) => {
  return (
    <>
      <Button className="bg-[#fff3daff] text-[#000000ff] hover:bg-[#fff3daff] rounded-[24px] px-[38px] py-[26px] font-bold">
        {label}
      </Button>
    </>
  );
};

const Links = ({ url, label, ...children }) => {
  return (
    <>
      <Link href={url} {...children}>
        {label}
      </Link>
    </>
  );
};

const ButtonWithImg = ({ url, label, ...children }) => {
  return (
    <>
      <Button
        variant="outline"
        className="flex rounded-[20px] h-10 mb-4"
        {...children}
      >
        <div className=" flex">
          <Image src={url} width={25} height={25} alt="google" />
        </div>
        <div className="-ml-5 w-full text-[14px] font-bold">{label}</div>
      </Button>
    </>
  );
};

export { ButtonLink, Links, ButtonWithImg };
