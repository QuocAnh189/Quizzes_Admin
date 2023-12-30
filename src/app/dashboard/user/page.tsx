"use client";

import BreadCrumb from "src/components/breadcrumb";
import { UserClient } from "src/components/tables/user-tables/client";

//redux
import { useGetUsersQuery } from "src/redux/services/userApi";

const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];

export default function PageUser() {
  const { data } = useGetUsersQuery();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        {data && <UserClient data={data!} />}
      </div>
    </>
  );
}
