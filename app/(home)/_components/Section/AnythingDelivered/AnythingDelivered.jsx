import { Button } from "@/components/ui/button";
import Image from "next/image";

const AnythingDelivered = () => {
  return (
    <>
      <section className="h-fit bg-white">
        <div className="mx-auto w-[1200px] pt-10">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-[45px] pb-8 font-bold">Anything delivered</h1>
            <div className="w-full grid grid-cols-3 gap-5 place-content-center place-items-center">
              <div className="flex justify-center text-center flex-col  leading-normal w-[356px]">
                <div className="w-full justify-center text-center  flex">
                  <Image
                    src="https://glovoapp.com/images/why-glovo/restaurants.svg"
                    width={200}
                    height={208}
                    alt=""
                  />
                </div>
                <h1 className="text-[20px] font-bold pt-2 leading-[1.2]">
                  Your city&apos;s top restaurants
                </h1>
                <div className="flex text-center justify-center flex-col w-full items-center">
                  <p className="text-[16px] font-[400] leading-relaxed py-2">
                    With a great variety of restaurants you can order your
                    favourite food or&nbsp;
                    <mark className="bg-[#FFC244FF] rounded-full px-[4px] leading-6 text-[10px] w-fit">
                      explore new restaurants explore!
                    </mark>
                  </p>
                </div>
              </div>

              <div className="flex justify-center text-center flex-col  leading-normal w-[356px]">
                <div className="w-full justify-center text-center  flex">
                  <Image
                    src="https://glovoapp.com/images/why-glovo/delivery.svg"
                    width={200}
                    height={208}
                    alt=""
                  />
                </div>
                <h1 className="text-[20px] font-bold pt-2 leading-[1.2]">
                  Fast delivery
                </h1>
                <div className="flex text-center justify-center flex-col w-full items-center">
                  <p className="text-[16px] font-[400] leading-relaxed py-2">
                    Like a flash! Order or send anything in your city and
                  </p>
                  <mark className="bg-[#FFC244FF] rounded-full px-[4px] leading-6 text-[10px] w-fit">
                    receive it in minutes
                  </mark>
                </div>
              </div>

              <div className="flex justify-center text-center flex-col  leading-normal w-[350px]">
                <div className="w-full justify-center text-center  flex">
                  <Image
                    src="https://glovoapp.com/images/why-glovo/groceries.svg"
                    width={200}
                    height={208}
                    alt=""
                  />
                </div>
                <h1 className="text-[20px] font-bold pt-2 leading-[1.2]">
                  Groceries delivery &amp; more
                </h1>
                <div className="flex text-center justify-center flex-col w-full items-center">
                  <p className="text-[16px] font-[400] leading-relaxed py-2">
                    Find anything you need! From
                    <mark className="bg-[#FFC244FF] rounded-full px-[4px] leading-6 text-[10px] w-fit">
                      supermarkets to shops, pharmacies to florists
                    </mark>
                    — if it's in your city order it and receive it.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mx-auto py-20">
              <Button className="max-w-[308px] w-fit bg-[--bg-green] rounded-[24px] text-md h-[48px] font-bold border-none outline-none hover:bg-[--bg-green-hover] px-10">
                Explore stores around you
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnythingDelivered;
