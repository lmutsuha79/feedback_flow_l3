import {
  faComment,
  faDashboard,
  faFile,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";

const HeaderTabs = () => {
  return (
    <div className="">
      {/* <Button.Group>
        <Button className="flex items-center bg-main_dark hover:bg-main_dark">
          <FontAwesomeIcon icon={faDashboard} />
          <span className="ml-1">Overview</span>
        </Button>
        <Button
          pill={false}
          className=" flex items-center text-main_dark hover:bg-main_dark hover:text-white "
          color="gray"
        >
          <FontAwesomeIcon icon={faComment} />
          <span className="ml-1">Reviews</span>
        </Button>
        <Button
          className="flex items-center text-main_dark hover:bg-main_dark hover:text-white "
          color="gray"
        >
          <FontAwesomeIcon icon={faFile} />
          <span className="ml-1">Report</span>
        </Button>
        <Button
          className="flex items-center text-main_dark hover:bg-main_dark hover:text-white "
          color="gray"
        >
          <FontAwesomeIcon icon={faQuestion} />
          <span className="ml-1">About</span>
        </Button>
      </Button.Group> */}

      <ul className="flex w-fit items-center rouned-lg border">
        <li className="rouned-md text-base font-medium  text-white  bg-main_dark transition-colors flex items-center cursor-pointer border-r p-2 ">
          <FontAwesomeIcon icon={faDashboard} />
          <span className="ml-1">Overview</span>
        </li>
        <li className="rouned-md text-base font-medium text-main_dark hover:text-white bg-white hover:bg-main_dark transition-colors flex items-center cursor-pointer border-r p-2 ">
          <FontAwesomeIcon icon={faComment} />
          <span className="ml-1">Reviews</span>
        </li>
        <li className="rouned-md text-base font-medium text-main_dark hover:text-white bg-white hover:bg-main_dark transition-colors flex items-center cursor-pointer border-r p-2 ">
          <FontAwesomeIcon icon={faFile} />
          <span className="ml-1">Report</span>
        </li>
        <li className="rouned-md text-base font-medium text-main_dark hover:text-white bg-white hover:bg-main_dark transition-colors flex items-center cursor-pointer border-r p-2 ">
          <FontAwesomeIcon icon={faQuestion} />
          <span className="ml-1">Info</span>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTabs;
