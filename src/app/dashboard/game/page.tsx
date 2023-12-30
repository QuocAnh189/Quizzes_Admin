"use client";

import BreadCrumb from "src/components/breadcrumb";
import { GameClient } from "src/components/tables/game-tables/client";

//redux
import { useGetGamesQuery } from "src/redux/services/gameApi";
const breadcrumbItems = [{ title: "Game", link: "/dashboard/game" }];

export default function PageGame() {
  const { data } = useGetGamesQuery();
  
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        {data && <GameClient data={data} />}
      </div>
    </>
  );
}
