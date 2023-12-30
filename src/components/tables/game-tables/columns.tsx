"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "src/constants/data";
import { Checkbox } from "src/components/ui/checkbox";
import GameType from "src/types/gameType";

export const columns: ColumnDef<GameType>[] = [
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
    accessorKey: "host.userName",
    header: "CREATOR",
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
    accessorKey: "playerList.length",
    header: "numberOfPlayer",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
