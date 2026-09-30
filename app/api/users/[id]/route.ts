import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body = await request.json();

  const name = body.name?.trim();
  const username = body.username?.trim();
  const email = body.email?.trim();

  if (!name || !username || !email) {
    return NextResponse.json(
      {
        message:
          "Name, username, and email are required",
      },
      {
        status: 400,
      }
    );
  }

  if (!email.includes("@")) {
    return NextResponse.json(
      {
        message: "Please enter a valid email",
      },
      {
        status: 400,
      }
    );
  }

  const user = await db.orm.public.User
    .where({
      id: Number(id),
    })
    .update({
      name,
      username,
      email,
    });

  return NextResponse.json({
    message: "User updated successfully",
    user,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await db.orm.public.User
    .where({
      id: Number(id),
    })
    .delete();

  return NextResponse.json({
    message: "User deleted successfully",
  });
}