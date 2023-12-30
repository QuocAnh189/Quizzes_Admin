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
import QuestionType, { InitQuestion } from "src/types/questionType";

interface QuestionFormProps {
  create: boolean;
  isBoolean: any;
  questionType: any;
  optionQuestion: any;
  pointType: any;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({
  create,
  isBoolean,
  questionType,
  optionQuestion,
  pointType,
}) => {
  const question = useAppSelector((state) => state.question.question);

  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const title = !create ? "Edit question" : "Create question";
  const description = !create ? "Edit a question." : "Add a new question";
  const toastMessage = !create ? "Question updated." : "question created.";
  const action = !create ? "Save changes" : "Create";

  const defaultValues = create ? InitQuestion : question;

  const form = useForm<QuestionType>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<QuestionType> = async (data: QuestionType) => {
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
              name="field"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Content"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="creator"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>creator ID</FormLabel>
                  <FormControl>
                    <Input
                      value={field.value._id}
                      disabled={loading}
                      placeholder="Creator Id"
                      {...field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="questionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>questionType</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a questionType"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {questionType.map((type: any) => (
                        <SelectItem key={type._id} value={type._id}>
                          {type.name}
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
              name="optionQuestion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>optionQuestion</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a optionQuestion"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {optionQuestion.map((option: any) => (
                        <SelectItem key={option._id} value={option._id}>
                          {option.name}
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
              name="pointType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>pointType</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a pointType"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {pointType.map((type: any) => (
                        <SelectItem key={type._id} value={type._id}>
                          {type.name}
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
                      {isBoolean.map((item: any) => (
                        <SelectItem key={item._id} value={item._id}>
                          {item.name}
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
              name="answerTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>answerTime</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="answer Time"
                      {...field}
                    />
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
