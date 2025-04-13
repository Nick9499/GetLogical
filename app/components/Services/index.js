/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Button, Typography } from "../../theme/themeRegistry";
import { Link } from "react-scroll";

const SERVICES = [
  {
    imgUrl: "/high_impact.svg",
    title: "High Impact Upselling",
    subtitle1: "24/7 Live Agents",
    subtitle2: "2 Min Wait Time",
    subtitle3: "82% 1st Contact Resolution",
  },
  {
    imgUrl: "/high_impact.svg",
    title: "Cart Recovery",
    subtitle1: "Custom Integrations",
    subtitle2: "20% Average Rate of Recovery",
    subtitle3: "$180 Average Order Value",
  },
  {
    imgUrl: "/high_impact.svg",
    title: "High Ticket Coaching",
    subtitle1: "One-on-one expert coaching.",
    subtitle2: "Focused on health and wellness.",
    subtitle3: "Close premium, high-value sales.",
  },
];

const Services = () => {
  return (
    <div id="service" className="mt-5">
      <div className="flex  flex-col items-center text-center gap-3 px-2">
        <Typography className="text-[1.6rem] font-semibold text-[#0E0E0E]  ">
          Sales-Driven Solutions That{" "}
          <span className="text-[#E88E46]">Boost</span> Your AOV!!
        </Typography>
        <Typography className="text-[#0E0E0E] text-[.75rem] leading-[1.25rem] px-3 ">
          GetLogicall is your all-in-one call center that delights both customer
          and company with amazing results. We can create a seamless customer
          experience by utilizing all of our services hand-in-hand or
          individually based on your business needs.
        </Typography>
      </div>
      <div className="flex flex-col items-center gap-10 mt-10">
        {SERVICES.map(
          ({ imgUrl, subtitle1, subtitle2, subtitle3, title }, i) => (
            <div className="flex flex-col gap-1 items-center" key={i}>
              <img src={imgUrl} className="w-[3.5rem] h-[3.5rem]  " />
              <Typography className="text-[1.1rem] font-bold leading-[1.75rem] ">
                {title}
              </Typography>
              <Typography className="text-[.875rem] leading-[1.6rem] font-normal ">
                {subtitle1}
              </Typography>
              <Typography className="text-[.875rem] leading-[1.6rem] font-normal ">
                {subtitle2}
              </Typography>
              <Typography className="text-[.875rem] leading-[1.6rem] font-normal ">
                {subtitle3}
              </Typography>
            </div>
          )
        )}
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mt-16">
        <img
          src="/customer_agent.svg"
          className="w-[10.8rem] h-[21.25rem] shadow-md "
        />
        <div className="flex flex-col items-center">
          <Typography className="text-[1.25rem] text-[#0E0E0E] font-semibold ">
            See How We Can Help You
          </Typography>
          <Typography className="text-base font-normal ">
            Schedule a Demo today!
          </Typography>
        </div>
        <Button className="bg-[#212D3F] rounded-3xl normal-case ">
          Contact Us
        </Button>
      </div>
      <div className=" hidden lg:flex mt-20 px-20 ">
        <div className="max-w-[50vw]">
          <img src="/s2-phone.svg" className="w-full h-full" alt="s2-phone" />
        </div>
        <div>
          <div className="flex mt-16 justify-center max-w-[50vw] ">
            <Typography
              variant="h5"
              className="font-normal text-5xl text-[#033474] pb-5 leading-[1.2] "
            >
              Discover what services work best for you and your brand!
            </Typography>
            <Typography className="max-w-[20vw]">
              GetLogicall is your all-in-one call center that delights both
              customer and company with amazing results. We can create a
              seamless customer experience by utilizing all of our services
              hand-in-hand or individually based on your business needs.
            </Typography>
          </div>
          <div className="flex justify-between ">
            <div className="mt-10 flex flex-col ">
              <div className="max-w-[3.5vw] max-h-[3.5vw]">
                <img
                  className="w-full h-full"
                  src="/icon-customer.webp"
                  alt="icon-cart"
                />
              </div>
              <div className="mt-5 text-[#5F7199] flex flex-col justify-center ">
                <Typography
                  variant="h6"
                  className="text-[#033474] text-2xl font-bold pb-5 "
                >
                  Customer Service
                </Typography>
                <Typography className="pb-7">24/7 Live agents</Typography>
                <hr className="text-gray-900 w-[15vw] mb-2" />
                <Typography className="pb-5">{`<2min Wait time`}</Typography>
                <hr className="text-gray-900 w-[15vw] mb-2" />
                <Typography className="pb-7">
                  82% 1st Contact resolution
                </Typography>
              </div>
            </div>
            <div className="mt-10 flex flex-col justify-center ">
              <div className="max-w-[3.5vw] max-h-[3.5vw]">
                <img
                  className="w-full h-full"
                  src="/icon-cart.webp"
                  alt="icon-cart"
                />
              </div>
              <div className="mt-5 text-[#5F7199] flex flex-col justify-center ">
                <Typography
                  variant="h6"
                  className="text-[#033474] text-2xl font-bold pb-5 "
                >
                  Cart Recovery
                </Typography>
                <Typography className="pb-7">Custom integration</Typography>
                <hr className="text-gray-900 w-[15vw] mb-2" />
                <Typography className="pb-5">
                  20% Average rate of recovery
                </Typography>
                <hr className="text-gray-900 w-[15vw] mb-2" />
                <Typography className="pb-7">
                  $180 Average order value
                </Typography>
              </div>
            </div>
            <div className="mt-10 flex flex-col justify-center ">
              <div className="max-w-[3.5vw] max-h-[3.5vw]">
                <img
                  className="w-full h-full"
                  src="/icon-order-taking.webp"
                  alt="icon-cart"
                />
              </div>
              <div className="mt-5 text-[#5F7199] flex flex-col justify-center ">
                <Typography
                  variant="h6"
                  className="text-[#033474] text-2xl font-bold pb-5 "
                >
                  Order Taking
                </Typography>
                <Typography className="pb-7">Responsive IVR</Typography>
                <hr className="text-gray-900 w-[15vw] mb-2" />
                <Typography className="pb-5">24% Conversion rate</Typography>
                <hr className="text-gray-900 w-[15vw] mb-2" />
                <Typography className="pb-7">Upsell to maximize AOV</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
