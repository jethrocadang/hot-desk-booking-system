"use client";


import Link from "next/link";
import {
  PlusIcon,
  TrashIcon,
  ExclamationCircleIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./button";
import { updateFloorStatus, updateRoomStatus, updateDeskStatus } from "@/app/lib/actions";
import { getRoomsbyID } from "@/app/lib/data";
import { stat } from "fs/promises";


export function AddFloor({ id }: { id: string }) {
  return (
    <Link
      href=""
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Add Floor</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function DeleteFloor({id}: {id:String}) {
  return (
    <Link
      href=""
      className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Delete Floor</span>{" "}
      <TrashIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function DisableFloor({id, status}: {id:string; status: string}) {

  const updateFloorStatuswithID = updateFloorStatus.bind(null, id);
  return (
    <form action={updateFloorStatuswithID}>
      <Button status={status}/>
    </form>
  );
}

export function DisableRoom({id, status}: {id:string; status:string}) {

  const updateRoomStatuswithID = updateRoomStatus.bind(null, id)

  return (
   <form action={updateRoomStatuswithID}>
      <Button status={status}/>
   </form>
  );
}

export function DeleteRoom() {
  return (
    <Link
      href=""
      className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Delete Room</span>{" "}
      <TrashIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function DisableDesk({id, status}:{ id:string; status:string;}) {

  const updateDeskStatuswithID = updateDeskStatus.bind(null, id)

  return (
    <form action={updateDeskStatuswithID}>
         <Button status={status}/>

    </form>
  );
}

export function DeleteDesk() {

  return (
    <Link
      href=""
      className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Delete Desk</span>{" "}
      <TrashIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function ViewFloor({id, title} : {id:string; title:string}) {


  return (
    <Link
      href={`/superAdmins/dashboard/floors/rooms`}
      className="flex h-10 items-center rounded-lg bg-sky-500 px-4 text-sm font-medium text-white transition-colors hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">{title}</span>{" "}
      <ArrowTopRightOnSquareIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function ViewRoom({id, title} : {id:string; title:string}) {
  return (
    <Link
      href={`/superAdmins/dashboard/floors/desks`}
      className="flex h-10 items-center rounded-lg bg-sky-500 px-4 text-sm font-medium text-white transition-colors hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">{title}</span>{" "}
      <ArrowTopRightOnSquareIcon className="h-5 md:ml-4" />
    </Link>
  );
}
