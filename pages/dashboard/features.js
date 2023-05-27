import DashboardLayout from "@/components/layout/dashboard-layout";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../_app";
import useLocalStorage from "use-local-storage";
import { Spinner } from "flowbite-react";
import TableReviews from "@/components/ui/table-reviews";
const features = () => {
  const { currentApp } = useContext(DashboardContext);
  const [localFeatures, setLocalFeatures] = useLocalStorage("features", {});

  const features = localFeatures.features_arr;

  return (
    <DashboardLayout>
      {features?.length ? (
        <TableReviews
          title="Features List"
          reviews={features}
          removeFeatureFunctionality={true}
        />
      ) : (
        //   <TableReviews reviews={bugs} FlagFunctionalityOff={true} />
        <div className=" flex justify-center gap-4 pt-8">
          <Spinner
            className="fill-main_dark"
            color="in"
            aria-label="Info spinner example"
          />{" "}
          <span className="text-main_dark">Loading the bugs ...</span>
        </div>
      )}
    </DashboardLayout>
  );
};

export default features;
