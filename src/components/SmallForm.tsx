import { useForm } from "react-hook-form";
import { useTranslations } from "../i18n/utils";
import { Email } from "./Email";
import { Resend } from "resend";

const resend = new Resend(`${import.meta.env.EMAIL_KEY}`);

export const SmallForm = ({ lang }: { lang: "en" | "es" }) => {
  const { register, handleSubmit, reset } = useForm();
  const t = useTranslations(lang);
  
  const sendEmail = async (myForm: any) => {
    console.log(myForm);
    try {
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "anchibro@hotmail.com",
        subject: "Example Email",
        react: <Email url="https://google.com" />,
      });
      if (error) {
        return console.error({ error });
      }
      console.log({ data });
      console.log("Hola");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-full mx-auto rounded-lg bg-white p-5
       tablet:p-7 flex flex-col gap-10"
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
