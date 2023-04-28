import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Dropdown } from "flowbite-react";
import AddNewAppId from "./add-nex-app-id";
import { useState } from "react";

const SelectAppDropDown = ({
  apps_of_user,
  selectedAppIndex,
  setSelectedAppIndex,
}) => {
  // console.log("slect app render");
  const [ModalStatus, setModalStatus] = useState(false);
  const showModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };
  return (
    <>
      <AddNewAppId
        setSelectedAppIndex={setSelectedAppIndex}
        numberOfApps={apps_of_user.length}
        isActive={ModalStatus}
        close={closeModal}
      />

      <div className="text-main_dark rounded-md p-2 hover:bg-blue_gray transition-colors flex gap-8 items-center cursor-pointer">
        {apps_of_user[selectedAppIndex] && (
          <Dropdown
            label={
              <div className="flex gap-1 items-center">
                <Avatar
                  size={"sm"}
                  img={JSON.parse(apps_of_user[selectedAppIndex].info).icon}
                  rounded={true}
                />
                <span className="text-sm font-medium">
                  {JSON.parse(apps_of_user[selectedAppIndex].info).title}
                </span>
              </div>
            }
            arrowIcon={true}
            inline={true}
          >
            <Dropdown.Header>
              <span className="block text-sm">Personal Apps</span>
            </Dropdown.Header>
            {/* ########################### */}
            {apps_of_user.map((item, index) => (
              <Dropdown.Item
                onClick={() => setSelectedAppIndex(index)}
                className={index === selectedAppIndex ? "bg-blue_gray" : ""}
                key={item.id}
              >
                <div className="flex items-center gap-2">
                  <Avatar
                    size={"xs"}
                    img={JSON.parse(item.info).icon}
                    rounded={true}
                  />{" "}
                  <span>{JSON.parse(item.info).title}</span>
                </div>
              </Dropdown.Item>
            ))}
            {/* ########################### */}
            {/* add new app button */}
            <Dropdown.Divider />
            <Dropdown.Item onClick={showModal}>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faAdd} />
                <span>Add New App</span>
              </div>
            </Dropdown.Item>{" "}
          </Dropdown>
        )}
      </div>
    </>
  );
};

export default SelectAppDropDown;
