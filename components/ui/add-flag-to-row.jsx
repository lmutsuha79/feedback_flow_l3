import { supabase } from "@/lib/supabaseClient";
import { DashboardContext } from "@/pages/_app";
import mergeArrays from "@/util/merge-array-without-duplication";
import {
  error_toast,
  info_toast,
  sucess_toast,
  warn_toast,
} from "@/util/toastNotification";
import { faBug, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "flowbite-react";
import { useContext, useState } from "react";
import useLocalStorage from "use-local-storage";

const AddFlagToRow = ({ selectedReviews }) => {
  async function addToBugs() {
    try {
      // adding the selected rows as bugs to the db
      const { data, error } = await supabase
        .from("bugs")
        .select("value")
        .eq("app_id", currentApp.id);

      if (error) {
        throw new Error(error.message);
      }
      // if no previews bugs were found in the db bugs table
      if (!data.length) {
        console.log("add the first time create bugs");
        // add the new bugs to the db
        const { error } = await supabase.from("bugs").insert({
          app_id: currentApp.id,
          value: { ...selectedReviews },
        });
        if (error) {
          throw new Error(error.message);
        }
        //   insert the new bugs to the local storage
        setLocalBugs({ appId: currentApp.id, bugs_arr: [...selectedReviews] });

        info_toast(
          "Successfully created a new bugs list for your application."
        );
        sucess_toast("Bugs successfully added to your bugs list.");
      } else {
        console.log("update");
        const prev_bugs = Object.values(data[0]?.value);

        console.log("selected _reviews = ", selectedReviews);
        console.log("prev_bugs = ", prev_bugs);

        const merged_array_into_obj = mergeArrays(
          prev_bugs,
          selectedReviews
        ).reduce((obj, value, index) => {
          obj[index] = value;
          return obj;
        }, {});
        //   console.log("merged array", merged_array_into_obj);
        const { error } = await supabase
          .from("bugs")
          .update({ value: merged_array_into_obj })
          .eq("app_id", currentApp.id);
        //   console.log("data", data);

        if (error) {
          throw new Error(error.message);
        }
        setLocalBugs({
          appId: currentApp.id,
          bugs_arr: [...Object.values(merged_array_into_obj)],
        });

        sucess_toast("Bugs successfully added to your bugs list.");
      }
    } catch (error) {
      console.log(error);
      error_toast(error.message);
    }
  }
  async function addToFeatures() {
    try {
      // adding the selected rows as bugs to the db
      const { data, error } = await supabase
        .from("features")
        .select("value")
        .eq("app_id", currentApp.id);

      if (error) {
        throw new Error(error.message);
      }
      // if no previews features were found in the db features table
      if (!data.length) {
        console.log("add the first time create features");
        // add the new features to the db
        const { error } = await supabase.from("features").insert({
          app_id: currentApp.id,
          value: { ...selectedReviews },
        });
        if (error) {
          throw new Error(error.message);
        }
        //   insert the new features to the local storage
        setLocalFeatures({
          appId: currentApp.id,
          features_arr: [...selectedReviews],
        });

        info_toast(
          "Successfully created a new features list for your application."
        );
        sucess_toast("features successfully added to your features list.");
      } else {
        console.log("update");
        const prev_features = Object.values(data[0]?.value);

        console.log("selected _reviews = ", selectedReviews);
        console.log("prev_features = ", prev_features);

        const merged_array_into_obj = mergeArrays(
          prev_features,
          selectedReviews
        ).reduce((obj, value, index) => {
          obj[index] = value;
          return obj;
        }, {});
        //   console.log("merged array", merged_array_into_obj);
        const { error } = await supabase
          .from("features")
          .update({ value: merged_array_into_obj })
          .eq("app_id", currentApp.id);
        //   console.log("data", data);

        if (error) {
          throw new Error(error.message);
        }
        setLocalFeatures({
          appId: currentApp.id,
          features_arr: [...Object.values(merged_array_into_obj)],
        });

        sucess_toast("features successfully added to your features list.");
      }
    } catch (error) {
      console.log(error);
      error_toast(error.message);
    }
  }
  const [addToListOptionName, setAddToListOptionName] = useState(null);
  const { currentApp } = useContext(DashboardContext);
  const [localBugs, setLocalBugs] = useLocalStorage("bugs", {});
  const [localFeatures, setLocalFeatures] = useLocalStorage("features", {});

  async function handleConfirmeMovingRows() {
    if (!addToListOptionName) {
      error_toast("Select an option (bug | feature).");
      return;
    }

    if (!selectedReviews.length) {
      error_toast("Try to select at least one row to continue.");
      return;
    }

    if (addToListOptionName === "bugs") {
      await addToBugs();
    }
    if (addToListOptionName === "features") {
      await addToFeatures();
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
        <Dropdown.Item onClick={() => setAddToListOptionName("bugs")}>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faBug} />
            <span className="text-main_dark font-medium">Bugs</span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setAddToListOptionName("features")}>
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
