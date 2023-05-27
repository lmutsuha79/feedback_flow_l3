import { Alert } from "flowbite-react";

const ReviewsPageHeader = ({ title }) => {
  return (
    <header>
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
      <h2 className="text-main_dark font-medium my-4 text-2xl underline">
        {title}
      </h2>
    </header>
  );
};

export default ReviewsPageHeader;
