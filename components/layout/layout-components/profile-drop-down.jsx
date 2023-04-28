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
import { useRouter } from "next/router";

const ProfileDropDown = ({ userInfo }) => {
  // console.log("profile deop down rerender");
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    turnOnLoadingScreen();
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
            <Avatar alt="User settings" img={userInfo.picture} rounded={true} />
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
