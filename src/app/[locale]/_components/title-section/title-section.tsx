import React from "react";

interface TitleSectionProps {
  title: string;
  subtitle: string;
}

const TitleSection = ({ title, subtitle }: TitleSectionProps) => {
  return (
    <div className="flex flex-col gap-2 w-full my-24 items-center justify-center">
      <h2 className="text-4xl text-primary font-bold">{title}</h2>
      <p className="text-gray-600 ">{subtitle}</p>
    </div>
  );
};

export default TitleSection;
