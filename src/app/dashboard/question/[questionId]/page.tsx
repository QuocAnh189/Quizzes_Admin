"use client";

import BreadCrumb from "src/components/breadcrumb";
// import { Q } from "src/components/forms/quiz-form";
import { QuestionForm } from "src/components/forms/question-form";
import React from "react";

import { useAppSelector } from "src/redux/hooks";

export default function Page() {
  const create = useAppSelector((state) => state.status.create);

  const breadcrumbItems = [
    { title: "Question", link: "/dashboard/question" },
    {
      title: create ? "Create" : "Update",
      link: create ? "/dashboard/question/create" : "/dashboard/question/update",
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumb items={breadcrumbItems} />
      <QuestionForm
        isBoolean={[
          { _id: "True", name: "True" },
          { _id: "False", name: "False" },
        ]}
        questionType={[
          { _id: "Quiz", name: "Quiz" },
          { _id: "True/False", name: "True/False" },
        ]}
        optionQuestion={[
          { _id: "Single", name: "Single" },
          { _id: "Multiple", name: "Multiple" },
        ]}
        pointType={[
          { _id: "Standard", name: "Standard" },
          { _id: "Double", name: "Double" },
        ]}
        create={create}
        key={null}
      />
    </div>
  );
}
