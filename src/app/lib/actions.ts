'use server';

import prisma from "./prisma";
import {z} from 'zod';
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache';
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { Desk } from "@prisma/client";





const FormSchema = z.object({
    userEmail: z.string(),
    deskId: z.string(),
    date: z.string()
  });
  

const CreateBooking = FormSchema

export async function createBooking(formData : FormData){

  const { userEmail, deskId, date} = CreateBooking.parse({
    userEmail : formData.get('userEmail'),
    deskId: formData.get('deskId'),
    date: formData.get('Date')
  })



  try{
    await prisma.booking.create({
      data:{
        deskId,
        userEmail,
        date,
        
      }
    })
  } catch(error){
    return { message: 'Database Error: Failed to Create Booking.' }
  }

  revalidatePath('');
  redirect('/users/dashboard');
 
};



const userSchema = z.object({
  firstName: z.string().min(1, "Required."),
  lastName: z.string().min(1, "Required"),
  email: z.string().min(1, "Required").email("Invalid Email"),
  password: z.string().min(5, "At least 12 Characters"),
});

const CreateUser = userSchema

export async function createUser(formData : FormData){

  const { firstName, lastName, email, password} = CreateUser.parse({
    firstName : formData.get('firstName'),
    lastName : formData.get('lastName'),
    email : formData.get('email'),
    password: formData.get('password')
  })

  

  // Check email if existing
  const existingUserEmail = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUserEmail) {
    return console.log('Email existing')
  }

  // Hash paswword
  const hashPassword = await hash(password, 10);


  return console.log(firstName, lastName, email, hashPassword)

}



export async function updateFloorStatus(id : string){

  const floorId = id;

  const CurrentStatus = await prisma.floor.findUnique({
    where:{
      id: floorId
    }
  })

  const UpdateStatus = CurrentStatus?.deskStatus === "AVAILABLE" ? "DISABLE" : "AVAILABLE";

  const UpdateFloorStatus = await prisma.floor.update({
    where:{
      id:floorId
    },
    data:{
      deskStatus: UpdateStatus,
    }
  })
  
revalidatePath('superAdmins/dashboard/floors')

return UpdateFloorStatus
}


export async function updateRoomStatus(id : string){

  const roomId = id;

  const CurrentStatus = await prisma.room.findUnique({
    where:{
      id: roomId
    }
  })

  const UpdateStatus = CurrentStatus?.deskStatus === "AVAILABLE" ? "DISABLE" : "AVAILABLE";

  const UpdateRoomStatus = await prisma.room.update({
    where:{
      id:roomId
    },
    data:{
      deskStatus: UpdateStatus,
    }
  })

  revalidatePath('superAdmins/dashboard/floors/rooms')


return UpdateRoomStatus
}


export async function updateDeskStatus(id : string){

  const deskId = id;

  const CurrentStatus = await prisma.desk.findUnique({
    where:{
      id: deskId
    }
  })

  const UpdateStatus = CurrentStatus?.deskStatus === "AVAILABLE" ? "DISABLE" : "AVAILABLE";

  const UpdatedeskStatus = await prisma.desk.update({
    where:{
      id:deskId
    },
    data:{
      deskStatus: UpdateStatus,
    }
  })

revalidatePath('superAdmins/dashboard/floors/desks')


return UpdatedeskStatus

}
