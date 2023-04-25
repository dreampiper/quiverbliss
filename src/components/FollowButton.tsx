import React from "react";

const FollowButton = () => {
  return (
    <button className=" px-5 rounded-lg py-3 bg-black flex justify-center items-center w-min text-white gap-4">
      <img src="/add.svg" alt="" />
      <p>Follow</p>
    </button>
  );
};

export default FollowButton;
