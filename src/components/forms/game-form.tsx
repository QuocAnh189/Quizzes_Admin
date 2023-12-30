"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
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
import GameType, { InitGame } from "src/types/gameType";

interface GameFormProps {
  create: boolean;
}

export const GameForm: React.FC<GameFormProps> = ({
  create,
}) => {
  const game = useAppSelector((state) => state.game.game);

  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = !create ? "Edit Game" : "Create Game";
  const description = !create ? "Edit a Game." : "Add a new Game";
  const toastMessage = !create ? "Game updated." : "Game created.";
  const action = !create ? "Save changes" : "Create";

  const defaultValues = create ? InitGame : game;

  const form = useForm<GameType>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<GameType> = async (data: GameType) => {
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
              name="host"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>host Id</FormLabel>
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
