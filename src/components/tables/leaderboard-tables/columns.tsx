"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Checkbox } from "src/components/ui/checkbox";
import LeaderBoardType from "src/types/leaderboardType";

export const columns: ColumnDef<LeaderBoardType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "_id",
    header: "ID",
  },
  {
    accessorKey: "game._id",
    header: "GAMEID",
  },
  {
    accessorKey: "quiz.name",
    header: "QUIZ",
  },
  {
    accessorKey: "pin",
    header: "PIN",
  },
  {
    accessorKey: "playerResultList",
    header: "numberOfResult",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
