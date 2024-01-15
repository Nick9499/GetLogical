"use client";
import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Typography,
} from "../../theme/themeRegistry";

const ConvoCard = () => {
  const handleCallUs = () => {
    const phoneNumber = "8779888726";
    window.location.href = "tel:" + phoneNumber;
  };
  return (
    <Card className="max-h-[25vh]  lg:max-h-[35vh] h-full">
      <CardBody>
        <div className="flex justify-end">
          <Card className="ml-8 mx-0 px-0  bg-yellow-600">
            <CardBody className="py-1 px-3 flex flex-col justify-center ">
              <div>
                <Typography className="text-xs pb-1">John</Typography>
                <Typography className="font-medium text-sm">
                  Can you help me out?
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Avatar src="/person.svg" size="sm" className="ml-3" />
        </div>
        <div className="flex justify-start mt-5 md:mt-10">
          <Avatar src="/person.svg" size="sm" className="mr-3" />
          <Card className="ml-10 mx-0 px-0 ">
            <CardBody className="py-1 px-3 flex flex-col justify-center ">
              <Typography className="text-xs pb-1">Laurie</Typography>
              <Typography className="font-medium text-sm">
                This is Laurie from Getlogicall. I’ll be your assistant today.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="mt-3  flex justify-end">
          <Button
            onClick={handleCallUs}
            size="sm"
            className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            24/7
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ConvoCard;
