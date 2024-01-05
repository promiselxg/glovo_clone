import React from "react";
import Hero from "./_components/Hero/Hero";
import TopResturants from "./_components/Section/TopResturants/TopResturants";

const page = () => {
  return (
    <>
      <div className="w-full relative">
        <Hero />
        <TopResturants />
      </div>
    </>
  );
};

export default page;
