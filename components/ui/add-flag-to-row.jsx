import { supabase } from "@/lib/supabaseClient";
import { DashboardContext } from "@/pages/_app";
import {
  error_toast,
  sucess_toast,
  warn_toast,
} from "@/util/toastNotification";
import { faBug, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "flowbite-react";
import { useContext, useState } from "react";

const AddFlagToRow = ({ selectedReviews }) => {
  const [addToListOptionName, setAddToListOptionName] = useState(null);
  const { currentApp } = useContext(DashboardContext);

  async function handleConfirmeMovingRows() {
    if (!addToListOptionName) {
      error_toast("Select an option (bug | feature).");
      return;
    }

    if (!selectedReviews.length) {
      error_toast("Try to select at least one row to continue.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("bugs")
        .select("value")
        .eq("app_id", currentApp.id);

      if (error) {
        throw new Error(error.message);
      }

      if (!data.length) {
        console.log("add the first time create bugs");

        await supabase.from("bugs").insert({
          app_id: currentApp.id,
          value: { ...selectedReviews },
        });

        warn_toast(
          "Successfully created a new bugs list for your application."
        );
        sucess_toast("Bugs successfully added to your bugs list.");
      } else {
        console.log("update");
        const prev_bugs = Object.values(data[0]?.value);

        console.log("selected _reviews = ", selectedReviews);
        console.log("prev_bugs = ", prev_bugs);

        const mergedArray = [...prev_bugs, ...selectedReviews];
        const uniqueObject = {};

        mergedArray.forEach((obj, index) => {
          uniqueObject[index] = obj;
        });
        const { error } = await supabase
          .from("bugs")
          .update({ value: uniqueObject })
          .eq("app_id", currentApp.id);
      
      

        if (error) {
          throw new Error(error.message);
        }

        sucess_toast("Bugs successfully added to your bugs list.");
      }
    } catch (error) {
      console.log(error);
      error_toast(error.message);
    }
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-lg font-medium text-main_dark">
        Add the selected rows to the list of:{" "}
      </span>
      <Dropdown
        style={{ background: "rgb(15 23 42 / var(--tw-text-opacity)" }}
        label={
          <div>
            {addToListOptionName ? addToListOptionName : "Choose option"}
          </div>
        }
      >
        <Dropdown.Item onClick={() => setAddToListOptionName("Bugs")}>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faBug} />
            <span className="text-main_dark font-medium">Bugs</span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setAddToListOptionName("Features")}>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faLightbulb} />
            <span className="text-main_dark font-medium">Features</span>
          </div>
        </Dropdown.Item>
      </Dropdown>
      {addToListOptionName && (
        <button
          onClick={handleConfirmeMovingRows}
          className="text-main_dark underline rounded-md px-4 py-2"
        >
          Confirme Action
        </button>
      )}
    </div>
  );
};

export default AddFlagToRow;
