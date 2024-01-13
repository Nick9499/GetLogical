import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "../../theme/themeRegistry";
import ConvoCard from "./ConvoCard";
import DashboardCard from "./DashboardCard";
import RevenueCard from "./RevenueCard";
import CustomerCard from "./CustomerCard";

const ExpertHelp = () => {
  return (
    <>
      <div className="mt-20">
        <div className="flex justify-center items-center ">
          <Typography
            color="blue-gray"
            variant="h5"
            className="font-semibold text-2xl text-[#033474]">
            Get expert help anytime.
          </Typography>
        </div>
        <div className="mx-10 my-5 hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div className="lg:max-w-[40vw]  ">
            <ConvoCard />
            <div className="mt-10">
              <Typography
                variant="h6"
                className="font-semibold text-lg  text-[#033474]">
                Receive 24hr support
              </Typography>
              <Typography>
                Inbound support teams to answer whatever questions your
                customers may ask.
              </Typography>
            </div>
          </div>
          <div className="lg:max-w-[40vw] mt-20 md:mt-0 ">
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
          <div className="lg:max-w-[40vw] mt-10 lg:mt-0">
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
          <div className="lg:max-w-[40vw] mt-10 lg:mt-0 ">
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
        <div className="flex flex-col md:hidden  px-5">
          <List>
            <ListItem ripple={false}>
              <ListItemPrefix>
                <Avatar
                  size="xl"
                  variant="rounded"
                  alt="24/7"
                  src="/24-7.webp"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Receive 24hr support
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal">
                  Inbound support teams to answer whatever questions your
                  customers may ask.
                </Typography>
              </div>
            </ListItem>
            <ListItem ripple={false}>
              <ListItemPrefix>
                <Avatar
                  size="xl"
                  variant="rounded"
                  alt="pay on performance"
                  src="/pay-on-performance.webp"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Pay on performance
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal">
                  We’re so sure of our sales team, you only pay us when we get
                  you more sales.
                </Typography>
              </div>
            </ListItem>
            <ListItem ripple={false}>
              <ListItemPrefix>
                <Avatar
                  size="xl"
                  variant="rounded"
                  alt="contact"
                  src="/contact-tick.webp"
                />
              </ListItemPrefix>
              <div className="-ml-2">
                <Typography variant="h6" color="blue-gray">
                  Save 1 in 5 customers
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal">
                  Average clients see 21% of their abandoned carts recovered.
                </Typography>
              </div>
            </ListItem>
            <ListItem ripple={false}>
              <ListItemPrefix>
                <Avatar
                  size="xl"
                  variant="rounded"
                  alt="contact"
                  src="/15percent.webp"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Increase revenues
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal">
                  Recovered sales account for approximately 15% of our clients’
                  total revenue.
                </Typography>
              </div>
            </ListItem>
          </List>
        </div>
      </div>
    </>
  );
};

export default ExpertHelp;
