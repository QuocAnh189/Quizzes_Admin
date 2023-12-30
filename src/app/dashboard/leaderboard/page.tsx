"use client";

import BreadCrumb from "src/components/breadcrumb";


//redux
import { useGetLeaderBoardsQuery } from "src/redux/services/leaderBoardApi";
import { LeaderBoardClient } from "src/components/tables/leaderboard-tables/client";

const breadcrumbItems = [
  { title: "LeaderBoard", link: "/dashboard/leaderboard" },
];

export default function PageLeaderBoard() {
  const { data } = useGetLeaderBoardsQuery();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        {data &&<LeaderBoardClient data={data!} />}
      </div>
    </>
  );
}
