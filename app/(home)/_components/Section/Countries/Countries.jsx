import Image from "next/image";
import { ButtonLink } from "../../Links/Links";

const countryList = [
  {
    country: "Spain",
  },
  {
    country: "Italy",
  },
  {
    country: "Ukraine",
  },
  {
    country: "Romania",
  },
  {
    country: "Georgia",
  },
  {
    country: "Portugal",
  },
  {
    country: "Poland",
  },
  {
    country: "Morocco",
  },
  {
    country: "Kazakhstan",
  },
  {
    country: "Croatia",
  },
  {
    country: "Kenya",
  },
  {
    country: "Côte D'Ivoire",
  },
  {
    country: "Serbia",
  },
  {
    country: "Moldova",
  },
  {
    country: "Uganda",
  },
  {
    country: "Kyrgyzstan",
  },
  {
    country: "Bosnia and Herzegovina",
  },
  {
    country: "Bulgaria",
  },
  {
    country: "Ghana",
  },
  {
    country: "Montenegro",
  },
  {
    country: "Slovenia",
  },
  {
    country: "Nigeria",
  },
  {
    country: "Armenia",
  },
  {
    country: "Andorra",
  },
  {
    country: "Tunisia",
  },
];
const Countries = () => {
  return (
    <>
      <section className="w-full h-fit countries flex bg-[--bg-yellow] ">
        <div className="mx-auto w-[1100px]">
          <div className="flex justify-center items-center text-center flex-col py-10">
            <div className="flex">
              <Image
                src="https://glovoapp.com/images/landing/countries.svg"
                width={130}
                height={100}
                alt=""
              />
            </div>
            <h1 className="py-8 text-4xl font-bold">
              Countries where we deliver
            </h1>
            <div className="flex w-full  justify-center gap-2 flex-wrap gap-y-3">
              {countryList?.map((list, i) => {
                return <ButtonLink label={list?.country} key={i} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Countries;
