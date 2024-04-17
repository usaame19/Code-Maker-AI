import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import UserAvatar from "./UserAvatar";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/AuthOptions";
import { User } from "@prisma/client";
import MobileMenu from "./MobileMenu";

const Navbar = async () => {
  const session = await getServerSession(AuthOptions);
  const userCredit = (session?.user as User).credit

  return (
    <div className="p-4 border-b flex h-full items-center justify-between bg-white shadow-sm">
      <div className="flex justify-items-center items-center space-x-4">
        {/* credit balance */}
        <div className="text-slate-500 space-x-2">
          <span>Credit Balance</span>
          <span className="font-bold">{userCredit} </span>
        </div>
        {/* top Up credit */}
        <Link href={"/pricing"}>
          <Button>Top Up Credits</Button>
        </Link>
      </div>
      {/* User Avatar */}

      <div className="hidden md:flex">
        <UserAvatar user={session?.user!} />
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navbar;
