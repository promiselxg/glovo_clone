import { FiX } from "react-icons/fi";
import { Button } from "./button";
import { ButtonWithImg } from "@/app/(home)/_components/Links/Links";

const Modal = ({ open, setOpen }) => {
  return (
    <>
      <div className="mx-auto w-[30%] bg-white my-10 py-14 rounded-[15px] h-[calc(100vh-80px)] relative">
        <div className="absolute top-5 right-5">
          <FiX
            className="text-3xl text-[#777] hover:text-[#000] transition-all delay-75 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex justify-center text-center flex-col w-full">
          <div className="pb-5">
            <h1 className="text-6xl font-bold pb-3">Welcome</h1>
            <p className="text-[#777] text-sm font-semibold">
              Let&apos;s start with your phone number
            </p>
          </div>
          <div className="flex justify-center gap-3 w-ful">
            <div className="flex p-2 border-[2px] rounded-[8px] flex-col justify-start text-left border-[#ddd] w-[20%]">
              <span className="text-[12px] ml-2">Prefix</span>
              <select
                name=""
                id=""
                className="bg-transparent border-0 outline-none w-full cursor-pointer"
              >
                <option value="">+234</option>
              </select>
            </div>
            <div className="p-5 border-[2px] rounded-[8px] border-[#ddd] w-[56%]">
              <input
                type="text"
                name=""
                id=""
                placeholder="Phone number"
                className="bg-transparent border-0 outline-none w-full text-[--bg-green]"
              />
            </div>
          </div>
          <Button className="w-[80%] mx-auto rounded-[15px] text-white font-bold mt-5 bg-[--bg-green] hover:bg-[--bg-green-hover]">
            Continue
          </Button>
          <div className="border-b border-[#ccc] w-[80%] mx-auto items-center text-center flex justify-center relative h-1 leading-none my-6">
            <span className="bg-white top-0 absolute px-5 text-[11px] flex items-center text-[#777] font-normal">
              or with
            </span>
          </div>
          <div className="w-[80%] mx-auto flex flex-col">
            <ButtonWithImg
              url="https://glovoapp.com/images/icons/social/google.svg"
              label="Google"
            />
            <ButtonWithImg
              url="https://glovoapp.com/images/icons/social/facebook.svg"
              label="Facebook"
            />
            <ButtonWithImg url="/img/download.svg" label="Email" />
          </div>
          <div className="w-[80%] flex justify-center text-center items-center mx-auto mt-6">
            <p className="text-[12px] text-[rgba(0,0,0,0.5)] font-normal">
              By creating an account, you automatically accept our{" "}
              <u>Terms of service</u>, <u>Privacy Policy</u> and{" "}
              <u>Cookies Policy</u>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
