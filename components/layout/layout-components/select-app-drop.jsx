import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Dropdown } from "flowbite-react";
import AddNewAppId from "./add-nex-app-id";
import { useState } from "react";

const SelectAppDropDown = () => {
  const [ModalStatus, setModalStatus] = useState(false);
  const showModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };
  return (
    <>
      <AddNewAppId isActive={ModalStatus} close={closeModal} />

      <div className="text-main_dark rounded-md p-2 hover:bg-blue_gray transition-colors flex gap-8 items-center cursor-pointer">
        <Dropdown
          label={
            <div className="flex gap-1 items-center">
              <Avatar
                size={"sm"}
                img="https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/19/46/0c/19460cf4-a65c-d963-52d1-43649fbd1653/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.jpg"
                rounded={true}
              />
              <span className="text-sm font-medium">Sleep Cycle</span>
            </div>
          }
          arrowIcon={true}
          inline={true}
        >
          <Dropdown.Header>
            <span className="block text-sm">Personal Apps</span>
          </Dropdown.Header>
          <Dropdown.Item className="bg-blue_gray">
            <div className="flex items-center gap-2">
              <Avatar
                size={"xs"}
                img="https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/19/46/0c/19460cf4-a65c-d963-52d1-43649fbd1653/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.jpg"
                rounded={true}
              />
              <span>Cleep Cycle</span>
            </div>
          </Dropdown.Item>{" "}
          <Dropdown.Item>
            <div className="flex items-center gap-2">
              <Avatar
                size={"xs"}
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgni5c9OI6kr3t-XgBvg9wysDg3wIwfBFp4d8SoeWvn-Uk05J5abYXs9WYmp9nOAFiUrc&usqp=CAU"
                rounded={true}
              />{" "}
              <span>Super Mario</span>
            </div>
          </Dropdown.Item>{" "}
          <Dropdown.Divider />
          <Dropdown.Item>
            <div onClick={showModal} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faAdd} />
              <span>Add New App</span>
            </div>
          </Dropdown.Item>{" "}
        </Dropdown>
      </div>
    </>
  );
};

export default SelectAppDropDown;
