/* eslint-disable @next/next/no-img-element */
"use client";
/**
 * @format
 */
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  ListItem,
  Collapse,
  List,
} from "../../theme/themeRegistry";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
import NextLink from "next/link";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <ListItem className="flex items-center gap-2 py-2 pr-4">
        <Typography variant="small" color="blue-gray" className="font-medium">
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </Link>
        </Typography>
      </ListItem>
      <ListItem className="flex items-center gap-2 py-2 pr-4">
        <Typography variant="small" color="blue-gray" className="font-medium">
          <Link
            to="integrations"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Integrations
          </Link>
        </Typography>
      </ListItem>

      <ListItem className="flex items-center gap-2 py-2 pr-4">
        <Typography variant="small" color="blue-gray" className="font-medium">
          <Link
            to="review"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Testimonials
          </Link>
        </Typography>
      </ListItem>
    </List>
  );
}

function NavListForSmallDevice({ setOpenNav }) {
  return (
    <List
      onBlur={() => setOpenNav(false)}
      className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 "
    >
      <ListItem className="flex items-center gap-2 py-2 pr-4">
        <Typography variant="small" color="blue-gray" className="font-medium">
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setOpenNav(false)}
          >
            Services
          </Link>
        </Typography>
      </ListItem>
      <ListItem className="flex items-center gap-2 py-2 pr-4">
        <Typography variant="small" color="blue-gray" className="font-medium">
          <Link
            to="integrations"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setOpenNav(false)}
          >
            Integrations
          </Link>
        </Typography>
      </ListItem>

      <ListItem
        className="flex items-center gap-2 py-2 pr-4"
        onClick={() => setOpenNav(false)}
      >
        <Typography variant="small" color="blue-gray" className="font-medium">
          <Link
            to="review"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setOpenNav(false)}
          >
            Testimonials
          </Link>
        </Typography>
      </ListItem>
    </List>
  );
}

export function GetLogicCallNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar
      className="mx-auto w-[90vw] md:w-[70vw]   px-4 py-[.01rem] md:py-2 sticky
     mt-4 md:mt-7 rounded-[4.313rem] top-2 z-10 "
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <NextLink href="/">
          <div className=" max-w-[2rem] max-h-[2rem] md:max-w-[70px] md:max-h-[70px]">
            <img src="/logo.svg" alt="logo" className="w-full h-full" />
          </div>
        </NextLink>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <NextLink href="/contact">
            <Button
              variant="filled"
              className="capitalize bg-[#E88E46] 
          rounded-[2.188rem] text-base font-medium "
            >
              Contact Us
            </Button>
          </NextLink>
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse
        className="fixed top-[3.8rem] left-0 w-full z-50 bg-white rounded-2xl shadow-md"
        open={openNav}
      >
        <NavListForSmallDevice setOpenNav={setOpenNav} />
      </Collapse>
    </Navbar>
  );
}

export default GetLogicCallNavbar;
