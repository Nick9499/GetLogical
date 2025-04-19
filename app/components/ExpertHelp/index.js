import React from "react";
import { Button, Typography } from "../../theme/themeRegistry";
import Image from "next/image";
import Link from "next/link";

const EXPERT_HELP = [
  {
    imgUrl: "/24h_support.svg",
    title: "Receive 24hr Support",
    subtitle: `Inbound support teams to answer whatever questions your customers
              may ask.`,
  },
  {
    imgUrl: "/pay_performance.svg",
    title: "Pay On Performance",
    subtitle: `We’re so sure of our sales team,
 you only pay us when we get you more sales.`,
  },
  {
    imgUrl: "/1_5_customer.svg",
    title: "Save 1 in 5 Customers",
    subtitle: `Average clients see 21% of their
abandoned carts recovered.`,
  },
  {
    imgUrl: "/increase_revenue.svg",
    title: "Increase Revenues",
    subtitle: `Recovered sales account for
 approximately 15% of our clients’ total revenue.`,
  },
];

const ExpertHelp = () => {
  return (
    <>
      <div className="pt-5  md:pt-20 bg-[#F2F2F2]">
        <div className="flex justify-center items-center px-2 text-center ">
          <Typography
            variant="h5"
            className="font-semibold text-2xl text-[#033474]"
          >
            Get Expert Help Anytime.
          </Typography>
        </div>

        <div className="  mt-10  ">
          <div className="px-4 xl:px-10 xl:py-4 py-2 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-5 xl:gap-10 ">
            {EXPERT_HELP.map(({ imgUrl, title, subtitle }, i) => (
              <div
                key={i}
                className="bg-white rounded-[.65rem] xl:rounded-[1.25rem] xl:shadow-md pt-6 pb-4 px-3 flex flex-col gap-3 items-center text-center "
              >
                <div className="relative w-[2.5rem] h-[2.5rem] md:w-[4rem] md:h-[4rem] xl:w-[9rem] xl:h-[9rem] ">
                  <Image src={imgUrl} fill alt="" />
                </div>

                <div>
                  <Typography className="text-[.75rem] md:text-[1rem] xl:text-[2rem] text-[#0E0E0E] font-semibold mb-1">
                    {title}
                  </Typography>
                  <Typography className="text-[.5rem] md:text-[.75rem] xl:text-[1.25rem] text-[#0E0E0E] font-light ">
                    {subtitle}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center w-screen mt-5 pb-10  ">
            <Link href="/contact">
              <Button className="bg-[#212D3F] text-sm lg:text-xl rounded-3xl normal-case ">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertHelp;
