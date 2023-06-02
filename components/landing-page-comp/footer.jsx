import Image from "next/image";
import Link from "next/link";

const Footer = () => {
      return (
            <footer>
            <div className="mx-8 py-4 mt-[100px]">
              <div className="flex flex-col justify-center items-center gap-2">
                <Image
                  src={"/images/logo-black-mini.png"}
                  alt="logo_feedback_flow"
                  width={100}
                  height={50}
                  draggable="false"
                  // className="h-[120px]"
                />
                <p className="text-main_dark ">
                  Built by{" "}
                  <Link
                    href={"https://github.com/lmutsuha79/"}
                    className="font-medium"
                    target="__blank"
                  >
                    lmutsuha79 & zino
                  </Link>
                  . Hosted on{" "}
                  <Link
                    href={"https://vercel.com/"}
                    className="font-medium"
                    target="__blank"
                  >
                    varcel
                  </Link>
                  . Illustrations by{" "}
                  <Link
                    href={"https://storyset.com/"}
                    className="font-medium"
                    target="__blank"
                  >
                    storyset
                  </Link>
                  . The source code is available on{" "}
                  <Link
                    href={"https://github.com/lmutsuha79/feedback_flow_l3"}
                    className="font-medium"
                    target="__blank"
                  >
                    Github
                  </Link>
                </p>
              </div>
            </div>
          </footer>
      );
}

export default Footer;