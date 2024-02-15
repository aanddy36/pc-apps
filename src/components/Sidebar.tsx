import { useState } from "react";
import { useTranslations } from "../i18n/utils";
import type { Service } from "../modals";
import "../index.css";
import { Close } from "./myIcons/Close";
import { Translate } from "./myIcons/Translate";
import { Logo } from "./myIcons/Logo";
import { ServicesSidebar } from "./ServicesSidebar";

export const Sidebar = ({
  openSidebar,
  setOpenSidebar,
  link,
  allServices,
}: {
  openSidebar: boolean;
  setOpenSidebar: (value: boolean) => void;
  link: string;
  allServices: Service[];
}) => {
  const language = link.split("/")[3];
  const t = useTranslations(language as "es" | "en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const path = link.split("/")[4];
  const currentPath = "/" + link.split("/").slice(3).join("/");

  const orgPath =
    currentPath === "/en" || currentPath === "/es"
      ? currentPath + "/"
      : currentPath;

  const spanishPath = "/es/" + link.split("/").slice(4).join("/");
  const englishPath = "/en/" + link.split("/").slice(4).join("/");
  const handleChange = (e: any) => {
    window.location.href = e.target.value;
  };

  return (
    <nav
      className={`fixed top-0 left-0 h-full z-10 bg-bg laptop:hidden w-[300px] overflow-y-auto
       shadow-black/50 flex flex-col items-center gap-6 pt-16 transition-transform duration-200
       ${
         openSidebar
           ? "translate-x-[0%] shadow-xl"
           : "translate-x-[-100%] shadow-none"
       }`}
    >
      <button
        className=" absolute top-4 right-4 transition-transform duration-200 hover:rotate-90 scale-[0.7]"
        onClick={() => setOpenSidebar(false)}
      >
        <Close />
      </button>

      <a href={`/${language}`} className="cursor-pointer">
        <Logo />
      </a>
      <div className="w-full px-4 flex gap-2 items-center border-y py-2 mt-4">
        <Translate />
        <select
          className="bg-bg w-full cursor-pointer text-[14px]"
          onChange={(e) => handleChange(e)}
          value={orgPath}
        >
          <option value={englishPath}>{t("picker.english")}</option>
          <option value={spanishPath}>{t("picker.spanish")}</option>
        </select>
      </div>
      <ul className=" flex flex-col w-full">
        <a
          href={`/${language}`}
          className="no-underline text-black  transition-all duration-200 hover:px-8 px-4 py-3 border-b
          cursor-pointer"
        >
          <span
            className={`border-2 border-transparent ${
              !path
                ? "border-b-blue text-blue font-bold"
                : "border-b-transparent text-black"
            }`}
          >
            {t("nav.home")}
          </span>
        </a>
        <a
          href={`/${language}/about`}
          className="no-underline text-black  transition-all duration-200 hover:px-8 px-4 py-3 border-b
        cursor-pointer"
        >
          <span
            className={`border-2 border-transparent ${
              path === "about"
                ? "border-b-blue text-blue font-bold"
                : "border-b-transparent text-black"
            }`}
          >
            {t("nav.whoweare")}
          </span>
        </a>
        <ServicesSidebar
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          path={path}
          language={language}
          allServices={allServices}
        />
        <div className="w-full text-center my-6">
          <a
            href={`/${language}/contact`}
            className="py-1 px-4 border-2 border-blue rounded-xl text-blue transition-colors
          font-bold duration-200 hover:text-white hover:bg-blue cursor-pointer w-fit"
          >
            {t("nav.contactBtn")}
          </a>
        </div>
      </ul>
    </nav>
  );
};
