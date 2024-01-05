import Image from "next/image";

const ImageWrapper = ({ img, label }) => {
  return (
    <div className="relative cursor-pointer w-fit text-center max-w-[208px] justify-center flex flex-col items-center">
      <Image
        width={400}
        height={121}
        src={img}
        alt=""
        style={{ maskImage: "url('/img/partners-mask.svg')" }}
        className="top_partners"
      />
      <h1 className="bg-[--bg-yellow] text-black inline text-[16px] font-bold leading-snug px-5 py-1 rounded-[5px] w-fit -top-[13px] relative">
        {label}
      </h1>
    </div>
  );
};

export default ImageWrapper;
