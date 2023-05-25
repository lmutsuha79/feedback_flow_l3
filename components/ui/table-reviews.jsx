import {
  faArrowDown,
  faArrowUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating, Table, Alert } from "flowbite-react";
import { useEffect, useMemo, useState } from "react";
import ReviewRow from "./review-row";
import Image from "next/image";
// import DataTable from "react-data-table-component";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";

const TableReviews = ({ reviews }) => {
  //   const [filteredReviews, setFilteredReviews] = useState([...reviews]);

  const data = useMemo(() => reviews, []);
  console.log(data);
  const columns = [
    {
      name: "Avatar",

      selector: (row) => (
        <Image
          width={32}
          height={32}
          src={row.userImage}
          alt={row.userName + "_image"}
          className="rounded-full w-8 h-8"
        />
      ),
      // grow: 0.5
      width: "fit-content",
    },
    {
      name: "UserName",
      selector: (row) => (
        <span className="whitespace-pre-line">{row.userName}</span>
      ),
      sortable: true,
      width: "130px",
    },
    {
      name: "Score",
      selector: (row) => row.score,
      width: "120px",
      cell: (row) => {
        const stars = [];

        for (let i = 0; i < 5; i++) {
          stars.push(<Rating.Star key={i} filled={i < row.score} />);
        }

        return <Rating className="fill-black">{stars}</Rating>;
      },
      sortable: true,
    },

    {
      name: "Version",
      selector: (row) => row.version,
      width: "100px",
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
      width: "100px",
      overflow: "scroll",
    },
    {
      name: "Link",
      width: "100px",

      selector: (row) => (
        <a
          href={row.url}
          target="__blank"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          go_to_url
        </a>
      ),
    },
    {
      name: "Feedback",
      selector: (row) => (
        <p
          className={`w-[250px] whitespace-pre-line px-2 feedback_text_id_${row.id} `}
        >
          {row.text}
        </p>
      ),
      // width: "250px",
    },
    {
      name: "Replay",
      selector: (row) => row.replyText,
      cell: (row) =>
        row.replyText ? (
          <p
            className={`w-[250px] whitespace-pre-line p-2 replay_text_id_${row.id}`}
          >
            {row.replyText}
          </p>
        ) : (
          <span>no replay</span>
        ),

      width: "250px",
    },
  ];

  const [hoveredRow, setHoveredRow] = useState(null);

  const handleRowHover = (row) => {
    setHoveredRow(row);
    document.querySelector(`.feedback_text_id_${row.id}`).style.whiteSpace =
      "break-spaces";
    // ("break-word");
    console.log(row);
  };

  const handleRowLeave = (row) => {
    setHoveredRow(null);
    document.querySelector(`.feedback_text_id_${row.id}`).style.whiteSpace =
      "nowrap";
    // console.log(row);
  };

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  // const [filters, setFilters] = useState({});
  // const handleFilterChange = (columnName, filterValue) => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [columnName]: filterValue,
  //   }));
  // };
  // const filteredData = data.filter((row) => {
  //   return Object.entries(filters).every(([columnName, filterValue]) => {
  //     // Apply the filter condition for each column
  //     const rowValue = row[columnName];
  //     return rowValue.toLowerCase().includes(filterValue.toLowerCase());
  //   });
  // });

  return (
    <main className="">
      <Alert className="" className="bg-main_dark ">
        <span className="text-white">
          <h3 className="font-medium underline text-lg mb-1">
            Multiple Sort Column Selection: ⌘
          </h3>
          {`
          
           To select multiple columns for sorting, hold down the Ctrl key (Command key on macOS) while clicking on the column headers.
          
          This allows you to apply sorting to multiple columns simultaneously. Release the Ctrl key to finalize your selection.          `}
        </span>
      </Alert>

      <div className="flex justify-end items-center mt-8">
        <span className="p-input-icon-left">
          <FontAwesomeIcon icon={faSearch} />
          <InputText
          className="border-main_dark ring-black focus:ring-black"
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Search any thing here ..."
          />
        </span>
      </div>
      <DataTable
        dataKey="id"
        filters={filters}
        filterDisplay="row"
        // loading={"loading"}
        globalFilterFields={[
          "date",
          "userName",
          "score",
          "version",
          "text",
          "replyText",
        ]}
        // header={header}
        emptyMessage="No customers found."
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
              {review.date}
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

      {/* // apply the table props */}

      {/* <Table className="mt-8" striped={true}>
        <Table.Head>
          <Table.HeadCell>avatar</Table.HeadCell>
          <Table.HeadCell>username</Table.HeadCell>
          <Table.HeadCell>score</Table.HeadCell>
          <Table.HeadCell>text</Table.HeadCell>
          <Table.HeadCell>
            <span>date</span>{" "}
            <button>
              {selectedFilters.dateOrder === "newFirst" ? (
                <FontAwesomeIcon icon={faArrowDown} />
              ) : (
                <FontAwesomeIcon icon={faArrowUp} />
              )}
            </button>
          </Table.HeadCell>
          <Table.HeadCell>version</Table.HeadCell>
          <Table.HeadCell>replay</Table.HeadCell>
          <Table.HeadCell>url</Table.HeadCell>
         
        </Table.Head>
        <Table.Body className="divide-y">
          {reviews.map((review, index) => (
            <ReviewRow key={review.id} review={review} />
          ))}
        </Table.Body>
      </Table> */}
    </main>
  );
};

export default TableReviews;
