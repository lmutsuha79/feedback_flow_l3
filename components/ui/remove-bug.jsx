import { supabase } from "@/lib/supabaseClient";
import { DashboardContext } from "@/pages/_app";
import { error_toast, sucess_toast } from "@/util/toastNotification";
import { Button } from "flowbite-react";
import { useContext } from "react";
import useLocalStorage from "use-local-storage";

const RemoveBug = ({ selectedReviews }) => {
  const { currentApp } = useContext(DashboardContext);

  const [localBugs, setLocalBugs] = useLocalStorage("bugs", {});

  async function handleConfirmeRemoveingBugs() {
    if (!selectedReviews.length) {
      error_toast("Select at least one row to perform this action");
      return;
    }
    //     get the ids of removed rows
    const selected_rows_ids = selectedReviews.map((json) => json.id);
    const local_bugs = localBugs.bugs_arr;
    //     create new bugs array that contains the updated bugs list
    const new_bugs_list = local_bugs.filter(
      (review) => !selected_rows_ids.includes(review.id)
    );
    //     update the bugs in the db with the new_bugs_list
    const { error } = await supabase
      .from("bugs")
      .update({ value: new_bugs_list })
      .eq("app_id", currentApp.id);
    if (error) {
      error_toast(error.message);
      return;
    }
    //     update the bugs in the local storage also
    setLocalBugs({ appId: currentApp.id, bugs_arr: [...new_bugs_list] });

    sucess_toast("successfully remove the selected rows from bugs list");

  }
  return (
    <div className="flex items-center gap-4">
      <span className="text-lg font-medium text-main_dark">
        remove the selected rows from the bugs list:
      </span>

      {/* <button
        onClick={handleConfirmeRemoveingBugs}
        className="text-main_dark underline rounded-md px-4 py-2"
      >
        Confirme Action
      </button> */}
      <Button
        onClick={handleConfirmeRemoveingBugs}
        className="bg-main_dark hover:bg-secondary_dark"
      >
        Confirme Action
      </Button>
    </div>
  );
};

export default RemoveBug;
