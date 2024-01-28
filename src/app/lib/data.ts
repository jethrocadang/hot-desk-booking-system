import { Floor, Room, Desk } from "@prisma/client";
import prisma from "./prisma";


// Get all Floors
export async function getFloors() {
  const floors = await prisma.floor.findMany({
    orderBy: [{ floorTitle: "asc" }],
    include:{
        rooms: {
            include:{
                desk: true,
            }
        }
        
    }
  });
  return floors;

}

// Get all Rooms
export async function getRooms() {
    const rooms = await prisma.room.findMany({
      where: {
      },
      orderBy: [
        { roomTitle: "asc" }
      ],
      include:{
        desk:true
      }
    });
    return rooms;
  }
  
// Get all Desks
export async function getDesks() {
  const desks = await prisma.desk.findMany({
    orderBy: [{ deskTitle: "asc" }],
    include:{
        room: true
    }
  });
  return desks;
}

// Get all Bookings
export async function getBookings() {
  const bookings = await prisma.booking.findMany({
  });
  return bookings;
}

// Get all Users
export async function getUsers(){
  const users = await prisma.user.findMany({})

  return users
}


// Get all Rooms by Floor ID

export async function getRoomsbyID({id}: {id:string}){

  const floorId = id

  const rooms = await prisma.room.findMany({
    where: {
      floorId: floorId
    },
    orderBy: [
      { roomTitle: "asc" }
    ],
    include:{
      desk:true
    }
  });
  
  return rooms;
}

 
