import React from "react";
import { Button, Typography } from "../../theme/themeRegistry";
const ContactBanner = () => {
  return (
    <>
      <div
        className="hidden lg:flex min-w-screen w-full -mt-24 items-center text-center  relative  "
        style={{
          background: ` url(/banner.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:mt-[20%] xl:mt-[10%] flex flex-col gap-10 pb-16 md:px-20 justify-center items-center w-full">
          <div className="text-white md:mt-12 flex flex-col gap-10 ">
            <Typography
              variant="h1"
              className="text-[4rem] leading-[0.24rem] font-semibold text-center"
            >
              Get in touch with us
            </Typography>
            <Typography className="mt-3 px-2  text-[2.25rem] leading-[3.75rem] font-normal text-center">
              We’re ready to help you tackle what’s holding you back
            </Typography>
          </div>
          <div>
            <Button className="bg-[#212D3F] text-xl leading-[1.094rem]  rounded-3xl normal-case">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-10 lg:hidden -mt-16 md:-mt-24  bg-bottom  w-screen  items-center pt-24 pb-20 px-4"
        style={{
          background: `url(/banner_xs.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-white md:mt-12">
          <Typography
            variant="h1"
            className="text-[1.8rem] font-semibold text-center"
          >
            Get in touch with us
          </Typography>
          <Typography className="mt-3 px-2  text-[.875rem] font-normal text-center">
            We’re ready to help you tackle what’s holding you back
          </Typography>
        </div>
        <div>
          <Button className="bg-[#212D3F] text-sm  rounded-3xl normal-case">
            Book a Call
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
