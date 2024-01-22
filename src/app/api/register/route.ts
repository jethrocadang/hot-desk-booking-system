import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { hash } from "bcrypt";
import * as z from "zod";

const userSchema = z.object({
  firstName: z.string().min(1, "Required."),
  lastName: z.string().min(1, "Required"),
  email: z.string().min(1, "Required").email("Invalid Email"),
  password: z.string().min(12, "At least 12 Characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, password } = userSchema.parse(body);

    //check email if existing

    const existingUserEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUserEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exixts" },
        { status: 409 }
      );
    }

    const hashPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "Successful" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({message: 'Oh why?!'});
  }
}
