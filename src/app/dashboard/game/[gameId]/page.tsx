"use client";

import BreadCrumb from "src/components/breadcrumb";
import { GameForm } from "src/components/forms/game-form";
import React from "react";

import { useAppSelector } from "src/redux/hooks";

export default function Page() {
  const create = useAppSelector((state) => state.status.create);

  const breadcrumbItems = [
    { title: "Game", link: "/dashboard/game" },
    {
      title: create ? "Create" : "Update",
      link: create ? "/dashboard/game/create" : "/dashboard/game/update",
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumb items={breadcrumbItems} />
      <GameForm create={create} key={null} />
    </div>
  );
}
