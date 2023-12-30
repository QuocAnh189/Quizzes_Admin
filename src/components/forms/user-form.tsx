"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
import { useAppSelector } from "src/redux/hooks";

import { useToast } from "../ui/use-toast";
import FileUpload from "../file-upload";
import UserType, { InitUser } from "src/types/userType";
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from "src/redux/services/userApi";

interface ProductFormProps {
  create: boolean;
  userType: any;
  workSpace:any;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  create,
  userType,
  workSpace
}) => {
  const router = useRouter();
  const { toast } = useToast();

  const [addUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const user = useAppSelector((state) => state.user.user);

  const [loading, setLoading] = useState(false);

  const title = !create ? "Edit user" : "Create user";
  const description = !create ? "Edit a user." : "Add a new user";
  const toastMessage = !create ? "User updated." : "User created.";
  const action = !create ? "Save changes" : "Create";

  const defaultValues = create ? InitUser : user;

  const form = useForm<UserType>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<UserType> = async (data: UserType) => {
    try {
      if (create) {
        addUser({ newUser: data })
          .unwrap()
          .then(() => {
            toast({
              variant: "default",
              title: "successfully",
              description: toastMessage,
              color: "#65BA74",
            });
            router.push("/dashboard/user");
          })
          .catch(() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            });
          });
      } else {
        updateUser({ userId: data._id, newUser: data })
          .unwrap()
          .then(() => {
            toast({
              variant: "default",
              title: "successfully",
              description: toastMessage,
              color: "#65BA74",
            });
            router.push("/dashboard/user");
          })
          .catch(() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            });
          });
      }
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
            name="avatar"
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
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>userName</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="User Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>firstName</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="First Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>lastName</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Last Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Type</FormLabel>
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
                          placeholder="Select a userType"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {userType.map((typeUser) => (
                        <SelectItem key={typeUser._id} value={typeUser._id}>
                          {typeUser.name}
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
              name="workspace"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>WorkSpace</FormLabel>
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
                          placeholder="Select a WorkSpace"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {workSpace.map((typeUser) => (
                        <SelectItem key={typeUser._id} value={typeUser._id}>
                          {typeUser.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
