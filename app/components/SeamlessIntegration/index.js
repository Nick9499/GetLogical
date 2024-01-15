/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Button, Chip, Typography } from "../../theme/themeRegistry";
import { Link } from "react-scroll";

const SeamLessIntegration = () => {
  return (
    <div id="integrations">
      <div
        className="hidden  ml-24 mt-10 lg:flex  lg:flex-row px-10 py-5"
        style={{
          background: `url('/bg-blue.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div className="mt-20 px-20 max-w-[45vw] ">
          <div className="bg-[#FFE600] rounded-3xl text-center mb-5 ">
            <Typography className=" text-[#033474] font-normal ">
              SEAMLESS INTEGRATION WITH YOUR STORE
            </Typography>
          </div>
          <Typography
            variant="h5"
            className="text-white text-5xl font-normal mb-5 ">
            Connect your brand in minutes.
          </Typography>
          <Typography className="text-white text-xl ">
            Our unique software connects to your store quickly and easily with
            the help of our checkout and CRM partners. For all other platforms,
            talk to us about our custom integration options.
          </Typography>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <Button color="white" className="mt-5 flex items-center gap-4">
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
        <div className="flex justify-center items-center">
          <div className="">
            <img
              className="w-full h-full"
              src="/bg-seamless-integration.svg"
              alt="integrations"
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center lg:hidden  py-5 px-5 mt-5"
        style={{
          background: `url('/bg-blue-fill.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div className="bg-[#FFE600] rounded-3xl text-center mb-5 px-5 mt-10 ">
          <Typography className=" text-[#033474] font-normal ">
            SEAMLESS INTEGRATION WITH YOUR STORE
          </Typography>
        </div>
        <Typography
          variant="h5"
          className="text-white text-4xl font-normal mb-5 ">
          Connect your brand in minutes.
        </Typography>
        <Typography className="text-white text-xl ">
          Our unique software connects to your store quickly and easily with the
          help of our checkout and CRM partners. For all other platforms, talk
          to us about our custom integration options.
        </Typography>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          {" "}
          <Button color="white" className="mt-5 flex items-center gap-4">
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

        <div className="mt-10">
          <div>
            <img src="/bg-seamless-integration.svg" alt="integrations" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeamLessIntegration;
