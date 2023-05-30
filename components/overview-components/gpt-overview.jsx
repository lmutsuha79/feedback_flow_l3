import { Button } from "flowbite-react";
import Link from "next/link";

const GptOverView = () => {
  return (
    <div className="mt-8 bg-main_dark text-white rounded-md shadow-md px-4 py-8">
      <div className="w-full h-full grid place-items-center gap-4 py-8">
        <h2></h2>
        <div className="text-center">
          <h3 className="text-lg font-medium">
            Quickly discover what users have said about this app
          </h3>
          <h3 className="text-2xl font-medium">Using AI</h3>
        </div>
        <Link href={"/dashboard/report"}>
          <Button
            className="bg-main_text hover:bg-main_text transform hover:scale-105 transition-transform"
          >
            Discover now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GptOverView;
