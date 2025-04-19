import React from "react";
import { Button, Typography } from "../../theme/themeRegistry";
const ContactBanner = () => {
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
        <Typography>Get in touch with us</Typography>
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
