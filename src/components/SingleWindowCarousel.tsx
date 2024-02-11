import React, { type ChangeEvent } from "react";

export const SingleWindowCarousel = ({
  translation,
  position,
  value,
  setTranslation,
}: {
  translation: number;
  position: string;
  value: number;
  setTranslation: (num: number) => void;
}) => {
  return (
    <label
      className={` h-1 w-8 tablet:w-10 relative bg-white ${
        translation === value ? " opacity-100" : " opacity-50"
      }`}
      htmlFor={position}
    >
      <input
        id={position}
        type="radio"
        value={value}
        name="imageNo"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTranslation(Number(e.target.value) as any)
        }
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
    </label>
  );
};
