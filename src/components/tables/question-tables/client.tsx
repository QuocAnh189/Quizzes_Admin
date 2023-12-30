"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "src/components/ui/button";
import { DataTable } from "src/components/ui/data-table";
import { columns } from "./columns";
// import { User } from "src/constants/data";
import { Heading } from "src/components/ui/heading";
import { Separator } from "src/components/ui/separator";
// import UserType from "src/types/userType";
import QuestionType from "src/types/questionType";

import { useAppDispatch } from "src/redux/hooks";
import { setStatus } from "src/redux/slices/statusSlice";

interface ProductsClientProps {
  data: QuestionType[];
}

export const QuestionClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Questions (${data.length})`}
          description="Manage questions for your business"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => {
            dispatch(setStatus(true));
            router.push(`/dashboard/question/new`);
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="content" columns={columns} data={data} />
    </>
  );
};
