"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

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

import { useAppSelector } from "src/redux/hooks";
import { useToast } from "../ui/use-toast";
import FileUpload from "../file-upload";
import PlayerResultType, { InitPlayerResult } from "src/types/playerResultType";

interface PlayerResultFormProps {
  create: boolean;
  userType: any;
  workPlace: any;
}

export const PlayerResultForm: React.FC<PlayerResultFormProps> = ({
  create,
  userType,
  workPlace,
}) => {
  const playerResult = useAppSelector(
    (state) => state.playerResult.playerResult
  );

  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const title = !create ? "Edit PlayerResult" : "Create PlayerResult";
  const description = !create
    ? "Edit a PlayerResult."
    : "Add a new PlayerResult";
  const toastMessage = !create
    ? "PlayerResult updated."
    : "PlayerResult created.";
  const action = !create ? "Save changes" : "Create";

  const defaultValues = create ? InitPlayerResult : playerResult;

  const form = useForm<PlayerResultType>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<PlayerResultType> = async (
    data: PlayerResultType
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
              name="player"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>player Id</FormLabel>
                  <FormControl>
                    <Input
                      value={field.value._id}
                      disabled={loading}
                      placeholder="Player ID"
                      {...field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="game"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>game ID</FormLabel>
                  <FormControl>
                    <Input
                      value={field.value!?._id}
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
              name="score"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Score</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Score" {...field} />
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
