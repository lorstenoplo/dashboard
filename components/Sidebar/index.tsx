import React from "react";
import { SidebarIcon } from "./SidebarIcon";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export const Sidebar = () => {
  return (
    <div className="bg-gray-200 w-16 px-6 py-4 flex flex-col justify-between items-center">
      <div className="flex flex-col space-y-4">
        <Link href="/">
          <a>
            <Tippy content="Home" placement="right">
              <img
                className="h-10 w-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </Tippy>
          </a>
        </Link>
        <Link href="/stats">
          <a>
            <Tippy content="Stats" placement="right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 !outline-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </Tippy>
          </a>
        </Link>

        {[1, 2, 3, 4].map((_, i) => (
          <SidebarIcon key={i} />
        ))}
      </div>
      <div className="flex flex-col space-y-4">
        {[1, 2].map((_, i) => (
          <SidebarIcon key={i + 10} />
        ))}
        <Link href="/login">
          <a>
            <Tippy content="Login" placement="right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 !outline-none"
                fill="black"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm5.14 2.86c-.39.39-.38 1-.01 1.39 1.13 1.2 1.83 2.8 1.87 4.57.09 3.83-3.08 7.13-6.91 7.17C8.18 19.05 5 15.9 5 12c0-1.84.71-3.51 1.87-4.76.37-.39.37-1-.01-1.38-.4-.4-1.05-.39-1.43.02C3.98 7.42 3.07 9.47 3 11.74c-.14 4.88 3.83 9.1 8.71 9.25 5.1.16 9.29-3.93 9.29-9 0-2.37-.92-4.51-2.42-6.11-.38-.41-1.04-.42-1.44-.02z" />
              </svg>
            </Tippy>
          </a>
        </Link>
      </div>
    </div>
  );
};
