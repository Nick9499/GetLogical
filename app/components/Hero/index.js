"use client";
import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Typography,
} from "../../theme/themeRegistry";
import { FaStar } from "react-icons/fa";

const HeroHome = () => {
  return (
    <>
      <div
        className="hidden md:flex bg-contain bg-bottom h-[80vh] w-full  items-center -mt-24  pl-24 relative "
        style={{
          background: ` url(/banner.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class=" text-white">
          <Typography variant="h1" className="font-semibold">
            Elevate Your Business
            <br />
            with Logical.
          </Typography>
          <Typography className="mt-2 text-lg w-2/3 mb-8">
            Let us turn every call into your next big win
          </Typography>
        </div>
      </div>
      <div
        className="flex flex-col md:hidden -mt-16  bg-bottom  w-screen  items-center pt-24 pb-20 px-4"
        style={{
          background: `url(/banner_xs.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class=" text-white">
          <Typography
            variant="h1"
            className="text-[1.8rem] font-semibold text-center"
          >
            Elevate Your Business with Logical.
          </Typography>
          <Typography className=" mt-3 px-2  text-[.875rem] font-normal text-center ">
            Logicall is committed to supporting existing customers while also
            strategically engaging prospective clients to encourage conversions.
          </Typography>
        </div>
        <div>
          <Card
            className="mt-6 w-full rounded-xl border border-white backdrop-blur-sm"
            style={{
              background:
                "linear-gradient(92deg, rgba(255, 255, 255, 0.30) 10.4%, rgba(255, 255, 255, 0.20) 88.1%)",
              boxShadow: "0px 1.693px 1.693px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <CardBody className="flex gap-2 items-center">
              <div className="flex flex-col gap-2">
                <Avatar src="/omar.svg" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar className="text-[#FBC02D] w-[.35rem] h-[.35rem] " />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2  text-white">
                <Typography className="font-semibold text-[.875rem] leading-[.875rem] ">
                  Omar Eltobgui
                </Typography>
                <Typography className="font-normal text-[.5rem] leading-[.875rem] ">
                  CEO/Founder OFactor Media Group
                </Typography>
                <Typography className="font-normal text-[.5rem] leading-[.875rem]">
                  "Switching to Logicall was the best thing we ever did. Their
                  customer service and sales department are second to none. It’s
                  true what they say, New Yorkers have that “X” factor."
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card
            className="mt-6 w-full rounded-[1.25rem] border text-white border-white backdrop-blur-sm"
            style={{
              background:
                "linear-gradient(92deg, rgba(255, 255, 255, 0.30) 10.4%, rgba(255, 255, 255, 0.20) 88.1%)",
              boxShadow: "0px 1.693px 1.693px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <CardBody className="flex flex-col gap-3 ">
              <div>
                <Typography className="text-base font-semibold">24%</Typography>
                <Typography className="text-[.5rem] leading-[.875rem] font-light ">
                  Conversion Rate
                </Typography>
              </div>
              <div>
                <img src="/growth_vector.svg" className="w-full h-full" />
              </div>
              <div className="flex flex-col items-end">
                <Typography className="text-base font-semibold">
                  $180
                </Typography>
                <Typography className="text-[.5rem] leading-[.875rem] font-light">
                  Average Order Value
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HeroHome;
