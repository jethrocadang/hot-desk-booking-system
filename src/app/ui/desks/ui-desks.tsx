import Image from "next/image";
import {
  AddFloor,
  DisableFloor,
  DeleteFloor,
  DeleteRoom,
  DisableRoom,
  ViewFloor,
  ViewRoom,
  DeleteDesk,
  DisableDesk,
} from "./buttons";
import { lusitana } from "../fonts";
import { Floor, Room, Desk } from "@prisma/client";

export async function Floors({ floors }: { floors: Floor[] }) {

  return (
    <table>
      <thead>
        <tr>
          <th>Floors</th>
        </tr>
      </thead>
      <tbody>
        {floors?.map((floor) => (
          <tr key={floor.id}>
            <td>
              <div className=" flex justify-between mt-7">
                <div className={` flex items-center font-medium text-lg `}>
                  <ViewFloor id={floor.id} title={floor.floorTitle || ''}/>
                </div>
                <div className="flex justify-end gap-2">
                  <DeleteFloor id={floor.id}/>
                  <DisableFloor id={floor.id} status={floor.deskStatus}/>
                </div>
              </div>
              <div className="flex mt-5 justify-center ">
                <Image
                  src={`${floor.imageUrl}`}
                  width={1000}
                  height={1000}
                  alt="Floor 1"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Rooms({ rooms }: { rooms: Room[] }) {
  console.log(rooms)
  return (
    <table>
      <tbody>
        {rooms?.map((room) => (
          <tr key={room.id} className="flex">
            <td>
              <div className="flex flex-row mt-7">
                <div className="flex justify-center ">
                  <Image
                    src={`${room.imageUrl}`}
                    width={800}
                    height={800}
                    alt="Floor 1"
                  />
                </div>
                <div className=" flex flex-col justify-between pl-5">
                  <div className={` flex items-center font-medium text-lg `}>
                    <ViewRoom id={room.id} title={room.roomTitle || ''} />
                  </div>
                  <div className="flex justify-end gap-2 ">
                    <DeleteRoom />
                    <DisableRoom status={room.deskStatus} id={room.id}/>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Desks({ desks }: { desks: Desk[] }) {
  return (
    <table>
      <tbody>
        {desks?.map((desk) => (
        <tr key={desk.id}>
          <td>
            <div className="flex flex-row mt-7">
              <div className="flex justify-center ">
                <Image
                  src={`${desk.imageUrl}`}
                  width={500}
                  height={500}
                  alt="Floor 1"
                />
              </div>
              <div className=" flex flex-col justify-between pl-5 ">
                <div
                  className={`${lusitana.className} flex items-center font-medium text-lg `}
                >
                  {desk.deskTitle}
                </div>
                <div className="flex justify-end gap-2 ">
                  <DisableDesk id={desk.id} status={desk.deskStatus}/>
                  <DeleteDesk />
                </div>
              </div>
            </div>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}
