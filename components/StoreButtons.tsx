import Image from "next/image";

const appStoreUrl = "#";
const playStoreUrl = "#";

type StoreButtonsProps = {
  variant?: "light" | "dark";
};

const StoreButtons = ({ variant = "dark" }: StoreButtonsProps) => {
  const alignment = variant === "light" ? "justify-center lg:justify-start" : "justify-center";

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-3 ${alignment}`}>
      <a
        href={appStoreUrl}
        className="inline-flex h-14 w-[168px] items-center justify-center transition hover:opacity-85"
        aria-label="Download on the App Store"
      >
        <Image
          src="/badges/app-store.svg"
          alt="Download on the App Store"
          width={168}
          height={56}
          className="h-full w-full object-contain"
        />
      </a>

      <a
        href={playStoreUrl}
        className="inline-flex h-[53px] w-[178px] items-center justify-center transition hover:opacity-85"
        aria-label="Get it on Google Play"
      >
        <Image
          src="/badges/google-play-cropped.png"
          alt="Get it on Google Play"
          width={178}
          height={53}
          className="h-full w-full object-contain"
        />
      </a>
    </div>
  );
};

export default StoreButtons;
