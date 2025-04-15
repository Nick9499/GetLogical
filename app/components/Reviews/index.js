import React from "react";
import { Button, Card, CardBody, Typography } from "../../theme/themeRegistry";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center pt-10   text-center ">
      <Typography className="text-xs font-normal text-[#E88E46] px-8 ">
        DON'T JUST TAKE OUR WORD FOR IT.
      </Typography>
      <Typography className="text-[1.625rem] font-semibold text-[#0E0E0E] px-5 ">
        See What the{" "}
        <span className="text-[#E88E46]">World’s Leading Companies</span> Have
        to Say
      </Typography>
      <div className="mx-6 mt-5">
        <Card
          className="rounded-3xl w-full"
          style={{
            background:
              "linear-gradient(180deg, #FF9F52 0%, #F18229 50%, #E36500 100%)",
          }}
        >
          <CardBody>
            <Typography className="text-white text-[.875rem] font-semibold ">
              Ready to take the next step for your business?
            </Typography>
            <Button className="mt-12 normal-case text-sm md:text-xl font-medium bg-white  text-[#033474] rounded-[2rem] ">
              Contact Us
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;
