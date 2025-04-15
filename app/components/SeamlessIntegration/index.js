/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Button, Chip, Typography } from "../../theme/themeRegistry";
import { Link } from "react-scroll";

const SeamLessIntegration = () => {
  return (
    <div id="integrations">
      <section
        style={{
          background:
            "linear-gradient(0deg, #F57E1C 0%, #F57E1C 100%), url(<path-to-image>) lightgray -415.694px 0px / 321.704% 143.478% no-repeat",
        }}
        className=" text-white flex md:px-10 py-12 text-center md:text-left relative overflow-hidden mt-10"
      >
        <div className="flex flex-col items-center md:items-start md:w-[80vw] gap-3 px-4">
          <Typography className="uppercase text-xs md:text-base font-normal tracking-wide">
            Seamless Integration with Your Store
          </Typography>
          <h2 className="text-[1.625rem] md:text-[3.75rem] font-semibold">
            Connect Your Brand
            <br />
            in Minutes
          </h2>
          <p className="text-xs md:text-xl font-normal">
            Our unique software connects to your store quickly and easily with
            the help of our checkout and CRM partners. For all other platforms,
            talk to us about our custom integration options.
          </p>
          <Button className=" hidden md:flex normal-case md:text-xl font-medium bg-white  text-[#033474] rounded-[2rem] ">
            Contact Us
          </Button>
        </div>
        <div
          className="hidden md:flex bg-cover bg-no-repeat "
          style={{ backgroundImage: "url('/integration_md_bg.svg')" }}
        >
          <img className="w-full" src="/integration_md.svg" />
        </div>
        <div className="mt-10 flex md:hidden">
          <img className="w-full" src="/integration_sm.svg" />
        </div>
        <Button className="-mt-20 md:hidden normal-case text-sm md:text-xl font-medium bg-white  text-[#033474] rounded-[2rem] ">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default SeamLessIntegration;
