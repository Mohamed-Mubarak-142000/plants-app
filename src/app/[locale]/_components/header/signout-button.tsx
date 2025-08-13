"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import React from "react";

const SignoutButton = ({ className }: { className?: string }) => {
  return (
    <Button
      className={cn("w-full text-lg ", className)}
      variant={"destructive"}
      onClick={() => signOut()}
    >
      Sign out
    </Button>
  );
};

export default SignoutButton;
