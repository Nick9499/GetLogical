/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Card, CardBody, Typography } from "../../theme/themeRegistry";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const REVIEWS = [
  {
    body: ` “Love working with HelpGrid - moving our support needs to them has
          taken such a huge load for us. Our customer support runs very smooth
          and customers are super happy. Being in direct touch with the
          supervisors is an additional piece of mind - they are always there for
          us. It made the onboarding and ongoing partnership so much more
          personal and valuable. ”`,
    author: "Customer Service Client",
  },
  {
    body: ` “Love working with HelpGrid - moving our support needs to them has
          taken such a huge load for us. Our customer support runs very smooth
          and customers are super happy. Being in direct touch with the
          supervisors is an additional piece of mind - they are always there for
          us. It made the onboarding and ongoing partnership so much more
          personal and valuable. ”`,
    author: "Customer Service Client",
  },
  {
    body: ` “Love working with HelpGrid - moving our support needs to them has
          taken such a huge load for us. Our customer support runs very smooth
          and customers are super happy. Being in direct touch with the
          supervisors is an additional piece of mind - they are always there for
          us. It made the onboarding and ongoing partnership so much more
          personal and valuable. ”`,
    author: "Customer Service Client",
  },
];

const Carousel = () => {
  return (
    <>
      <div className="hidden lg:flex  gap-6 mx-8">
        {REVIEWS.map(({ body, author }, i) => (
          <Card
            key={i}
            className="rounded-[0.625rem] my-8 mx-2  "
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <CardBody className="flex flex-col  gap-6">
              <Typography className="text-xl text-[#212D3F]  ">
                {body}
              </Typography>
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-[#FBC02D] w-[1rem] h-[0.625rem] "
                  />
                ))}
              </div>
              <Typography className="text-xl font-medium text-[#212D3F] text-left">
                {author}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="lg:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="h-full w-full overflow-visible  "
          style={{ maxWidth: "90vw" }}
        >
          {REVIEWS.map(({ body, author }, i) => (
            <SwiperSlide className="overflow-visible" key={i}>
              <Card
                className="rounded-[0.625rem] text-center my-8 mx-2  "
                style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
              >
                <CardBody className="flex flex-col items-center gap-4">
                  <Typography className="text-xs text-[#212D3F]  ">
                    {body}
                  </Typography>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className="text-[#FBC02D] w-[0.625rem] h-[0.625rem] "
                      />
                    ))}
                  </div>
                  <Typography className="text-sm font-medium text-[#212D3F]">
                    {author}
                  </Typography>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
