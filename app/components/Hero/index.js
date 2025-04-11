"use client";
import React from "react";
import { Button, Typography } from "../../theme/themeRegistry";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
// import { InputWithButton } from "../Input";

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
        className="flex md:hidden -mt-16  bg-bottom  w-screen  items-center pt-24 pb-20  px-8"
        style={{
          background: `url(/banner.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div class=" text-white">
          <Typography variant="h1" className="text-[2.375rem] font-semibold">
            Elevate Your Business with Logical.
          </Typography>
          <Typography className=" mt-5  text-lg  ">
            Let us turn every call into your next big win
          </Typography>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <Button className="mt-5 flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72h-2.69a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroHome;
