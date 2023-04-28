import {
  turnOffLoadinScreen,
  turnOnLoadingScreen,
} from "@/util/loadingFunctions";
import { error_toast, sucess_toast } from "@/util/toastNotification";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Tooltip } from "flowbite-react";
import { toast } from "react-toastify";

const AddNewAppId = ({ isActive, close }) => {
  async function submitAddingNewApp() {
    turnOnLoadingScreen();

    try {
      const appId = document.getElementById("appId").value.trim();
      if (appId == "") {
        throw new Error("please entre a valid app id ");
      }
      const res = await fetch("/api/get-app-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          appId,
        }),
      });

      if (res.status === 400) {
        const { err } = await res.json();
        console.log(err);
        throw new Error(err);
      }
      const data = await res.json();
      console.log(data);
      document.getElementById("appId").value = "";
      sucess_toast("your new app was added successfully");
      close();
    } catch (err) {
      console.log("the error from catch is " + err);
      error_toast(err.toString());
    }
    turnOffLoadinScreen();
  }
  return (
    <Modal show={isActive} size="md" popup={true} onClose={close}>
      <Modal.Header>
        <div className="p-4">
          <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <h2 className="text-main_dark text-lg font-semibold leading-none tracking-tight">
              Create team
            </h2>
            <p className="text-sm font-normal text-main_text">
              Add a new team to manage products and customers.
            </p>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label
                  className="text-sm text-main_dark font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="appId"
                >
                  App Id
                </label>
                <Tooltip
                  content={
                    <div className="">
                      <img src="https://cdn.techmesto.com/wp-content/uploads/2018/05/Play-Store-package-name.jpg" />
                    </div>
                  }
                  trigger="hover"
                >
                  <FontAwesomeIcon
                    icon={faQuestion}
                    size="xs"
                    className="text-main_dark cursor-pointer"
                  />
                </Tooltip>
              </div>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-main_text file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="appId"
                placeholder="com.northcube.sleepcycle"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button
            onClick={close}
            className="bg-white hover:bg-blue_gray text-main_dark inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input   h-10 py-2 px-4"
          >
            Cancel
          </button>
          <button
            onClick={submitAddingNewApp}
            className="bg-main_dark hover:bg-secondary_dark text-white text-main_textinline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background  h-10 py-2 px-4"
            type="submit"
          >
            Continue
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddNewAppId;
