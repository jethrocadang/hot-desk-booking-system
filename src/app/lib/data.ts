import { Floor, Room, Desk } from "@prisma/client";
import prisma from "./prisma";

export async function getFloors() {
  const floors = await prisma.floor.findMany({
    where: { deskStatus: "AVAILABLE" },
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

export async function getRooms() {
    const rooms = await prisma.room.findMany({
      where: {
        deskStatus: "AVAILABLE",
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
  

export async function getDesks() {
  const desks = await prisma.desk.findMany({
    where: { deskStatus: "AVAILABLE" },
    orderBy: [{ deskTitle: "asc" }],
    include:{
        room: true
    }
  });
  return desks;
}
