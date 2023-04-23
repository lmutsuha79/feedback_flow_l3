import { Button } from "flowbite-react";
import Link from "next/link";

const BackHomeBtn = () => {
  return (
    <Link href="/" className={"absolute top-4 left-4 md:top-8 md:left-8"}>
      {/* <>back home</> */}
      <Button color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-back-up"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
        </svg>

        <span className="ml-1">back home</span>
      </Button>
    </Link>
  );
};

export default BackHomeBtn;
