"use client";
import { AlertModal } from "src/components/modal/alert-modal";
import { Button } from "src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UserType from "src/types/userType";
import { useAppDispatch } from "src/redux/hooks";
import { setStatus } from "src/redux/slices/statusSlice";
import { setUser } from "src/redux/slices/userSlice";
import { useDeleteUserMutation } from "src/redux/services/userApi";
import { useToast } from "src/components/ui/use-toast";
interface CellActionProps {
  data: UserType;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const { toast } = useToast();

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [deleteUser] = useDeleteUserMutation();

  const onConfirm = async () => {
    deleteUser({ userId: data._id })
      .unwrap()
      .then((res) => {
        setOpen(false);
        toast({
          variant: "default",
          title: "Delete Successfully",
          description: `Delete userId ${data._id} successfully`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem
            onClick={() => {
              dispatch(setUser(data));
              dispatch(setStatus(false));
              router.push(`/dashboard/user/${data._id}`);
            }}
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
