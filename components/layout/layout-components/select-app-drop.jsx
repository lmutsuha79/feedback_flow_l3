import {
  faAdd,
  faDeleteLeft,
  faTrash,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Dropdown } from "flowbite-react";
import AddNewAppId from "./add-nex-app-id";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { error_toast, sucess_toast } from "@/util/toastNotification";
import { useUser } from "@supabase/auth-helpers-react";
import { supabase } from "@/lib/supabaseClient";
import css from "styled-jsx/css";

const SelectAppDropDown = ({
  apps_of_user,
  selectedAppIndex,
  setSelectedAppIndex,
  showModal,
  setlocalSelectedAppIndex,
}) => {
  // console.log("slect app render");
  const router = useRouter();
  const user = useUser();

  function handleAppItemClick(index) {
    setSelectedAppIndex(index);
    setlocalSelectedAppIndex(index);
    router.push("/dashboard/reviews");
  }
  const accept = () => {
    deleteApp(apps_of_user[selectedAppIndex].id);
  };

  async function deleteApp(id) {
    //1 check if the current user is the app owner
    if (apps_of_user[selectedAppIndex].user_id === user.id) {
      const { error } = await supabase.from("apps").delete().eq("id", id);
      if (error) {
        error_toast(error.message);
        return;
      }
      sucess_toast("the app was successfully deleted");
      setlocalSelectedAppIndex(0);
      setSelectedAppIndex(0);
    } else {
      error_toast("you dont have permission to delete this app");
      return;
    }

    // 2change the selected app to update the data in the local storage
  }

  const reject = () => {};
  const confirmRemove = () => {
    confirmDialog({
      message: `Are you sure you want to remove the app`,
      header: "Delete Confirmation",
      icon: <FontAwesomeIcon icon={faWarning} />,
      accept,
      reject,
    });
  };

  return (
    <>
      {apps_of_user.length === 0 ? (
        <>
          <Button onClick={showModal} color="light">
            <FontAwesomeIcon icon={faAdd} />
            <span className="ml-1">Add new app</span>
          </Button>
        </>
      ) : (
        <>

          <ConfirmDialog />

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
                    onClick={() => handleAppItemClick(index)}
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
                <Dropdown.Divider />
                <Dropdown.Item className="" onClick={confirmRemove}>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faTrash} />
                    <span>Remove The Current App</span>
                  </div>
                </Dropdown.Item>{" "}
              </Dropdown>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SelectAppDropDown;
