"use client";
import { ChevronRight, HomeIcon, Settings, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

const USER_API_URL = "/api/users";

interface User {
  id: any;
  imageUrl: any;
  firstName: any;
  lastSignInAt: any;
  emailAddresses:any;
}

export default function UsersPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${USER_API_URL}?q=${searchKeyword}`);
      const data = await res.json();

      setUsers(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      // TODO: Error Toast box
      setIsLoading(false);
    }
  };

  const onChangeSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const onClickSearch = () => {
    getUsers();
  };

  const renderTable = () => {

    if(isLoading){
      return (
        <div className="flex justify-center items-center">
        <Spinner />
      </div>
      )
    }else if(users.length===0){
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
                Profile
              </th>
              <th
                scope="col"
                className="min-w-[6rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
              >
                First Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Last Login
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {users?.map((user: User) => (
              <tr key={user.id}>
                <td className="relative px-7 sm:w-12 sm:px-6"></td>
                <td>
                  <Image
                    src={user.imageUrl}
                    className="rounded-full"
                    width={20}
                    height={20}
                    alt="profileImage"
                  />
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {user.firstName}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {user.emailAddresses[0].emailAddress}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {moment(user.lastSignInAt).format("yyyy-MM-DD hh:mm:ss")}
                </td>
                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-indigo-900"
                  >
                    Edit
                    <span className="sr-only">, {user.firstName}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    )
    }
  }

  useEffect(() => {
    if (searchKeyword === "") {
      getUsers();
    }
  }, [searchKeyword]);

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
            <span className="font-bold">Users</span>
          </div>

          <div className="sm:flex-auto">
            <h1 className="text-2xl font-bold leading-6 text-gray-900">
              Users
            </h1>
          </div>

          <div className="flex space-x-4">
            <Input
              placeholder="Search for users"
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