"use client";

import React, { FC } from "react";
import SideBarItem from "./SideBarItem";

interface SideBarRoutes {
  routes: {
    icon: any;
    label: string;
    href: string;
  }[];
}

const SideBarRoutes: FC<SideBarRoutes> = ({ routes }) => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SideBarItem key={route.href} {...route} />
      ))}
    </div>
  );
};

export default SideBarRoutes;
