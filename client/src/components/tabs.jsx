import React, { useState } from "react";

const Tab = (tab) => {
  return (
    <span
      className={`${
        tab.activeTab === tab.value
          ? " bg-slate-900 text-gray-200 "
          : "text-gray-200"
      }  py-2  px-[10px]  rounded-lg font-semibold  text-lg  cursor-pointer`}
      onClick={() => tab.setActiveTab(tab.value)}
    >
      {tab.title}
    </span>
  );
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div>
      {" "}
      <div className="bg-[#1a2645] border flex justify-center items-center  border-slate-700 w-fit rounded-xl py-[2px] px-[2px]">
        {tabs.map((tab) => (
          <Tab {...tab} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
