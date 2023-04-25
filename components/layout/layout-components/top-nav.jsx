const TopNav = () => {
  return (
    <div>
      <ul className="flex items-center gap-4 text-main_text  transition-colors font-semibold text-base">
        <li>
          <a className="text-main_dark hover:text-main_dark" href="#">
            Overview
          </a>
        </li>
        <li>
          <a className="hover:text-main_dark" href="#">
            Customers
          </a>
        </li>
        <li>
          <a className="hover:text-main_dark" href="#">
            Products
          </a>
        </li>
        <li>
          <a className="hover:text-main_dark" href="#">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
