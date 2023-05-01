import React, { useState } from "react";

const Tab = (tab) => {
  return (
    <span
      className={`${
        tab.activeTab === tab.value
          ? " bg-white text-highlightBlue border-lightPurple border"
          : "text-lightGray"
      }  py-2  px-[6px]  rounded  text-xs cursor-pointer`}
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
      <div className="bg-stq-purple-2 border flex justify-center items-center  border-stq-purple-4 w-fit rounded py-[4px] px-[7px]">
        {tabs.map((tab) => (
          <Tab {...tab} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
