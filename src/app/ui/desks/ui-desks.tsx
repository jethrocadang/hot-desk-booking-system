import Image from "next/image";
import { AddFloor, DisableFloor, DeleteFloor, DeleteRoom, DisableRoom, ViewFloor, ViewRoom, DeleteDesk, DisableDesk } from "./buttons";
import { lusitana } from "../fonts";

export function Floors() {
  return (
    <div>
      <div className=" flex justify-between">
        <div
          className={` flex items-center font-medium text-lg `}
        >
        <ViewFloor/>
        </div>
        <div className="flex justify-end gap-2">
          <DeleteFloor />
          <DisableFloor />
        </div>
      </div>
      <div className="flex mt-5 justify-center ">
        <Image
          src="/desks/desks-main.png"
          width={1000}
          height={1000}
          alt="Floor 1"
        />
      </div>
    </div>
  );
}

export function Rooms() {
  return (
    <div className="flex flex-row">
      <div className="flex justify-center ">
        <Image
          src="/desks/desks-prvO.png"
          width={250}
          height={250}
          alt="Floor 1"
        />
      </div>
      <div className=" flex flex-col justify-between pl-5">
        <div
          className={` flex items-center font-medium text-lg `}
        >
          <ViewRoom/>
        </div>
        <div className="flex justify-end gap-2 ">
          <DeleteRoom />
          <DisableRoom />
        </div>
      </div>
    </div>
  );
}

export function Desks() {
  return (
    <div className="flex flex-row">
      <div className="flex justify-center ">
        <Image
          src="/desks/desks-PO1.png"
          width={250}
          height={250}
          alt="Floor 1"
        />
      </div>
      <div className=" flex flex-col justify-between pl-5 ">
        <div
          className={`${lusitana.className} flex items-center font-medium text-lg `}
        >
          Private Office
        </div>
        <div className="flex justify-end gap-2 ">
          <DisableDesk/>
          <DeleteDesk/>

        </div>
      </div>
    </div>
  );
}
