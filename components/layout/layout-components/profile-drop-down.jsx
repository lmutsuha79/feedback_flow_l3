import LoadingScreen from "@/components/ui/loading-screen";
import { supabase } from "@/lib/supabaseClient";
import {
  turnOffLoadinScreen,
  turnOnLoadingScreen,
} from "@/util/loadingFunctions";
import {
  faGear,
  faPerson,
  faSignOut,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Avatar, Dropdown } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/router";

const ProfileDropDown = ({ userInfo, setlocalSelectedAppIndex }) => {
  // console.log("profile deop down rerender");
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    turnOnLoadingScreen();
    // reset the local storage keys and vaues
    console.log("resting all local storage values ")
    setlocalSelectedAppIndex(0)

    const { err } = await supabaseClient.auth.signOut();
    if (err) {
      turnOffLoadinScreen();
      console;
      return;
    }
    console.log("user logged out");
    await router.push("/auth/login");
    turnOffLoadinScreen();
  };

  return (
    <>
      <div className="flex justify-end">
        <Dropdown
          label={
            // <Avatar alt="User settings" img={userInfo.picture} rounded={true} />
            <Image
              alt="user_img"
              width={38}
              height={38}
              src={userInfo.picture}
              className="rounded-full"
            />
          }
          arrowIcon={false}
          inline={true}
        >
          <Dropdown.Header>
            <span className="block text-sm">{userInfo.full_name}</span>
            <span className="block truncate text-sm font-medium">
              {userInfo.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPerson} />
              <span>Account</span>
            </div>
          </Dropdown.Item>{" "}
          <Dropdown.Item>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faWallet} />
              <span>Billing</span>
            </div>
          </Dropdown.Item>{" "}
          <Dropdown.Item>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faGear} />
              <span>Settings</span>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>
            <button className="flex items-center gap-2">
              <FontAwesomeIcon icon={faSignOut} />
              <span>Log Out</span>
            </button>
          </Dropdown.Item>{" "}
        </Dropdown>
      </div>
    </>
  );
};

export default ProfileDropDown;
