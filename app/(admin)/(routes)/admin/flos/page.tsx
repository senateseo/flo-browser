"use client";
import { ChevronRight, HomeIcon, Settings, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "convex/react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { api } from "@/convex/_generated/api";
import moment from "moment";

export default function FlosPage(){
  
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const flos = useQuery(api.documents.getAdminSearch, {
    keyword: searchKeyword
});


  const onChangeSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const onClickSearch = () => {
    // TODO
  };

  const renderTable = () => {

    if(flos === undefined){
      return (
        <div className="flex justify-center items-center">
        <Spinner />
      </div>
      )
    }else if(flos != undefined && flos?.length===0 ){
      return (
      <div className="flex justify-center items-center py-10 text-muted-foreground">
        <span>No Results Found</span>
      </div>
      )
    }else{
      return (
        <table className="min-w-full table-fixed divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" className="relative px-7 sm:w-12 sm:px-6"></th>
              <th
                scope="col"
                className="min-w-[4rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
              >
                Title
              </th>
              <th
                scope="col"
                className="min-w-[4rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
              >
                User
              </th>
              <th
                scope="col"
                className=" py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Published
              </th>
              <th
                scope="col"
                className=" py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Created
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 space-y-8 ">
          {flos?.map((flo) => (
              <tr key={flo._id} >
                <td className="relative px-7 sm:w-12 sm:px-6"></td>
               
                <td className="whitespace-nowrap  py-4 text-sm text-gray-500">
                  {flo.title}
                </td>
                <td className="whitespace-nowrap  py-4 text-sm text-gray-500">
                  <span className="text-ellipsis">{flo.userId}</span>
                </td>
                <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                  {flo.isPublished ? "Yes" : "No"}
                </td>
                <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                  {moment(flo._creationTime).format("yyyy-MM-DD hh:mm:ss")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    )
    }
  }

  return (
    <div className="flex flex-col space-y-8 p-4">
      <div className="bg-secondary p-4 rounded-md shadow-md">
        <div className="sm:flex  flex-col flex space-y-8">
          <div className="flex space-x-4 items-center">
            <HomeIcon className="text-muted-foreground" size={"20"} />
            <Link href="/admin">
              <span className="text-muted-foreground font-bold">Home</span>
            </Link>
            <ChevronRight className="text-muted-foreground" />
            <span className="font-bold">Flos</span>
          </div>

          <div className="sm:flex-auto">
            <h1 className="text-2xl font-bold leading-6 text-gray-900">
              Flos
            </h1>
          </div>

          <div className="flex space-x-4">
            <Input
              placeholder="Search for flos"
              className="w-60"
              onChange={onChangeSearchKeyword}
            />
            <Button onClick={onClickSearch}>Search</Button>

            <div className="flex items-center space-x-4">
              <Settings className="text-muted-foreground cursor-pointer" />
              <Trash className="text-muted-foreground cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 sm:px-6 lg:px-8 rounded-md bg-secondary shadow-md">
        <div className="mt-2 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
              <div className="relative">{renderTable()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}