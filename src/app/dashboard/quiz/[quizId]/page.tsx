"use client";

import BreadCrumb from "src/components/breadcrumb";
import { QuizForm } from "src/components/forms/quiz-form";
import React from "react";

import { useAppSelector } from "src/redux/hooks";

export default function Page() {
  const create = useAppSelector((state) => state.status.create);

  const breadcrumbItems = [
    { title: "Quiz", link: "/dashboard/quiz" },
    {
      title: create ? "Create" : "Update",
      link: create ? "/dashboard/quiz/create" : "/dashboard/quiz/update",
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumb items={breadcrumbItems} />
      <QuizForm
        isBoolean={[
          { _id: 'True', name: "True" },
          { _id: 'False', name: "False" },
        ]}
        create={create}
        key={null}
      />
    </div>
  );
}
