"use client";

import Image from "next/image";
import moment from 'moment';
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

interface GridListItem {
    name : string;
    title: string;
    lastUpdated: Date
    role: string;
    email: string;
    telephone: string;
    icon: string;
}

interface GridListProps {
    itemList: GridListItem[]
}


export const GridList = ({itemList}: GridListProps) => {


    return (
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-12">
        {itemList.map((person) => (
          <li key={person.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300 flex justify-center items-center">
              {person.icon}
            </div>
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">{person.title}</h3>
                
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  {moment(person.lastUpdated).startOf('day').fromNow()} | {person.name}
                </p>
              </div>
              
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={'#'}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    View
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={'#'}
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
    )
  }