"use client";

import BreadCrumb from "src/components/breadcrumb";
import { ProductForm } from "src/components/forms/user-form";
import React from "react";

import { useAppSelector } from "src/redux/hooks";

export default function Page() {
  const create = useAppSelector((state) => state.status.create);

  const breadcrumbItems = [
    { title: "User", link: "/dashboard/user" },
    {
      title: create ? "Create" : "Update",
      link: create ? "/dashboard/user/create" : "/dashboard/user/update",
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumb items={breadcrumbItems} />
      <ProductForm
        userType={[
          { _id: "Teacher", name: "Teacher" },
          { _id: "Student", name: "Student" },
        ]}
        workSpace={[
          { _id: "Polytechnic University", name: "Polytechnic University" },
          {
            _id: "University of Natural Sciences",
            name: "University of Natural Sciences",
          },
          {
            _id: "University of Social Sciences and Humanities",
            name: "University of Social Sciences and Humanities",
          },
          { _id: "International University", name: "International University" },
          {
            _id: "University of Information Technology",
            name: "University of Information Technology",
          },
          {
            _id: "University of Law and Economics",
            name: "University of Law and Economics",
          },
          {
            _id: "Institute of Environment and Natural Resources",
            name: "Institute of Environment and Natural Resources",
          },
          { _id: "An Giang University", name: "An Giang University" },
        ]}
        create={create}
        key={null}
      />
    </div>
  );
}
