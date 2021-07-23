import React from "react";
import { SidebarIcon } from "./SidebarIcon";

export const Sidebar = () => {
  return (
    <div className="bg-gray-200 w-16 px-6 py-4 flex flex-col justify-between items-center">
      <div className="flex flex-col space-y-4">
        <a href="#">
          <img
            className="h-10 w-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
        </a>
        {[1, 2, 3, 4].map((_, i) => (
          <SidebarIcon key={i} />
        ))}
      </div>
      <div className="flex flex-col space-y-4">
        {[1, 2, 3].map((_, i) => (
          <SidebarIcon key={i + 10} />
        ))}
      </div>
    </div>
  );
};
