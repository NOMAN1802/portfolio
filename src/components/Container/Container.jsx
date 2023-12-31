/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-80 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;