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
import QuizType, { InitQuiz } from "src/types/quizType";

interface ProductFormProps {
  create: boolean;
  isBoolean: any;
}

export const QuizForm: React.FC<ProductFormProps> = ({ create, isBoolean }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = !create ? "Edit quiz" : "Create quiz";
  const description = !create ? "Edit a quiz." : "Add a new quiz";
  const toastMessage = !create ? "Quiz updated." : "Quiz created.";
  const action = !create ? "Save changes" : "Create";

  const quiz = useAppSelector((state) => state.quiz.quiz);

  const defaultValues = create ? InitQuiz : quiz;

  const form = useForm<QuizType>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<QuizType> = async (data: QuizType) => {
    try {
      console.log(data);
      // setLoading(true);
      // if (!create) {
      //   // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
      // } else {
      //   // const res = await axios.post(`/api/products/create-product`, data);
      //   // console.log("product", res);
      // }
      // router.refresh();
      // router.push(`/dashboard/products`);
      toast({
        variant: "default",
        title: "successfully",
        description: toastMessage,
        color: "#65BA74",
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
          <FormField
            control={form.control}
            name="backgroundImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <FileUpload
                    onChange={field.onChange}
                    value={field.value}
                    onRemove={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="creator"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>creator Id</FormLabel>
                  <FormControl>
                    <Input
                      value={field.value._id}
                      disabled={loading}
                      placeholder="Creator ID"
                      {...field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isDraft"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>isDraft</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value === true ? "True" : "False"}
                    defaultValue={field.value === true ? "True" : "False"}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value === true ? "True" : "False"}
                          placeholder="Select a Boolean"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {isBoolean.map((school: any) => (
                        <SelectItem key={school._id} value={school._id}>
                          {school.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isPublic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>isPublic</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value === true ? 'True' : 'False'}
                    defaultValue={field.value === true ? 'True' : 'False'}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value === true ? 'True' : 'False'}
                          placeholder="Select a Boolean"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {isBoolean.map((school: any) => (
                        <SelectItem key={school._id} value={school._id}>
                          {school.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numberOfQuestions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>numberOfQuestion</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pointsPerQuestion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>pointsPerQuestion</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Point" {...field} />
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
