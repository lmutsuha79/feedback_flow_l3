import { useContext, useEffect, useMemo, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { FilterMatchMode } from "primereact/api";

import Image from "next/image";
import SearchReviews from "./search-reviews";
import AddFlagToRow from "./add-flag-to-row";
import { Badge, Rating } from "flowbite-react";
import useLocalStorage from "use-local-storage";
import ReviewsPageHeader from "./reviews-page-header";
import RemoveBug from "./remove-bug";
import RemoveFeature from "./remove-feature";
import { mapSentimentToEmoji } from "@/util/mapSentimentToEmoji.js";

const TableReviews = ({
  reviews,
  title,
  addflagFunctionality,
  removeBugFunctionality,
  removeFeatureFunctionality,
}) => {
  // const { currentApp } = useContext(DashboardContext);
  const [localBugs, setLocalBugs] = useLocalStorage("bugs", {});
  const [localFeatures, setLocalFeatures] = useLocalStorage("features", {});

  const [selectedReviews, setSelectedReviews] = useState([]);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  return (
    <main className="">
      <ReviewsPageHeader title={title} />

      <div className="flex justify-between items-center mt-8">
        {/* add selected rows */}
        {/* turn on the add flag when the  FlagFunctionalityOff is false or not selected */}
        {addflagFunctionality && (
          <AddFlagToRow selectedReviews={selectedReviews} />
        )}
        {removeBugFunctionality && (
          <RemoveBug selectedReviews={selectedReviews} />
        )}
        {removeFeatureFunctionality && (
          <RemoveFeature selectedReviews={selectedReviews} />
        )}

        {/* to insure the search bar is in the right */}
        <div></div>

        {/* search bar */}
        <SearchReviews
          onGlobalFilterChange={onGlobalFilterChange}
          globalFilterValue={globalFilterValue}
        />
      </div>

      <DataTable
        dataKey="id"
        // selectionMode="multiple"
        selectionMode="checkbox"
        selection={selectedReviews}
        onSelectionChange={(e) => setSelectedReviews(e.value)}
        metaKeySelection={false}
        dragSelection
        filters={filters}
        filterDisplay="row"
        globalFilterFields={[
          "date",
          "userName",
          "score",
          "version",
          "text",
          "replyText",
          "sentiment",
        ]}
        emptyMessage="no results found"
        className="mt-6"
        sortMode="multiple"
        tableStyle={{ maxHeight: "50px" }}
        value={reviews}
        scrollable
        scrollHeight="600px"
        stripedRows
        paginator
        rows={10}
        rowsPerPageOptions={[10, 25, 50, 100]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        paginatorLeft={paginatorLeft}
        paginatorRight={paginatorRight}
      >
        <Column selectionMode="multiple"></Column>

        <Column
          style={{ width: "50px" }}
          field={"sentiment"}
          body={(review) => (
            <span className="text-[40px]">
              {mapSentimentToEmoji(review.sentiment)}
              <span>{review.sentiment}</span>
            </span>
          )}
          header="Sentiment"
          sortable
        ></Column>

        <Column
          style={{ width: "50px" }}
          field={""}
          body={(review) => {
            // localBugs.bugs_arr.forEach((bug_obj) =>
            //   bug_obj.id == review.id ? true : false
            // );
            return (
              <div
                className="flex flex-col gap-2"
                id={`container_flag_id_${review.id}`}
              >
                {localBugs?.bugs_arr?.some((obj) => obj.id == review.id) && (
                  <Badge className="badge_bug " size={"lg"} color="failure">
                    Bug
                  </Badge>
                )}
                {localFeatures?.features_arr?.some(
                  (obj) => obj.id == review.id
                ) && (
                  <Badge className="badge_feature " size={"lg"} color="success">
                    Feature
                  </Badge>
                )}

                {/* <Badge className="badge_feature " size={"lg"} color="success">
                  Feature
                </Badge> */}
              </div>
            );
          }}
          header="Flag"
          // sortable
        ></Column>

        <Column
          style={{ width: "50px" }}
          field={(review) => (
            <Image
              src={review.userImage}
              alt={"user_img"}
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          header="Avatar"
        ></Column>
        <Column
          style={{ width: "50px" }}
          field={"userName"}
          body={(review) => <span className="text-sm ">{review.userName}</span>}
          header="Username"
          sortable
        ></Column>
        <Column
          style={{ width: "50px" }}
          field="score"
          sortable
          body={(review) => {
            const stars = [];

            for (let i = 0; i < 5; i++) {
              stars.push(<Rating.Star key={i} filled={i < review.score} />);
            }

            return <Rating>{stars}</Rating>;
          }}
          header="Rating"
        ></Column>
        <Column
          style={{ width: "50px" }}
          field="version"
          sortable
          body={(review) => <span className="text-sm ">{review.version}</span>}
          header="Version"
        ></Column>
        <Column
          style={{ width: "100px" }}
          field="date"
          sortable
          body={(review) => (
            <span className="text-sm w-[100px]">
              {new Date(review?.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
          header="Date"
        ></Column>
        <Column
          style={{ width: "250px" }}
          field={(review) => (
            <p className="whitespace-pre-line w-[250px] p-2">{review.text}</p>
          )}
          header="Feedback"
        ></Column>
        <Column
          style={{ width: "250px" }}
          field={(review) =>
            review.replyText ? (
              <p className="whitespace-pre-line w-[250px] p-2">
                {review.replyText}
              </p>
            ) : (
              <p className="p-2">no Replay</p>
            )
          }
          header="Repay"
        ></Column>
        <Column
          style={{ width: "50px", overflow: "hidden" }}
          field={(review) => (
            <a
              href={review.url}
              target="__blank"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              go_to_url
            </a>
          )}
          header="Url"
        ></Column>
      </DataTable>
    </main>
  );
};

export default TableReviews;
