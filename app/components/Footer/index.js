/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Typography, IconButton } from "../../theme/themeRegistry";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import LocationIcon from "../../../assets/location_icon.svg";

const Footer = () => {
  return (
    <div className="mt-20 bg-[#000]">
      <div
        className="flex flex-col items-center text-center md:grid md:grid-cols-3 md:gap-x-24
        lg:gap-x-20 lg:px-20 md:pb-10   text-white px-10  "
      >
        <div className="pt-10 flex flex-col items-center">
          <Link href="/">
            <div className="max-w-[70px] max-h-[70px]">
              <img src="/logo_white.svg" alt="logo" className="w-full h-full" />
            </div>
          </Link>

          <Typography className="pt-2 text-[.875rem] font-normal ">
            Upsales works to service the customers who bought and convert the
            customers who didn’t.
          </Typography>
          <div className="pt-5 flex justify-between">
            <IconButton
              onClick={() =>
                window.open("https://www.facebook.com/getlogicall")
              }
              variant="text"
              className="text-white"
            >
              <FiFacebook className="w-[1.25rem] h-[1.25rem]  " />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://www.instagram.com/getlogicall/")
              }
              variant="text"
              className="text-white"
            >
              <FaInstagram className="w-[1.25rem] h-[1.25rem]  " />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col pt-9 ">
          <Typography className="capitalize pb-2 text-[1.375rem] leading-[26px] font-semibold ">
            quick links
          </Typography>
          <Link href="/" className="text=[1rem] pb-1">
            Services
          </Link>
          <Link href="/" className="text=[1rem] pb-1 ">
            Integrations
          </Link>
          <Link href="/" className="text=[1rem] pb-1 ">
            Testimonials
          </Link>
          <Link href="/" className="text=[1rem]  pb-1">
            Contact Us
          </Link>
        </div>

        <div className="flex flex-col items-center pt-9 pb-">
          <Typography className="pb-5 text-[1.375rem] capitalize font-semibold leading-[26px]">
            Contact Us
          </Typography>
          <LiaPhoneVolumeSolid className="w-[1.5rem] h-[1.5rem] mb-1 " />
          <Typography className="pb-1 font-medium text-[1.15rem] leading-[1.5rem] ">
            Phone
          </Typography>
          <Typography className="pb-1 text-[.75rem] font-normal leading-[1.5rem] ">
            914-517-0226
          </Typography>
          <LocationIcon className=" w-[1.5rem] h-[1.5rem] mt-5 mb-1 " />
          <Typography className="pb-1 font-medium text-[1.15rem] leading-[1.5rem] ">
            Location
          </Typography>
          <Typography className="pb-1 text-[.75rem] font-normal leading-[1.5rem]">
            16192 COASTAL HIGHWAY LEWES, DELAWARE 19958
          </Typography>
        </div>
      </div>

      <div className=" flex justify-center text-white p-2  ">
        <Typography className=" text-[.65rem] font-normal leading-[1.6rem] text-center ">
          ©{new Date().getFullYear()} Upsales. All rights reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
