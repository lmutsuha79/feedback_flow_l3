import { supabase } from "@/lib/supabaseClient";
import {
  error_toast,
  success_toast,
  warn_toast,
} from "@/util/toastNotification";
import { useMemo, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faSearch,
  faBug,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import ReviewRow from "./review-row";
import Image from "next/image";
import SearchReviews from "./search-reviews";
import AddFlagToRow from "./add-flag-to-row";
import { Alert, Rating } from "flowbite-react";

const TableReviews = ({ reviews }) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [selectedReviews, setSelectedReviews] = useState([]);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const mapSentimentToEmoji = (sentiment) => {
    if (sentiment >= 4) {
      return "😍"; // Very positive emoji
    }
    if (sentiment >= 2) {
      return "😄"; // Positive emoji
    }
    if (sentiment > 0) {
      return "🙂"; // Slightly positive emoji
    }
    if (sentiment === 0) {
      return "😐"; // Neutral emoji
    }
    if (sentiment >= -1) {
      return "😔"; // Slightly negative emoji
    }
    if (sentiment >= -4) {
      return "😞"; // Negative emoji
    } else {
      return "😡"; // Very negative emoji
    }
  };

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
      <Alert className="bg-main_dark ">
        <span className="text-white">
          <h3 className="font-medium underline text-lg mb-1">
            Multiple Sort Column Selection: ⌘
          </h3>
          {`
          
           To select multiple columns for sorting, hold down the Ctrl key (Command key on macOS) while clicking on the column headers.
          
          This allows you to apply sorting to multiple columns simultaneously. Release the Ctrl key to finalize your selection.          `}
        </span>
      </Alert>

      <div className="flex justify-between items-center mt-8">
        {/* add selected rows */}
        <AddFlagToRow selectedReviews={selectedReviews} />
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
