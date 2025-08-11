import React from "react";
const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="h-screen">{children}</main>
    </>
  );
};

export default LayoutAuth;
