/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button, Typography } from "../../theme/themeRegistry";

const Services = () => {
  return (
    <>
      <div className=" flex lg:hidden  flex-col justify-center items-center px-7 ">
        <div className="">
          <img src="/s2-phone.webp" className="w-full h-full" alt="s2-phone" />
        </div>
        <div className="-mt-12 md:px-10  flex flex-col justify-center items-center">
          <Typography
            variant="h5"
            className="font-normal text-4xl text-[#033474] pb-5">
            Discover what services work best for you and your brand!
          </Typography>
          <Typography>
            HelpGrid is your all-in-one call center that delights both customer
            and company with amazing results. We can create a seamless customer
            experience by utilizing all of our services hand-in-hand or
            individually based on your business needs.
          </Typography>
        </div>
        <div className="mt-10 flex flex-col justify-center items-center">
          <div>
            <img src="/icon-customer.webp" alt="icon-cart" />
          </div>
          <div className="mt-5 text-[#5F7199] flex flex-col justify-center items-center">
            <Typography
              variant="h6"
              className="text-[#033474] text-2xl font-bold pb-5 ">
              Customer Service
            </Typography>
            <Typography className="pb-7">24/7 Live agents</Typography>
            <hr className="text-gray-900 w-[80vw] mb-2" />
            <Typography className="pb-5">{`<2min Wait time`}</Typography>
            <hr className="text-gray-900 w-[80vw] mb-2" />
            <Typography className="pb-7">82% 1st Contact resolution</Typography>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-center items-center">
          <div>
            <img src="/icon-cart.webp" alt="icon-cart" />
          </div>
          <div className="mt-5 text-[#5F7199] flex flex-col justify-center items-center">
            <Typography
              variant="h6"
              className="text-[#033474] text-2xl font-bold pb-5 ">
              Cart Recovery
            </Typography>
            <Typography className="pb-7">Custom integration</Typography>
            <hr className="text-gray-900 w-[80vw] mb-2" />
            <Typography className="pb-5">
              20% Average rate of recovery
            </Typography>
            <hr className="text-gray-900 w-[80vw] mb-2" />
            <Typography className="pb-7">$180 Average order value</Typography>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-center items-center">
          <div>
            <img src="/icon-order-taking.webp" alt="icon-cart" />
          </div>
          <div className="mt-5 text-[#5F7199] flex flex-col justify-center items-center">
            <Typography
              variant="h6"
              className="text-[#033474] text-2xl font-bold pb-5 ">
              Order Taking
            </Typography>
            <Typography className="pb-7">Responsive IVR</Typography>
            <hr className="text-gray-900 w-[80vw] mb-2" />
            <Typography className="pb-5">24% Conversion rate</Typography>
            <hr className="text-gray-900 w-[80vw] mb-2" />
            <Typography className="pb-7">Upsell to maximize AOV</Typography>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Services;
