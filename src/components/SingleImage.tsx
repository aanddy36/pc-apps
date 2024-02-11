import { useTranslations } from "../i18n/utils";

export const SingleImage = ({
  lang,
  translation,
  position,
  path,
}: {
  lang: "en" | "es";
  translation: number;
  position: 1 | 2 | 3;
  path: string;
}) => {
  const t = useTranslations(lang);
  const theImages = [
    "/src/assets/imagess/home-1.jpg",
    "/src/assets/imagess/home-2.jpg",
    "/src/assets/imagess/home-3.jpg",
  ];
  return (
    <section
      className="relative before:content-[''] before:absolute before:inset-0
before:bg-black/50 w-screen transition-transform duration-200"
      style={{ transform: `translate(-${translation}%)` }}
    >
      <img
        src={theImages[position - 1]}
        alt="Carousel Image"
        className="w-screen object-cover h-full"
      />
      <div
        className="absolute inset-0 text-white flex flex-col justify-center laptop:pl-36 gap-6
         w-[70%] tablet:w-[78%] mx-auto laptop:w-fit laptop:mx-0"
      >
        <h5 className=" tablet:text-5xl text-3xl font-bold max-w-[600px]">
          {t(`home.imageHeader${position}`)}
        </h5>
        <span className=" text-base tablet:text-[20px] font-light max-w-[600px] line">
          {t(`home.imageSubtext${position}`)}
        </span>
        <a
          href={path}
          className="py-1 px-4 border-2 border-lightBlue rounded-xl text-white transition-colors
          font-semibold tablet:font-bold duration-200 hover:bg-lightBlue cursor-pointer w-fit"
        >
          {t(`home.imageBtn${position}`)}
        </a>
      </div>
    </section>
  );
};
