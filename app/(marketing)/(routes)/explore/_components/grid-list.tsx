"use client";

import moment from "moment";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useOrigin } from "@/hooks/use-origin";

export const GridList = ({ itemList }: any) => {
  const origin = useOrigin();

  if (!itemList) {
    return (
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-12"
      >
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
      </ul>
    );
  }


  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-12"
    >
      {itemList?.map((item: any) => (
        <li
          key={item._id}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300 flex justify-center items-center">
              {item.icon}
            </div>
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">
                {moment(item._creationTime).startOf("day").fromNow()}
              </p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <Link
                  href={`${origin}/preview/${item._id}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  View
                </Link>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={"#"}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  Install
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
