"use client";

import { usePolybase } from "@/hooks/polybase";

const ConnectButton = () => {
  const { auth, loggedIn } = usePolybase();

  return (
    <>
      <button
        onClick={auth}
        className=" px-5 py-4 bg-black grid place-items-center rounded-lg"
      >
        {loggedIn ? (
          <p className=" text-white font-semibold">Profile</p>
        ) : (
          <p className=" text-white font-semibold">Login</p>
        )}
      </button>
    </>
  );
};

export default ConnectButton;
