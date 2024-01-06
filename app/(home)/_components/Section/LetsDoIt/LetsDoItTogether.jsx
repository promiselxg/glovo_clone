import { Button } from "@/components/ui/button";
import Image from "next/image";

const LetsDoItTogether = () => {
  return (
    <>
      <div className="w-full flex lets_do_it relative ">
        <div className="mx-auto w-[1200px]">
          <div className="flex w-full">
            <div className="absolute left-[47%] -translate-y-[90%]">
              <Image
                src="https://glovoapp.com/images/corporate-container/together.svg"
                width={100}
                height={80}
                alt=""
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl font-bold py-5">Let’s do it together</h1>
              <div className="w-full grid grid-cols-3 py-8">
                <div className="w-full max-w-[350px] flex justify-center items-center text-center flex-col">
                  <Image
                    src="https://glovoapp.com/images/corporate-container/rider-image.png"
                    width={250}
                    height={100}
                    alt=""
                  />
                  <h1 className="py-3 text-3xl font-bold">Become a rider</h1>
                  <p className="text-[16px] pb-8 h-24 font-semibold leading-tight">
                    Enjoy flexibility, freedom and competitive earnings by
                    delivering through Glovo.
                  </p>
                  <Button className="max-w-[308px] w-fit bg-[--bg-green] rounded-[24px] text-[20px] h-[48px] font-bold border-none outline-none hover:bg-[--bg-green-hover] px-10">
                    Register here
                  </Button>
                </div>
                <div className="w-full max-w-[350px] flex justify-center items-center text-center flex-col">
                  <Image
                    src="https://glovoapp.com/images/corporate-container/partners-image.png"
                    width={250}
                    height={100}
                    alt=""
                  />
                  <h1 className="py-3 text-3xl font-bold">Become a partner</h1>
                  <p className="text-[16px] pb-8 h-24 font-semibold leading-tight">
                    Grow with Glovo! Our technology and user base can help you
                    boost sales and unlock new opportunities!
                  </p>
                  <Button className="max-w-[308px] w-fit bg-[--bg-green] rounded-[24px] text-[20px] h-[48px] font-bold border-none outline-none hover:bg-[--bg-green-hover] px-10">
                    Register here
                  </Button>
                </div>
                <div className="w-full max-w-[350px] flex justify-center items-center text-center flex-col">
                  <Image
                    src="https://glovoapp.com/images/corporate-container/careers-image.png"
                    width={250}
                    height={100}
                    alt=""
                  />
                  <h1 className="py-3 text-3xl font-bold">Careers</h1>
                  <p className="text-[16px] pb-8 h-24 font-semibold leading-tight">
                    Ready for an exciting new challenge? If you’re ambitious,
                    humble, and love working with others, then we want to hear
                    from you!
                  </p>
                  <Button className="max-w-[308px] w-fit bg-[--bg-green] rounded-[24px] text-[20px] h-[48px] font-bold border-none outline-none hover:bg-[--bg-green-hover] px-10">
                    Register here
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsDoItTogether;
