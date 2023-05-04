"use client";

import { User, usePolybase } from "@/hooks/polybase";
import { store } from "@/store/store";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useEffect, useState } from "react";
import SelectCommunityButton from "../SelectCommunityButton";
import { useRouter } from "next/navigation";

const SelectCommunityModal = () => {
  const router = useRouter();
  const { getUserRecord, auth } = usePolybase();

  const [open, setOpen] = useState(false);
  const communityId = store((state) => state.communityId);
  const setCommunityId = store((state) => state.setCommunityId);
  const userId = store((state) => state.userId);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setOpen(communityId ? false : true);
  }, [communityId]);

  useEffect(() => {
    if (!userId) return;
    (async () => {
      const user = await getUserRecord(userId);
      setUser(user);
    })();
  }, [userId]);

  async function handleClick(): Promise<void> {
    const body = document.getElementsByTagName("body")[0];
    body.style.pointerEvents = "auto";
    await auth();
  }

  return (
    <AlertDialog.Root {...{ open }}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Select a community
          </AlertDialog.Title>
          <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
            Welcome to studio you&apos;ll need to choose a community you&apos;ve created
            or you can choose to create a new one.
          </AlertDialog.Description>
          <div className="flex flex-col items-start gap-[25px]">
            {user ? (
              <AlertDialog.Action asChild>
                <SelectCommunityButton
                  onClick={() => router.push("/studio/customize/new-community")}
                >
                  Create new community
                </SelectCommunityButton>
              </AlertDialog.Action>
            ) : (
              <div>
                <button onClick={handleClick}>
                  <strong>Login</strong>
                </button>{" "}
                to continue.
              </div>
            )}
            {user && user.communitiesId.length > 0 ? (
              user.communitiesId.map((id, i) => (
                <AlertDialog.Action asChild key={i}>
                  <SelectCommunityButton onClick={() => setCommunityId(id)}>
                    {id}
                  </SelectCommunityButton>
                </AlertDialog.Action>
              ))
            ) : (
              <p>You haven&apos;t created any community yet.</p>
            )}
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
export default SelectCommunityModal;
