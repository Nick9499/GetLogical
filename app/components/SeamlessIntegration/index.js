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
        className=" text-white lg:flex   text-center lg:text-left relative overflow-hidden mt-10"
      >
        <div
          className="flex flex-col items-center lg:items-start lg:w-[70vw] xl:w-[60vw] gap-3 px-4
        py-8 lg:py-24 lg:px-10"
        >
          <Typography className="uppercase text-xs md:text-base font-normal tracking-wide">
            Seamless Integration with Your Store
          </Typography>
          <h2 className="text-[1.625rem] lg:text-[3.75rem] font-semibold">
            Connect Your Brand
            <br />
            in Minutes
          </h2>
          <p className="text-xs lg:text-xl font-normal">
            Our unique software connects to your store quickly and easily with
            the help of our checkout and CRM partners. For all other platforms,
            talk to us about our custom integration options.
          </p>
          <Button
            className=" hidden lg:mt-10 lg:flex normal-case lg:text-xl font-medium bg-white
            text-[#033474] rounded-[2rem] "
          >
            Contact Us
          </Button>
        </div>
        <div className="hidden lg:flex  ">
          <img className="w-full h-full" src="/integration_md.svg" />
        </div>
        <div className="mt-10 flex lg:hidden">
          <img className="w-full" src="/integration_sm.svg" />
        </div>
        <Button
          className="-mt-20 lg:hidden normal-case text-sm lg:text-xl font-medium bg-white 
         text-[#033474] rounded-[2rem] "
        >
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default SeamLessIntegration;
