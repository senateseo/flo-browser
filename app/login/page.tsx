"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

const LoginPage = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

 
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (isAuthenticated) {
      redirect("/admin");
  }

  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center text-center gap-y-16 flex-1 px-6 pb-10">
        <SignInButton mode="modal">
          <Button>Login</Button>
        </SignInButton>
      </div>
    </div>
  );
};

export default LoginPage;
