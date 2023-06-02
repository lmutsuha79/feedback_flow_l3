import Link from "next/link";

const TopNav = () => {
  return (
    <div>
      <ul className="flex items-center gap-4 text-main_text  transition-colors font-semibold text-base">
        <li>
          <Link className="hover:text-main_dark" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className=" text-main_dark hover:text-main_dark" href="#">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="hover:text-main_dark" href="/about">
            About
          </Link>
        </li>
        {/* <li>
          <a className="hover:text-main_dark" href="#">
            Settings
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default TopNav;
