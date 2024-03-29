/* eslint-disable @next/next/no-img-element */
"use client";
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
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Services
          </Link>
        </ListItem>
      </Typography>
      <Typography variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link
            to="integrations"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Integrations
          </Link>
        </ListItem>
      </Typography>
      <Typography variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link href="/">Testimonials</Link>
        </ListItem>
      </Typography>
    </List>
  );
}

function NavListForSmallDevice({ setOpenNav }) {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setOpenNav(false)}>
            Services
          </Link>
        </ListItem>
      </Typography>
      <Typography variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link
            to="integrations"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setOpenNav(false)}>
            Integrations
          </Link>
        </ListItem>
      </Typography>
      <Typography variant="small" color="blue-gray" className="font-medium">
        <ListItem
          className="flex items-center gap-2 py-2 pr-4"
          onClick={() => setOpenNav(false)}>
          <Link href="/">Testimonials</Link>
        </ListItem>
      </Typography>
    </List>
  );
}

export function GetLogicCallNavbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleCallUs = () => {
    const phoneNumber = "8779888726";
    window.location.href = "tel:" + phoneNumber;
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar fullWidth className="mx-auto  px-4 py-2 sticky top-0 z-10">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <div className="max-w-[70px] max-h-[70px]">
            <img src="/LOGO.png" alt="logo" className="w-full h-full" />
          </div>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <IconButton variant="text" onClick={handleCallUs}>
            <PhoneIcon className="h-5 w-5" />
          </IconButton>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavListForSmallDevice setOpenNav={setOpenNav} />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button
            fullWidth
            className="flex justify-center"
            onClick={handleCallUs}>
            <PhoneIcon className="h-4 w-4 mr-3" />
            Give Us A Call
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default GetLogicCallNavbar;
