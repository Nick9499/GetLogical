/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardBody } from "../../theme/themeRegistry";

const CustomerCard = () => {
  return (
    <Card className="max-h-[25vh]  lg:max-h-[35vh] h-full">
      <CardBody>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 gap-16">
            <img src="/user-2.svg" alt="user 2" />
            <img src="/user-2.svg" alt="user 2" />
          </div>
          <div>
            <img src="/floating.svg" alt="floating" />
          </div>
          <div className="grid grid-cols-1 gap-16">
            <img src="/user-2.svg" alt="user 2" />
            <img src="/user-2.svg" alt="user 2" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CustomerCard;
