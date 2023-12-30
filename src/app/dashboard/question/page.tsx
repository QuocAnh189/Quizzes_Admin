"use client"

import BreadCrumb from "src/components/breadcrumb";
import { QuestionClient } from "src/components/tables/question-tables/client";

//redux
import { useGetQuestionsQuery } from "src/redux/services/questionApi";

const breadcrumbItems = [{ title: "Question", link: "/dashboard/question" }];

export default function PageQuestion() {
  const { data } = useGetQuestionsQuery();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        {data && <QuestionClient data={data} />}
      </div>
    </>
  );
}
