"use client";
import React, { useState } from "react";
import { Typography, Input, Textarea, Button } from "../../theme/themeRegistry";
import axios from "axios";

const ContactInputsContainer = () => {
  const [formState, setFormState] = useState({
    cName: "",
    url: "",
    fName: "",
    email: "",
    phone: "",
    social_id: "",
    message: "",
  });

  const handleChangeFormState = (e) => {
    const { name, value } = e.target;

    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMail = async () => {
    try {
      const res = await axios.post("/api/send-mail", formState);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = () => {
    handleSendMail();
  };

  return (
    <div className="flex flex-col justify-center items-center text-center px-4 mt-8">
      <Typography className="text-[1.625rem] text-[#033474] font-semibold ">
        Please fill in your details below.
      </Typography>
      <div className="w-[80vw] md:w-[70vwkkkk] mt-8 flex flex-col gap-5 ">
        <Input
          variant="outlined"
          label="Company Name"
          value={formState["cName"]}
          name="cName"
          onChange={handleChangeFormState}
        />
        <Input
          variant="outlined"
          label="Company Website"
          value={formState["url"]}
          type="url"
          name="url"
          onChange={handleChangeFormState}
        />
        <Input
          variant="outlined"
          label="Full Name"
          value={formState["fName"]}
          name="fName"
          onChange={handleChangeFormState}
        />
        <Input
          variant="outlined"
          label="contact Email"
          value={formState["email"]}
          name="email"
          type="email"
          onChange={handleChangeFormState}
        />
        <Input
          variant="outlined"
          label="Phone Number"
          value={formState["phone"]}
          name="phone"
          type="number"
          onChange={handleChangeFormState}
        />
        <Input
          variant="outlined"
          label="Social Id"
          value={formState["social_id"]}
          name="social_id"
          onChange={handleChangeFormState}
        />
        <Textarea
          variant="outlined"
          label="Message"
          value={formState["message"]}
          name="message"
          onChange={handleChangeFormState}
        />
      </div>

      <div className="mt-5">
        <Button
          className="bg-[#212D3F] text-sm  rounded-3xl normal-case"
          onClick={handleSubmit}
        >
          Book a Call
        </Button>
      </div>
    </div>
  );
};

export default ContactInputsContainer;
