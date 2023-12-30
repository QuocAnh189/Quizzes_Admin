"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import { Separator } from "src/components/ui/separator";
import { Heading } from "src/components/ui/heading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";

import { useToast } from "../ui/use-toast";
import FileUpload from "../file-upload";
import { useAppSelector } from "src/redux/hooks";
import LeaderBoardType, { InitLeaderBoard } from "src/types/leaderboardType";

interface LeaderBoardFormProps {
  create: boolean;
}

export const LeaderBoardForm: React.FC<LeaderBoardFormProps> = ({ create }) => {
  const leaderboard = useAppSelector((state) => state.leaderboard.leaderboard);

  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const title = !create ? "Edit LeaderBoard" : "Create LeaderBoard";
  const description = !create ? "Edit a LeaderBoard." : "Add a new LeaderBoard";
  const toastMessage = !create
    ? "LeaderBoard updated."
    : "LeaderBoard created.";
  const action = !create ? "Save changes" : "Create";

  const defaultValues = create ? InitLeaderBoard : leaderboard;

  const form = useForm<LeaderBoardType>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<LeaderBoardType> = async (
    data: LeaderBoardType
  ) => {
    try {
      console.log(data);

      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="game"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>game Id</FormLabel>
                  <FormControl>
                    <Input
                      value={field.value._id}
                      disabled={loading}
                      placeholder="Game ID"
                      {...field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quiz"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>quiz ID</FormLabel>
                  <FormControl>
                    <Input
                      value={field.value._id}
                      disabled={loading}
                      placeholder="Quiz ID"
                      {...field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PIN</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Pin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
