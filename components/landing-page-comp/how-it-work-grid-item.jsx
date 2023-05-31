import Image from "next/image";

const HowItWorksGridItem = ({ title, img, is_img_right, children }) => {
  return (
    <div
      className={`flex items-center ${
        is_img_right ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="space-y-4 w-[50%]">
        <h3 className="font-medium text-main_dark text-2xl">{title}</h3>
        <div>{children}</div>
      </div>
      <div className="grid place-items-center w-[50%]">
        <Image src={img} width={400} height={200} alt="register app" />
      </div>
    </div>
  );
};

export default HowItWorksGridItem;
