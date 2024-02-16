import { useTranslations } from "../i18n/utils";
import type { Service } from "../modals";
import { ChevrownDown } from "./myIcons/ChevrownDown";

export const ServicesSidebar = ({
  isDropdownOpen,
  setIsDropdownOpen,
  path,
  lang,
  allServices,
}: {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (value: boolean) => void;
  path: string;
  lang: "en" | "es";
  allServices: Service[];
}) => {
  const t = useTranslations(lang);
  const filteredServices = allServices.map((serv) => serv.data);
  const categories = [...new Set(filteredServices.map((s) => s.group))];
  return (
    <div
      className={`border-b border-[#7e7e7e3d] py-3  px-4 transiton duration-200 overflow-hidden 
            ${
              isDropdownOpen
                ? "bg-[#7e7e7e3d] h-full"
                : "bg-transparent h-[50px]"
            }`}
    >
      <button
        className="flex w-full transiton duration-300 hover:pl-4 justify-between items-center"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span
          className={`border-2 border-transparent ${
            path === "our-services"
              ? "border-b-blue text-blue font-bold"
              : "border-b-transparent text-black"
          }`}
        >
          {t("nav.services")}
        </span>
        <ChevrownDown />
      </button>
      <ul className="flex flex-col">
        {categories.map((category) => {
          return (
            <div key={category} className="flex flex-col gap-2 p-4">
              <h5 className="font-semibold">{category}</h5>
              <div className="flex flex-col gap-2 pl-4 w-full">
                {allServices
                  .filter((cons) => cons.data.group === category)
                  .map((service, index) => {
                    return (
                      <a
                        key={index}
                        href={`${lang === "en" ? "" : "/es"}/our-services/${
                          service.slug.split("/")[1]
                        }`}
                        className=" transition-all duration-200 hover:px-4 hover:text-blue"
                      >
                        {service.data.title}
                      </a>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
