"use client";
import React from "react";
import { Alert } from "../../theme/themeRegistry";

export function AlertCustomAnimation(props) {
  const { open, onClose, body, errorAlert } = props;

  return (
    <div className={`fixed z-50 top-10 right-4 px-4 py-2 rounded-md `}>
      <Alert
        open={open}
        onClose={onClose}
        color={errorAlert ? "red" : "gray"}
        animate={{
          mount: { y: 0 },
          unmount: { y: 50 },
        }}>
        {body}
      </Alert>
    </div>
  );
}
