import React from "react";
import { Typography } from "../../theme/themeRegistry";
import ConvoCard from "./ConvoCard";

const ExpertHelp = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center items-center ">
        <Typography
          color="blue-gray"
          variant="h5"
          className="font-semibold text-2xl">
          Get expert help anytime.
        </Typography>
      </div>
      <div className="mx-10 my-5">
        <ConvoCard />
      </div>
    </div>
  );
};

export default ExpertHelp;
