"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useConvexAuth } from "convex/react";
import { Spinner } from "../../../components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-2xl sm:text-5xl md:text-6xl font-semibold">
        Your Ideas, Documents, & Plans. Unified. Welcome to &nbsp;
        <span className="underline">Sotion</span>
      </h1>
      <h3 className="text-base sm:text-sl md:text-2xl font-medium">
        Sotion is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Sotion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {
        !isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
                <Button>
                    Get Sotion free
                    <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
            </SignInButton>
        )
      }
    </div>
  );
};
