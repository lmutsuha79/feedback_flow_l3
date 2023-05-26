import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputText } from "primereact/inputtext";

const SearchReviews = ({globalFilterValue,onGlobalFilterChange}) => {
      return (
            <div className="flex justify-end items-center">
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
      );
}

export default SearchReviews;