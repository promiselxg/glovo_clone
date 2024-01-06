import React from "react";
import Hero from "./_components/Hero/Hero";
import TopResturants from "./_components/Section/TopResturants/TopResturants";
import AnythingDelivered from "./_components/Section/AnythingDelivered/AnythingDelivered";
import Countries from "./_components/Section/Countries/Countries";
import DownloadApp from "./_components/Section/DownloadApp/DownloadApp";
import LetsDoItTogether from "./_components/Section/LetsDoIt/LetsDoItTogether";

const page = () => {
  return (
    <>
      <div className="w-full relative">
        <Hero />
        <TopResturants />
        <AnythingDelivered />
        <Countries />
        <DownloadApp />
        <LetsDoItTogether />
      </div>
    </>
  );
};

export default page;
