/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardBody, Typography } from "../../theme/themeRegistry";

const ConversionRate = () => {
  return (
    <Card className=" hidden md:block w-full md:max-w-[33vw]">
      <CardBody>
        <div className="flex justify-between">
          <div className="flex">
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
            <div>
              <Typography color="blue-gray" className="text-xl font-semibold">
                24%
              </Typography>
              <Typography variant="small">Conversion Rate</Typography>
            </div>
          </div>
          <div>
            <img src="/chart.png" />
          </div>
          <div>
            <Typography color="blue-gray" className="text-xl font-semibold">
              $180
            </Typography>
            <Typography variant="small">Average Order Values</Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ConversionRate;
