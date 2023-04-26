import { supabase } from "@/lib/supabaseClient";
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
  console.log(userInfo);
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { err } = await supabaseClient.auth.signOut();
    if (err) {
      console;
      return;
    }
    console.log("user logged out");
    router.push("/auth/login");
  };

  return (
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
        <Dropdown.Item>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSignOut} />
            <span onClick={handleLogout}>Log Out</span>
          </div>
        </Dropdown.Item>{" "}
      </Dropdown>
    </div>
  );
};

export default ProfileDropDown;
