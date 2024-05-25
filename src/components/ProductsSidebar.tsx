import { useTranslations } from "../i18n/utils";
import type { Dropdown, Service } from "../modals";
import { ChevrownDown } from "./myIcons/ChevrownDown";

export const ProductsSidebar = ({
  isDropdownOpen,
  setIsDropdownOpen,
  path,
  lang,
}: {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (value: any) => void;
  path: string;
  lang: "en" | "es";
}) => {
  const t = useTranslations(lang);
  const categories = ["rfid","weru-app"];
  const names = {
    rfid: "rfid",
    "weru-app": "weruApp",
  };
  type NamesKey = keyof typeof names;

  return (
    <div
      className={`border-b border-[#7e7e7e3d] py-3  px-4 transiton duration-200 overflow-hidden 
            ${
              isDropdownOpen
                ? `bg-[#7e7e7e3d] h-[${50 * (categories.length + 1)}px]`
                : "bg-transparent h-[50px]"
            }`}
    >
      <button
        className="flex w-full transiton duration-300 hover:pl-4 justify-between items-center"
        onClick={() =>
          setIsDropdownOpen((prev: Dropdown) => {
            return {
              ...prev,
              products: !isDropdownOpen,
            };
          })
        }
      >
        <span
          className={`border-2 border-transparent ${
            path === "products"
              ? "border-b-blue text-blue font-bold"
              : "border-b-transparent text-black"
          }`}
        >
          {t("nav.products")}
        </span>
        <ChevrownDown />
      </button>
      <ul className="flex flex-col pt-3">
        {categories.map((category) => {
          return (
            <div key={category} className="flex flex-col gap-2 px-4 py-2">
              {/* <h5 className="font-semibold">{category}</h5> */}

              <a
                key={category}
                href={`${lang === "en" ? "" : "/es"}/products/${category}`}
                className=" transition-all duration-200 hover:px-4 hover:text-blue"
              >
                {t(`products.${names[category as NamesKey]}` as any)}
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
