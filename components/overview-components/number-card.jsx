import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NumberCard = ({ icon, title, children }) => {
  return (
    <div className="bg-white px-4 py-8 border border-gray-200 shadow-md transform hover:scale-105 transition-transform rounded-md cursor-pointer">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-main_dark text-sm mb-2">{title}</h3>
        <FontAwesomeIcon className=" text-main_dark" icon={icon} />
      </div>
      {children}
    </div>
  );
};

export default NumberCard;
