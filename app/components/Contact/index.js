"use client";
import React, { useState } from "react";
import { Button, Input, Typography } from "../../theme/themeRegistry";
import { AlertCustomAnimation } from "../Alert";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState(``);
  const [errorAlert, setErrorAlert] = useState(false);
  const [form, setForm] = useState({
    cName: "",
    url: "",
    fName: "",
    email: "",
    phone: "",
    social_id: "",
    message: "",
  });

  const handleClose = () => setShowAlert(false);

  const handleOpen = () => setShowAlert(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (
      form.cName.trim().length === 0 ||
      form.url.trim().length === 0 ||
      form.fName.trim().length === 0 ||
      form.email.trim().length === 0 ||
      form.phone.trim().length === 0 ||
      form.message.trim().length === 0
    ) {
      setAlertMsg(`Please fill the required fields`);
      setErrorAlert(true);
      handleOpen();
      return;
    }
    e.preventDefault();
    const result = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setErrorAlert(false);
    handleOpen();
    setAlertMsg(`Thanks for your feedback. We will get back to you shortly.`);
  };

  return (
    <div className=" md:px-20 lg:px-72 " id="contact">
      <AlertCustomAnimation
        open={showAlert}
        onClose={handleClose}
        body={alertMsg}
        errorAlert={errorAlert}
      />
      <div className="flex flex-col justify-center items-center pt-20 px-10">
        <Typography className="font-semibold text-3xl text-[#033474] ">
          Contact Us
        </Typography>
        <Typography className="text-xl">
          Learn how we can help solve your problems.
        </Typography>
      </div>
      <div className="pt-10 px-10 ">
        <div className="mb-5">
          <Input
            variant="outlined"
            label="Company Name"
            placeholder="Company Name"
            name="cName"
            value={form.cName}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-5">
          <Input
            variant="outlined"
            label="Company Url"
            placeholder="Company Url"
            name="url"
            value={form.url}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-5">
          <Input
            variant="outlined"
            label="Full Name"
            placeholder="Full Name"
            name="fName"
            value={form.fName}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-5">
          <Input
            variant="outlined"
            label="Contact Email"
            placeholder="Contact Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-5">
          <Input
            variant="outlined"
            label="Contact Phone"
            placeholder="Contact Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-5">
          <Input
            variant="outlined"
            label="Skype / Telegram"
            placeholder="Skype / Telegram Id"
            name="social_id"
            value={form.social_id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <Input
            variant="outlined"
            label="Tell us what you’re looking for"
            placeholder="Please describe what you are looking for"
            name="message"
            value={form.message}
            onChange={handleChange}
            required={true}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button onClick={handleSubmit} className="mt-5 flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72h-2.69a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
          Get In Touch
        </Button>
      </div>
    </div>
  );
};

export default Contact;
