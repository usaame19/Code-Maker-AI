'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LockIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

export interface userProps{
    id?: string,
    name?: string | null
    email?: string | null
    image?: string | null
    role?: string 
}
const UserAvatar = ({user}: {user : userProps}) => {
    const getInitials = (name: string | null) => {
        return name ? name[0].toUpperCase() : 'U'; // Default to 'U' if no name is provided
      };
    
  return (
    <div className="flex items-center justify-around space-x-4">
      <div className="flex items-center justify-between space-x-2">
        <Avatar>
          <AvatarImage src={user?.image!} />
          <AvatarFallback>{getInitials(user?.name!)}</AvatarFallback>
        </Avatar>
        <span className="text-md text-slate-600 font-[500] ">
            {user.name} 
        </span>
      </div>
      <LockIcon
      onClick={()=> signOut()}
       className="text-green-700 cursor-pointer" />
    </div>
  );
};

export default UserAvatar;
