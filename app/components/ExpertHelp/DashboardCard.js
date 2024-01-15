/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardBody, Typography } from "../../theme/themeRegistry";

const DashboardCard = () => {
  return (
    <Card className="max-h-[25vh]  lg:max-h-[35vh] h-full">
      <CardBody>
        <div className="flex flex-col justify-center items-center">
          <Typography className="pb-2 font-semibold text-[#033474]">
            Sales Dashboard
          </Typography>
          <div className="pt-5  flex justify-center">
            <img src="/dashboard.svg" alt="dashboard" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default DashboardCard;
