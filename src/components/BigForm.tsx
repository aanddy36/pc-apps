import { useForm } from "react-hook-form";
import { useTranslations } from "../i18n/utils";

export const BigForm = ({ lang }: { lang: "en" | "es" }) => {
  const { register, handleSubmit, reset } = useForm();
  const t = useTranslations(lang);
  const sendEmail = (data: any) => {
    console.log(data);
  };
  return (
    <form
      className="w-full laptop:w-[80%] full:w-[750px] mx-auto rounded-lg bg-white p-5 tablet:p-7 flex flex-col gap-10"
      onSubmit={handleSubmit(sendEmail)}
    >
      <div className="flex flex-col gap-2 text-start">
        <label htmlFor="name" className=" font-medium">
          {t("about.formName")}
        </label>
        <input
          id="name"
          placeholder={t("about.formNamePlaceholder")}
          className=" py-2 px-5 bg-sectionBg placeholder:text-placeholder placeholder:text-sm 
          placeholder:font-semibold w-full rounded-xl"
          {...register("name")}
        />
      </div>
      <div className="flex flex-col gap-2 text-start">
        <label htmlFor="email" className=" font-medium">
          {t("about.formEmail")}
        </label>
        <input
          id="email"
          type="email"
          placeholder={t("about.formEmailPlaceholder")}
          className=" py-2 px-5 bg-sectionBg placeholder:text-placeholder placeholder:text-sm 
          placeholder:font-semibold w-full rounded-xl"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-2 text-start">
        <label htmlFor="phone" className=" font-medium">
          {t("about.formPhone")}
        </label>
        <input
          id="phone"
          type="tel"
          placeholder={t("about.formPhonePlaceholder")}
          className=" py-2 px-5 bg-sectionBg placeholder:text-placeholder placeholder:text-sm 
          placeholder:font-semibold w-full rounded-xl"
          {...register("phone")}
        />
      </div>
      <div className="flex flex-col gap-2 text-start">
        <label htmlFor="message" className=" font-medium">
          {t("about.formMessage")}
        </label>
        <textarea
          id="message"
          placeholder={t("about.formMessagePlaceholder")}
          className=" py-2 px-5 bg-sectionBg placeholder:text-placeholder placeholder:text-sm 
          placeholder:font-semibold w-full rounded-xl h-48"
          {...register("message")}
        ></textarea>
      </div>
      <button
        className="py-2 px-5 border-2 border-blue rounded-xl text-blue transition-colors
            font-bold duration-200 hover:text-white hover:bg-blue cursor-pointer"
      >
        {t("about.formBtn")}
      </button>
    </form>
  );
};
