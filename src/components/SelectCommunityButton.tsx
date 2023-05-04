import React from "react";

const SelectCommunityButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: any;
}) => {
  return (
    <button {...{onClick}} className=" px-5 py-4 bg-black grid place-items-center rounded-lg">
      <p className=" text-white font-semibold">{children}</p>
    </button>
  );
};

export default SelectCommunityButton;
