import { useForm } from "react-hook-form";
import { useTranslations } from "../i18n/utils";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BigForm = ({ lang }: { lang: "en" | "es" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const t = useTranslations(lang);

  const notify = (text: string, success: boolean) => {
    if (success) {
      return toast.success(text, {
        position: "top-center",
      });
    } else {
      return toast.error(text, {
        position: "top-center",
      });
    }
  };

  const sendEmail = async (myForm: any) => {
    try {
      setIsLoading(true);
      await axios.post(`${import.meta.env.PUBLIC_BACKEND_URL}`, myForm);
      notify(t("email.success"), true);
    } catch (error) {
      console.log(error);
      notify(t("email.error"), false);
    }
    setIsLoading(false);
    reset();
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
          {...register("name", {
            required: t("about.formErrorName"),
          })}
        />
        {errors.name?.message && (
          <p className=" text-red-500 font-medium">
            {errors.name.message as string}
          </p>
        )}
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
          {...register("email", {
            required: t("about.formErrorEmail"),
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: t("about.formErrorEmail2"),
            },
          })}
        />
        {errors.email?.message && (
          <p className=" text-red-500 font-medium">
            {errors.email.message as string}
          </p>
        )}
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
          {...register("phone", {
            required: t("about.formErrorPhone"),
          })}
        />
        {errors.phone?.message && (
          <p className=" text-red-500 font-medium">
            {errors.phone.message as string}
          </p>
        )}
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
          {...register("message", {
            required: t("about.formErrorMsg"),
          })}
        ></textarea>
        {errors.message?.message && (
          <p className=" text-red-500 font-medium">
            {errors.message.message as string}
          </p>
        )}
      </div>
      <button
        className="py-2 px-5 border-2 border-blue rounded-xl text-blue transition-colors
            font-bold duration-200 hover:text-white hover:bg-blue cursor-pointer
            disabled:cursor-not-allowed disabled:bg-blue/30"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : t("about.formBtn")}
      </button>
      <ToastContainer position="top-center" />
    </form>
  );
};
