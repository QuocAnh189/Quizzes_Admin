"use client"

import BreadCrumb from "src/components/breadcrumb";
import { UserClient } from "src/components/tables/user-tables/client";
import { users } from "src/constants/data";

//api
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "src/apis/apiServer/user.api";
import UserType from "src/types/userType";

const breadcrumbItems = [{ title: "Quizzes", link: "/dashboard/quiz" }];

export default function PageQuiz() {

//   const { data: userss } = useQuery<UserType[]>({
//     queryKey: ['user'],
//     queryFn: () => getUsers(),
//   });

//   console.log(userss);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        {/* <UserClient data={users!} /> */}
      </div>
    </>
  );
}
