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
      <div className="flex flex-col xl:hidden">
        <div className="flex   flex-col items-center text-center gap-3 px-2">
          <Typography className="text-[1.6rem] font-semibold text-[#0E0E0E]  ">
            Sales-Driven Solutions That{" "}
            <span className="text-[#E88E46]">Boost</span> Your AOV!!
          </Typography>
          <Typography className="text-[#0E0E0E] text-[.75rem] leading-[1.25rem] px-3 ">
            At UpSales, we deliver outbound sales strategies that drive results,
            grow revenue, and protect your brand. From upselling to cart
            recovery or high-ticket coaching, we create seamless customer
            experiences that turn prospects into loyal customers.
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
      </div>
      <div className=" hidden xl:flex justify-between mt-20 px-10 ">
        <div className="max-w-[60vw]">
          <div className="flex flex-col  gap-10 px-2">
            <Typography className="text-[4rem] font-semibold text-[#0E0E0E] leading-[4.6rem] ">
              Sales-Driven Solutions That{" "}
              <span className="text-[#E88E46]">Boost</span> Your AOV!!
            </Typography>
            <Typography className="text-[#0E0E0E] text-[1.5rem] leading-[2.5rem]">
              At UpSales, we deliver outbound sales strategies that drive
              results, grow revenue, and protect your brand. From upselling to
              cart recovery or high-ticket coaching, we create seamless customer
              experiences that turn prospects into loyal customers.
            </Typography>
          </div>
          <div className="flex  items-center justify-between gap-1 mt-10">
            {SERVICES.map(
              ({ imgUrl, subtitle1, subtitle2, subtitle3, title }, i) => (
                <div className="flex flex-col gap-3 " key={i}>
                  <img src={imgUrl} className="w-[5rem] h-[5rem] mb-5 " />
                  <Typography className="text-[1.5rem] font-bold leading-[1.75rem] ">
                    {title}
                  </Typography>
                  <Typography className="text-[1.25rem] leading-[1.6rem] font-normal ">
                    {subtitle1}
                  </Typography>
                  <Typography className="text-[1.25rem] leading-[1.6rem] font-normal ">
                    {subtitle2}
                  </Typography>
                  <Typography className="text-[1.25rem] leading-[1.6rem] font-normal ">
                    {subtitle3}
                  </Typography>
                </div>
              )
            )}
          </div>
          <div className="flex w-5/6 xl:justify-between  mt-16">
            <div className="flex flex-col ">
              <Typography className="text-[2.25rem] text-[#0E0E0E] font-semibold ">
                See How We Can Help You
              </Typography>
              <Typography className="text-[1.625] font-normal ">
                Schedule a Demo today!
              </Typography>
            </div>
            <Button className="bg-[#212D3F] text-[1.25rem] rounded-[2.25rem] normal-case ">
              Book a Call
            </Button>
          </div>
        </div>
        <div className="w-[40vw]">
          <img
            src="/customer_agent.svg"
            className="w-full h-[57.125rem] shadow-md "
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
