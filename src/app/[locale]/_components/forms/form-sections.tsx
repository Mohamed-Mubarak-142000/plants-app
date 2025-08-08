import React from "react";

// Main Wrapper
const FormSections = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-6 mx-4">{children}</div>;
};

// Grid Layout
const Grid = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-2 gap-6">{children}</div>;
};

// Left / Start Section
const Start = ({ children }: { children: React.ReactNode }) => {
  return <div className="col-span-1">{children}</div>;
};

// Right / End Section
const End = ({ children }: { children: React.ReactNode }) => {
  return <div className="col-span-1">{children}</div>;
};

FormSections.Grid = Grid;
FormSections.Start = Start;
FormSections.End = End;

export default FormSections;
