"use client";

import { usePolybase } from "@/hooks/polybase";

const ConnectButton = () => {
  const { auth, loggedIn } = usePolybase();

  return (
    <>
      <button
        onClick={auth}
        className=" px-5 py-4 bg-white grid place-items-center rounded-lg"
      >
        {loggedIn ? (
          <p className=" text-[#050505] font-semibold">Profile</p>
        ) : (
          <p className=" text-[#050505] font-semibold">Login</p>
        )}
      </button>
    </>
  );
};

export default ConnectButton;
