import { useEffect, useState, type ChangeEvent } from "react";
import { useTranslations } from "../i18n/utils";
import { NextAndPrev } from "./myIcons/NextAndPrev";
import { SingleImage } from "./SingleImage";
import { SingleWindowCarousel } from "./SingleWindowCarousel";

export const CarouselSection = ({ lang }: { lang: "en" | "es" }) => {
  const t = useTranslations(lang);
  const [translation, setTranslation] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const imagCount = ["first", "second", "third"];
  const hrefs = ["personal-tax", "web-design", "digital-marketing"];

  /*   useEffect(() => {
    console.log(translation);
  }, [translation]); */
  useEffect(() => {
    let myInterval: any;
    if (!isOver) {
      myInterval = setInterval(() => {
        setTranslation((prev) => {
          if (prev == 200) return 0;
          return prev + 100;
        });
      }, 5000);
    }
    return () => clearInterval(myInterval);
  }, [isOver]);

  const handleClick = (next: boolean) => {
    if (next) {
      setTranslation((prev) => {
        if (prev == 200) return 0;
        return prev + 100;
      });
    } else {
      setTranslation((prev) => {
        if (prev == 0) return 200;
        return prev - 100;
      });
    }
  };

  return (
    <main
      className=" relative h-[478px] tablet:h-[558px] overflow-hidden"
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <button
        className="absolute left-[-10px] laptop:left-5 top-[50%] translate-y-[-50%] z-[1] text-white rotate-180
       opacity-50 hover:opacity-100 transition-opacity duration-200 scale-[0.65] tablet:scale-75
       laptop:scale-100"
        onClick={() => handleClick(false)}
      >
        <NextAndPrev />
      </button>
      <button
        className="absolute right-[-10px] laptop:right-5 top-[50%] translate-y-[-50%] z-[1] text-white
       opacity-50 hover:opacity-100 transition-opacity duration-200 scale-[0.65] tablet:scale-75
       laptop:scale-100"
        onClick={() => handleClick(true)}
      >
        <NextAndPrev />
      </button>
      <div
        className="mx-auto flex gap-2 absolute z-[5] bottom-4 tablet:bottom-6 left-[50%] 
      translate-x-[-50%]"
      >
        {imagCount.map((item, i) => {
          return (
            <SingleWindowCarousel
              key={item}
              translation={translation}
              position={item}
              value={i * 100}
              setTranslation={setTranslation}
            />
          );
        })}
      </div>
      <div className="flex absolute inset-y-0">
        {hrefs.map((item, i) => {
          return (
            <SingleImage
              key={item}
              path={`/${lang}/our-services/${item}`}
              lang={lang}
              position={(i + 1) as 1 | 2 | 3}
              translation={translation}
            />
          );
        })}
      </div>
    </main>
  );
};
