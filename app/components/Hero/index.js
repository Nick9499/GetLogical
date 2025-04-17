"use client";
import React from "react";
import { Avatar, Card, CardBody, Typography } from "../../theme/themeRegistry";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const HeroHome = () => {
  return (
    <>
      <div
        className="hidden lg:flex min-w-screen w-full -mt-24  md:items-center  relative  "
        style={{
          background: ` url(/banner.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-[15%]  max-w-[80vw] flex flex-col gap-8 lg:mt-[20%] xl:mt-[10%]   ">
          <div className=" text-white">
            <Typography variant="h1" className="font-bold text-[4rem]  ">
              Elevate Your Business with UpSales.
            </Typography>
            <Typography className="mt-2 text-2xl font-light ">
              UpSales is committed to supporting existing customers while also
              strategically engaging prospective clients to encourage
              conversions.
            </Typography>
          </div>
          <div className="pb-10">
            <Card
              className="mt-6 w-full rounded-[2.15rem] border border-white backdrop-blur-sm"
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
                      <FaStar
                        key={index}
                        className="text-[#FBC02D] w-[.35rem] h-[.35rem] "
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2  text-white">
                  <Typography className="font-semibold text-[1.75rem] leading-[1.875rem] ">
                    Omar Eltobgui
                  </Typography>
                  <Typography className="font-normal text-[1.15rem] leading-[1.875rem] ">
                    CEO/Founder OFactor Media Group
                  </Typography>
                  <Typography className="font-normal text-[1.15rem] ">
                    {`"Switching to UpSales was the best thing we ever did. Their
                    customer service and sales department are second to none.
                    It’s true what they say, New Yorkers have that “X” factor."`}
                  </Typography>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="px-[2%]  w-[40rem] flex  items-center">
          <Card
            className="mt-6 w-full rounded-[2.25rem] border text-white border-white backdrop-blur-sm"
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
              <div className="relative w-full h-full">
                <Image src="/growth_vector.svg" fill alt="" />
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
      <div
        className="flex flex-col lg:hidden -mt-16 md:-mt-24  bg-bottom  w-screen  items-center pt-24 pb-20 px-4"
        style={{
          background: `url(/banner_xs.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" text-white md:mt-12">
          <Typography
            variant="h1"
            className="text-[1.8rem] font-semibold text-center"
          >
            Elevate Your Business with UpSales.
          </Typography>
          <Typography className=" mt-3 px-2  text-[.875rem] font-normal text-center ">
            UpSales is committed to supporting existing customers while also
            strategically engaging prospective clients to encourage conversions.
          </Typography>
        </div>
        <div className="flex items-center">
          <Card
            className="mt-6 w-full md:w-[40rem] rounded-xl border border-white backdrop-blur-sm"
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
                    <FaStar
                      key={index}
                      className="text-[#FBC02D] w-[.35rem] h-[.35rem] "
                    />
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
                  {`"Switching to UpSales was the best thing we ever did. Their
                  customer service and sales department are second to none. It’s
                  true what they say, New Yorkers have that “X” factor."`}
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="">
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
              <div className="relative w-full h-full">
                <Image src="/growth_vector.svg" fill alt="" />
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
