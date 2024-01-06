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
export { ButtonLink, Links };
