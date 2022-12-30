import React from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import Sidebar from "./sidebar/Sidebar";

const Index = () => {
  return (
    <>
      <Sidebar />
      <section>
        <Dashboard/>
      </section>
    </>
  );
};

export default Index;
