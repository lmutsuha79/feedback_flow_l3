import { supabase } from "@/lib/supabaseClient";
import { DashboardContext } from "@/pages/_app";
import { error_toast, sucess_toast } from "@/util/toastNotification";
import { Button } from "flowbite-react";
import { useContext } from "react";
import useLocalStorage from "use-local-storage";

const RemoveFeature = ({ selectedReviews }) => {
  const { currentApp } = useContext(DashboardContext);

  const [localFeatures, setLocalFeatures] = useLocalStorage("features", {});

  async function handleConfirmeRemoveingFeatures() {
    if (!selectedReviews.length) {
      error_toast("Select at least one row to perform this action");
      return;
    }
    //     get the ids of removed rows
    const selected_rows_ids = selectedReviews.map((json) => json.id);
    const local_fetures = localFeatures.features_arr;
    //     create new bugs array that contains the updated bugs list
    const new_features_list = local_fetures.filter(
      (review) => !selected_rows_ids.includes(review.id)
    );
    //     update the bugs in the db with the new_bugs_list
    const { error } = await supabase
      .from("features")
      .update({ value: new_features_list })
      .eq("app_id", currentApp.id);
    if (error) {
      error_toast(error.message);
      return;
    }
    //     update the bugs in the local storage also
    setLocalFeatures({
      appId: currentApp.id,
      features_arr: [...new_features_list],
    });

    sucess_toast("successfully remove the selected rows from features list");
  }
  return (
    <div className="flex items-center gap-4">
      <span className="text-lg font-medium text-main_dark">
        remove the selected rows from the features list:
      </span>

      <Button
        onClick={handleConfirmeRemoveingFeatures}
        className="bg-main_dark hover:bg-secondary_dark"
      >
        Confirme Action
      </Button>
    </div>
  );
};

export default RemoveFeature;
