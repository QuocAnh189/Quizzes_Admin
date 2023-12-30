"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "src/constants/data";
import { Checkbox } from "src/components/ui/checkbox";
import UserType from "src/types/userType";

export const columns: ColumnDef<UserType>[] = [
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
    accessorKey: "userName",
    header: "UserName",
  },
  {
    accessorKey: "workspace",
    header: "WORKPLACE",
  },
  {
    accessorKey: "userType",
    header: "ROLE",
  },
  {
    accessorKey: "mail",
    header: "EMAIL",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
