"use client";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";

import { useGetUsersQuery } from "src/redux/services/userApi";
import UserType from "src/types/userType";

interface RecentUsersProps {
  users: UserType[];
}
export function RecentUsers(props: RecentUsersProps) {
  const { users } = props;

  return (
    <div className="space-y-8">
      {users &&
        users.slice(0, 5).map((user, index) => (
          <div key={index} className="flex items-center">
            <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
              <AvatarImage
                className="object-cover"
                src={user.avatar ? user.avatar : "/avatars/02.png"}
                alt="Avatar"
              />
              <AvatarFallback>VN</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">
                {user.userName}
              </p>
              <p className="text-sm text-muted-foreground">{user.mail}</p>
            </div>
            <div className="ml-auto font-medium">{user.point} Point</div>
          </div>
        ))}
    </div>
  );
}
