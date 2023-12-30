"use client";

import BreadCrumb from "src/components/breadcrumb";
// import { QuestionForm } from "src/components/forms/question-form";
import { PlayerResultForm } from "src/components/forms/playerresult-form";
import React from "react";

import { useAppSelector } from "src/redux/hooks";

export default function Page() {
  const create = useAppSelector((state) => state.status.create);

  const breadcrumbItems = [
    { title: "PlayerResult", link: "/dashboard/playerresult" },
    {
      title: create ? "Create" : "Update",
      link: create ? "/dashboard/playerresult/create" : "/dashboard/playerresult/update",
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumb items={breadcrumbItems} />
      <PlayerResultForm
        userType={[
          { _id: "Teacher", name: "Teacher" },
          { _id: "Student", name: "Student" },
        ]}
        workPlace={[
          {
            _id: "University Of Information Technology",
            name: "University Of Information Technology",
          },
          {
            _id: "University of Social Sciences and Humanities",
            name: "University of Social Sciences and Humanities",
          },
          { _id: "University of Technology", name: "University of Technology" },
          { _id: "University of Science", name: "University of Science" },
          { _id: "International University", name: "International University" },
          {
            _id: "University of Economics and Law",
            name: "University of Economics and Law",
          },
          {
            _id: "Institute for Environment and Resources",
            name: "Institute for Environment and Resources",
          },
          { _id: "An Giang University", name: "An Giang University" },
        ]}
        create={create}
        key={null}
      />
    </div>
  );
}
