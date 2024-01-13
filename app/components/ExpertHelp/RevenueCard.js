/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardBody, Typography } from "../../theme/themeRegistry";

const RevenueCard = () => {
  return (
    <Card className="max-h-[25vh]  lg:max-h-[35vh] h-full">
      <CardBody>
        <div className="flex justify-between">
          <div>
            <Typography>Total Revenue</Typography>
            <Typography className="font-semibold text-[#033474]">
              $28,937.128.32
            </Typography>
          </div>
          <Typography className="">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-500 font-semibold"> 13.8% </span>
            </span>
          </Typography>
        </div>
        <div className=" mt-5 flex justify-center items-center">
          <img src="/revenue.svg" alt="revenue" />
        </div>
      </CardBody>
    </Card>
  );
};

export default RevenueCard;
