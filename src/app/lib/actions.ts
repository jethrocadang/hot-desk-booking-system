'use server';

import prisma from "./prisma";
import {z} from 'zod';
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache';
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { Desk } from "@prisma/client";




// Create Booking
const FormSchema = z.object({
    name: z.string(),
    image: z.string(),
    userEmail: z.string(),
    deskId: z.string(),
    date: z.string()
  });
  

const CreateBooking = FormSchema

export async function createBooking(formData : FormData){

  console.log(formData)

  const { userEmail, deskId, date, image, name} = CreateBooking.parse({
    userEmail : formData.get('userEmail'),
    deskId: formData.get('deskId'),
    date: formData.get('Date'),
    name: formData.get('name'),
    image: formData.get('image')


  })



  try{
    await prisma.booking.create({
      data:{
        deskId,
        userEmail,
        date,
        image,
        name 
      }
    })
  } catch(error){
    return { message: 'Database Error: Failed to Create Booking.' }
  }

  revalidatePath('');
  redirect('/users/dashboard');
 
};


// Create User
// const userSchema = z.object({
//   firstName: z.string().min(1, "Required."),
//   lastName: z.string().min(1, "Required"),
//   email: z.string().min(1, "Required").email("Invalid Email"),
//   password: z.string().min(5, "At least 12 Characters"),
// });

// const CreateUser = userSchema

// export async function createUser(formData : FormData){

//   const { firstName, lastName, email, password} = CreateUser.parse({
//     firstName : formData.get('firstName'),
//     lastName : formData.get('lastName'),
//     email : formData.get('email'),
//     password: formData.get('password')
//   })

  

//   // Check email if existing
//   const existingUserEmail = await prisma.user.findUnique({
//     where: {
//       email: email,
//     },
//   });

//   if (existingUserEmail) {
//     return console.log('Email existing')
//   }

//   // Hash paswword
//   const hashPassword = await hash(password, 10);


//   return console.log(firstName, lastName, email, hashPassword)

// }


// Update Floor Status
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

// Update Room Status
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

// Update Desk Status
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

//Delete Booking

export async function deleteBooking(id:string){
  const bookingId = id;

  const DeleteBooking = await prisma.booking.delete({
    where:{
      id: bookingId
    }
  })

  revalidatePath('')

  return DeleteBooking

}


//Promote user


export async function promoteUser(id: string){

  const userId = id

  console.log(userId)

  const CurrentRole = await prisma.user.findUnique({
    where:{
      id : userId
    }
  })

  const UpdateRole = CurrentRole?.role === "USER" ? "ADMIN" : "USER";

  const UpdateUserRole = await prisma.user.update({
    where:{
      id: userId
    },
    data:{
      role: UpdateRole
    }
  })

  revalidatePath('superAdmins/dashboard/users')

  return UpdateUserRole
}


//Delete User

export async function deleteUser(id:string){
  const userId = id;

  console.log(userId)
  
  const DeleteUser = await prisma.user.delete({
    where:{
      id: userId
    }
  })

  revalidatePath('')

  return DeleteUser

}