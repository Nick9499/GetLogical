import React from "react";
import { Typography } from "../../theme/themeRegistry";
import ConvoCard from "./ConvoCard";
import DashboardCard from "./DashboardCard";
import RevenueCard from "./RevenueCard";
import CustomerCard from "./CustomerCard";

const ExpertHelp = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center items-center ">
        <Typography
          color="blue-gray"
          variant="h5"
          className="font-semibold text-2xl text-[#033474]">
          Get expert help anytime.
        </Typography>
      </div>
      <div className="mx-10 my-5 grid lg:grid-cols-2 gap-10 ">
        <div className="lg:max-w-[40vw] ">
          <ConvoCard />
          <div className="mt-10">
            <Typography
              variant="h6"
              className="font-semibold text-lg  text-[#033474]">
              Receive 24hr support
            </Typography>
            <Typography>
              Inbound support teams to answer whatever questions your customers
              may ask.
            </Typography>
          </div>
        </div>
        <div className="lg:max-w-[40vw] ">
          <DashboardCard />
          <div className="mt-10">
            <Typography
              variant="h6"
              className="font-semibold text-lg  text-[#033474]">
              Pay on performance
            </Typography>
            <Typography>
              We’re so sure of our sales team, you only pay us when we get you
              more sales.
            </Typography>
          </div>
        </div>
        <div className="lg:max-w-[40vw]">
          <CustomerCard />
          <div className="mt-10">
            <Typography
              variant="h6"
              className="font-semibold text-lg  text-[#033474]">
              Save 1 in 5 customers
            </Typography>
            <Typography>
              Average clients see 21% of their abandoned carts recovered.
            </Typography>
          </div>
        </div>
        <div className="lg:max-w-[40vw]">
          <RevenueCard />
          <div className="mt-10">
            <Typography
              variant="h6"
              className="font-semibold text-lg  text-[#033474]">
              Increase revenues
            </Typography>
            <Typography>
              Recovered sales account for approximately 15% of our clients’
              total revenue.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertHelp;
