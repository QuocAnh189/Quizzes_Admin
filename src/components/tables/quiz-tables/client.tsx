"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "src/components/ui/button";
import { DataTable } from "src/components/ui/data-table";
import { columns } from "./columns";
// import { User } from "src/constants/data";
import { Heading } from "src/components/ui/heading";
import { Separator } from "src/components/ui/separator";
import QuizType from "src/types/quizType";

import { useAppDispatch } from "src/redux/hooks";
import { setStatus } from "src/redux/slices/statusSlice";

interface ProductsClientProps {
  data: QuizType[];
}

export const QuizClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Quizzes (${data.length})`}
          description="Manage quizzes for your business"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => {
            dispatch(setStatus(true));
            router.push(`/dashboard/quiz/new`);
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
