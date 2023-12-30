"use client";

import BreadCrumb from "src/components/breadcrumb";
import { LeaderBoardForm } from "src/components/forms/leaderboard-form";
import React from "react";

import { useAppSelector } from "src/redux/hooks";

export default function Page() {
  const create = useAppSelector((state) => state.status.create);

  const breadcrumbItems = [
    { title: "LeaderBoard", link: "/dashboard/leaderboard" },
    {
      title: create ? "Create" : "Update",
      link: create
        ? "/dashboard/leaderboard/create"
        : "/dashboard/leaderboard/update",
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumb items={breadcrumbItems} />
      <LeaderBoardForm create={create} key={null} />
    </div>
  );
}
