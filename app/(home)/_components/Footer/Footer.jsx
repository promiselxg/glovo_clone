import Image from "next/image";
import { Links } from "../Links/Links";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Footer = () => {
  return (
    <>
      <div className="w-full flex footer relative py-10">
        <div className="mx-auto w-[1200px]">
          <Image
            src="https://glovoapp.com/images/glovo-white.svg"
            width={100}
            height={80}
            alt="footer"
          />
          <div className="w-full grid grid-cols-4 gap-5 text-white py-5">
            <div className="w-full mx-auto max-w-[300px]">
              <h1 className="font-bold text-[20px]">
                Let&apos;s do it together
              </h1>
              <ul className="leading-[2.2]">
                <li>
                  <Links url="/" label="Careers" />
                </li>
                <li>
                  <Links url="/" label="Glovo for Partners" />
                </li>
                <li>
                  <Links url="/" label="Couriers" />
                </li>
                <li>
                  <Links url="/" label="Glovo Business" />
                </li>
              </ul>
            </div>
            <div className="w-full mx-auto max-w-[300px]">
              <h1 className="font-bold text-[20px]">Links of interest</h1>
              <ul className="leading-[2.2]">
                <li>
                  <Links url="/" label="About us" />
                </li>
                <li>
                  <Links url="/" label="FAQ" />
                </li>
                <li>
                  <Links url="/" label="Glovo Prime" />
                </li>
                <li>
                  <Links url="/" label="Blog" />
                </li>
                <li>
                  <Links url="/" label="Contact us" />
                </li>
                <li>
                  {" "}
                  <Links url="/" label="Security" />
                </li>
              </ul>
            </div>
            <div className="w-full mx-auto max-w-[300px]">
              <h1 className="font-bold text-[20px]">Follow us</h1>
              <ul className="leading-[2.2]">
                <li>
                  <Links url="/" label="Facebook" />
                </li>
                <li>
                  <Links url="/" label="Twitter" />
                </li>
                <li>
                  <Links url="/" label="Instagram" />{" "}
                </li>
              </ul>
            </div>
            <div className="w-full mx-auto max-w-[300px]">
              <ul className="leading-[2.2]">
                <li className="py-2">
                  <Image
                    src="https://glovoapp.com/images/app_store/app-store-button.svg"
                    width={130}
                    height={80}
                    alt=""
                  />
                </li>
                <li className="py-2">
                  <Image
                    src="https://glovoapp.com/images/google_play/google-play-button.svg"
                    width={130}
                    height={80}
                    alt=""
                  />
                </li>
                <li>
                  <Links
                    url="/"
                    label="Terms &amp; Condition"
                    className="uppercase text-sm"
                  />
                </li>
                <li>
                  <Links
                    url="/"
                    label="privacy Policy"
                    className="uppercase text-sm"
                  />
                </li>
                <li>
                  <Links
                    url="/"
                    label="Cookies policy"
                    className="uppercase text-sm"
                  />
                </li>
                <li>
                  <Links
                    url="/"
                    label="Compliance"
                    className="uppercase text-sm"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            <Select>
              <SelectTrigger className="w-[200px] p-5 text-base text-white font-bold">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">English</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
