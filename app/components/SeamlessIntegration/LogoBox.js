import React from "react";

const LogoBox = ({ src, alt }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-md flex justify-center items-center">
      <img src={src} alt={alt} className="h-8 object-contain" />
    </div>
  );
};

export default LogoBox;
