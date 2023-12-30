"use client";

import BreadCrumb from "src/components/breadcrumb";
import { PlayerResultClient } from "src/components/tables/playerresult-tables/client";

//redux
import { useGetPlayerResultsQuery } from "src/redux/services/playerResultApi";

const breadcrumbItems = [
  { title: "PlayerResult", link: "/dashboard/playerresult" },
];

export default function PagePlayerResult() {
  const { data } = useGetPlayerResultsQuery();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        {data && <PlayerResultClient data={data!} />}
      </div>
    </>
  );
}
