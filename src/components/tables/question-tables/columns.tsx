"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "src/constants/data";
import { Checkbox } from "src/components/ui/checkbox";
import QuestionType from "src/types/questionType";

export const columns: ColumnDef<QuestionType>[] = [
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
    accessorKey: "content",
    header: "CONTENT",
  },
  {
    accessorKey: "creator.userName",
    header: "CREATOR",
  },
  {
    accessorKey: "questionType",
    header: "TYPE",
  },
  {
    accessorKey: "answerTime",
    header: "TIME",
  },
  {
    accessorKey: "isPublic",
    header: "PUBLIC",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
