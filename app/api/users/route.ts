import { NextRequest, NextResponse,} from "next/server";
import { clerkClient } from "@clerk/nextjs";



export async function GET(request: NextRequest) {

  const query = request.nextUrl.searchParams.get('q');

  const users = await getUsers(query);
  return NextResponse.json(users);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  if (!id)
    return NextResponse.json({
      message: "Id is required",
    });
}

const getUsers = async (query: string | null) => {
  try {
    const res = await clerkClient.users.getUserList({
      query
    });

    return res;
  } catch (e) {
    console.log(e);
  }
};
