"use client";
import { usePolybase } from "@/hooks/polybase";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const { createCommunitiesObject, signOut, signIn } = usePolybase();
  useEffect(() => {
    console.log("what");
    (async () => {
      console.log("why");

      createCommunitiesObject({
        id: "quiver_test_0",
        name: "Quiverbliss Communities Object",
        description: "This is a registry of all registered communities",
      });

      console.log("z");
    })();
  }, []);

  const pathname = usePathname();

  useEffect(() => {
    const cleanPath = pathname.split("#")[0].split("?")[0];
    console.log(cleanPath);
  }, [pathname]);

  return (
    <div>
      <div>page</div>

      <button onClick={async () => await signOut()}>sign away</button>
      <button onClick={async () => await signIn()}>sign in</button>
    </div>
  );
};

export default page;
