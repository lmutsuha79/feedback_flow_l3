import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
const ReviewsShower = () => {
  return (
    <>
      <header>
        <h3 className="text-main_dark font-medium text-xl">Recent Feedbacks</h3>
        <span className="text-main_text font">
          You made 265 sales this month.
        </span>
      </header>
      <ul className="mt-2 space-y-2">
        <li className="flex justify-between  items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={
                "https://play-lh.googleusercontent.com/a-/AD_cMMTrJeVYzZHRINMDJa_28jv9bW_LrFSoxFSZiEtKZw"
              }
              alt="user_img"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-main_dark">Olivia Martin</span>
              <span className="text-main_text text-sm">
                olivia.martin@email.com
              </span>
            </div>
          </div>
          <span className="text-2xl text-main_dark">😄2</span>
        </li>
        <li className="flex justify-between  items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={
                "https://play-lh.googleusercontent.com/a-/AD_cMMTrJeVYzZHRINMDJa_28jv9bW_LrFSoxFSZiEtKZw"
              }
              alt="user_img"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-main_dark">Olivia Martin</span>
              <span className="text-main_text text-sm">
                olivia.martin@email.com
              </span>
            </div>
          </div>
          <span className="text-2xl text-main_dark">😄2</span>
        </li>
        <li className="flex justify-between  items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={
                "https://play-lh.googleusercontent.com/a-/AD_cMMTrJeVYzZHRINMDJa_28jv9bW_LrFSoxFSZiEtKZw"
              }
              alt="user_img"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-main_dark">Olivia Martin</span>
              <span className="text-main_text text-sm">
                olivia.martin@email.com
              </span>
            </div>
          </div>
          <span className="text-2xl text-main_dark">😄2</span>
        </li>
        <li className="flex justify-between  items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={
                "https://play-lh.googleusercontent.com/a-/AD_cMMTrJeVYzZHRINMDJa_28jv9bW_LrFSoxFSZiEtKZw"
              }
              alt="user_img"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-main_dark">Olivia Martin</span>
              <span className="text-main_text text-sm">
                olivia.martin@email.com
              </span>
            </div>
          </div>
          <span className="text-2xl text-main_dark">😄2</span>
        </li>
        <li className="flex justify-between  items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={
                "https://play-lh.googleusercontent.com/a-/AD_cMMTrJeVYzZHRINMDJa_28jv9bW_LrFSoxFSZiEtKZw"
              }
              alt="user_img"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-main_dark">Olivia Martin</span>
              <span className="text-main_text text-sm">
                olivia.martin@email.com
              </span>
            </div>
          </div>
          <span className="text-2xl text-main_dark">😄2</span>
        </li>
        <li>
          <Link
            className="text-main_dark cursor-pointer hover:underline flex gap-2 items-center"
            href={"/dashboard/reviews"}
          >
            <FontAwesomeIcon icon={faEye} />
            <span>Show more</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ReviewsShower;
