"use client"

import BreadCrumb from "src/components/breadcrumb";
import { QuizClient } from "src/components/tables/quiz-tables/client";

//redux 
import { useGetQuizzesQuery } from "src/redux/services/quizApi";

const breadcrumbItems = [{ title: "Quizzes", link: "/dashboard/quiz" }];

export default function PageQuiz() {

  const { data } = useGetQuizzesQuery();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        {data && <QuizClient data={data!} />}
      </div>
    </>
  );
}
