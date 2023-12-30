/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Typography } from "../../theme/themeRegistry";

const Services = () => {
  return (
    <div>
      <div>
        <img src="/s2-phone.webp" alt="s2Phone" />
      </div>
      <div>
        <div className="flex flex-col justify-center items-center px-10 pb-5">
          <Typography variant="h5" className="text-[#033474] text-2xl pb-5">
            Discover what services work best for you and your brand!
          </Typography>
          <Typography>
            GetLogicall is your all-in-one call center that delights both
            customer and company with amazing results. We can create a seamless
            customer experience by utilizing all of our services hand-in-hand or
            individually based on your business needs.
          </Typography>
        </div>
        {/* <div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src="/icon-customer.webp" alt="customer service" />
            </div>
            <div>
              <Typography variant="h6" className="text-[#033474]  pb-5">
                Customer Service
              </Typography>
              <Typography>24/7 Live agents</Typography>
              <hr />
              <Typography>{`<2min Wait time`}</Typography>
              <hr />
              <Typography>82% 1st Contact resolution</Typography>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
