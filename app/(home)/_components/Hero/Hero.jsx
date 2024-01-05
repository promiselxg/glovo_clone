import { FiFlag, FiNavigation } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <section className="hero_section w-full items-center  h-[550px] bg-[--bg-yellow]">
        <div className="mx-auto w-[1100px] items-center">
          <div className="flex items-center justify-between">
            <div className="w-[40%]">
              <video
                src="/video/address-container-animation.webm"
                autoPlay
                loop
                muted
              />
            </div>
            <div className="w-[60%] justify-center flex flex-col text-center leading-relaxed items-center">
              <h1 className="text-6xl text-center pb-5 font-bold max-w-[15ch]">
                Food delivery and more
              </h1>
              <p className="py-3 text-md">
                Groceries, shops, pharmacies, anything!
              </p>
              <div className="w-[80%] bg-white mx-auto justify-center text-center flex items-center rounded rounded-l-lg rounded-r-lg overflow-hidden border-none">
                <div className="w-full flex justify-between items-center text-md cursor-default">
                  <span className="w-[10%] flex items-center  bg-[--bg-green] text-white p-5">
                    <FiFlag />
                  </span>
                  <div className="text-[#ccc] bg-white flex px-4 w-full justify-between font-normal text-[14px]">
                    What&apos;s your address?
                    <span className="flex items-center gap-2 text-[--bg-green] font-semibold text-md">
                      <FiNavigation /> use current location
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
