"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "src/components/ui/button";
import { DataTable } from "src/components/ui/data-table";
import { columns } from "./columns";
// import { User } from "src/constants/data";
import { Heading } from "src/components/ui/heading";
import { Separator } from "src/components/ui/separator";
import LeaderBoardType from "src/types/leaderboardType";

import { useAppDispatch } from "src/redux/hooks";
import { setStatus } from "src/redux/slices/statusSlice";

interface ProductsClientProps {
  data: LeaderBoardType[];
}

export const LeaderBoardClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`LeaderBoards (${data.length})`}
          description="Manage leaderboards for your business"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => {
            dispatch(setStatus(true));
            router.push(`/dashboard/leaderboard/new`);
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="pin" columns={columns} data={data} />
    </>
  );
};
