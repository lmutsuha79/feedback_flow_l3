import {
  faAdd,
  faArrowsUpDown,
  faGear,
  faPerson,
  faSignOut,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Dropdown } from "flowbite-react";

const ProfileDropDown = () => {
  return (
    <div className="flex justify-end">
      <Dropdown
        label={
          <Avatar
            alt="User settings"
            img="https://yasser-dev-app.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile2.3be28eea.png&w=1920&q=75"
            rounded={true}
          />
        }
        arrowIcon={false}
        inline={true}
      >
        <Dropdown.Header>
          <span className="block text-sm">Khelil Yasser</span>
          <span className="block truncate text-sm font-medium">
            khelilyasser79@gmail.com
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
            <span>Log Out</span>
          </div>
        </Dropdown.Item>{" "}
      </Dropdown>
    </div>
  );
};

export default ProfileDropDown;
