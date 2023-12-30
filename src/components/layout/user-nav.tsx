"use client";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Button } from "src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";

//redux
import { useUserLogOutMutation } from "src/redux/services/authApi";
import { logOut } from "src/redux/slices/authSlice";

import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";

export function UserNav() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth.authData);
  const [Logout] = useUserLogOutMutation();
  const handleLogOut = async () => {
    await Logout({ userId: auth.user._id })
      .unwrap()
      .then((res) => {
        if (res) {
          router.push("/");
        }
      })
      .finally(() => {
        dispatch(logOut());
      });
  };

  if (auth) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={auth.user.avatar ?? ""}
                alt={auth.user?.userName ?? ""}
              />
              <AvatarFallback>{auth.user?.firstName}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {auth.user?.userName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {auth.user.mail}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="hover:cursor-pointer">
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogOut}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
