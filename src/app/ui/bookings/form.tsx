"use client";

import { Floor, Room, Desk } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { lusitana } from "../fonts";
import {
  ClockIcon,
  CalendarIcon,
  Squares2X2Icon,
  Square2StackIcon,
  StopIcon,
} from "@heroicons/react/24/outline";
import { DatePicker, TimePicker } from "antd";
import type { DatePickerProps } from "antd";
import type { GetProps } from "antd";
import { RangeValue } from "rc-picker/lib/interface";
import { useSession } from "next-auth/react";
import { createBooking } from "@/app/lib/actions";

import { Button } from "../button";

import dayjs from "dayjs";

const { RangePicker } = DatePicker;
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

export function FloorForm({
  floors,
  rooms,
  desks,
}: {
  floors: Floor[];
  rooms: Room[];
  desks: Desk[];
}) {

  const {data:session} = useSession()

  
  // useState for Floors|Rooms|Desks
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedDesk, setSelectedDesk] = useState<Desk | null>(null);
  // useState for btn confirm
  const [isConfirmed, setIsConfirmed] = useState(false);
  // useState for Date
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

  // Floor
  const handleFloorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFloorId = event.target.value;
    const floor = floors.find((f) => f.id === selectedFloorId);
    setSelectedFloor(floor || null);
    setSelectedRoom(null); // Hide Room Image
    setSelectedDesk(null); // Hide Desk Image
    setIsConfirmed(false);
  };
  //Room
  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRoomId = event.target.value;
    const room = rooms.find((r) => r.id === selectedRoomId);
    setSelectedRoom(room || null);
    setSelectedDesk(null); // Hide Desk
    setIsConfirmed(false);
  };
  //Desk
  const handleDeskChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDeskId = event.target.value;
    const desk = desks.find((d) => d.id === selectedDeskId);
    setSelectedDesk(desk || null);
    setIsConfirmed(false);
  };
  //Btn Confrim
  const handleConfirmClick = () => {
    setIsConfirmed(true);
  };

  //Disable Past Date
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().endOf("day");
  };

  //Handle change for Desk
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setSelectedDate(date);
  };

  const format = "HH:mm a";

  const [selectedTime, setSelectedTime] =
    useState<RangeValue<dayjs.Dayjs> | null>(null);

  const handleTimeChange = (
    value: RangeValue<dayjs.Dayjs>,
    formatString: [string, string]
  ) => {
    setSelectedTime(value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  };
  
  
  
  return (
    
    <form onSubmit={onSubmit} className="flex width-full flex-col gap-2.5 p-10 bg-white m-8 rounded-lg">
      

      {/* Date and Time */}
      <div className="flex flex-col gap-2.5">
        <div className=" flex flex-col">
          <div className="flex flex-row items-center gap-2">
            <CalendarIcon className="h-6 w-6" />
            <p>Set your Date</p>
          </div>
          <DatePicker disabledDate={disabledDate} onChange={onChange} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2">
            <ClockIcon className="h-6 w-6" />
            <p>Set your Time</p>
          </div>
          <TimePicker.RangePicker
            format={format}
            value={selectedTime}
            onChange={handleTimeChange}
          />
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-row items-center gap-2">
          <Squares2X2Icon className="h-6 w-6" />
          <label htmlFor="floor">Choose Floor</label>
        </div>

        <select
          id="floor"
          name="floorTitle"
          className=" w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          required
          onChange={handleFloorChange}
        >
          <option value="" disabled className="">
            Select a Floor
          </option>
          {floors.map((floor) => (
            <option key={floor.id} value={floor.id}>
              {floor.floorTitle}
            </option>
          ))}
        </select>

        {selectedFloor && !selectedRoom && (
          <Image
            src={`${selectedFloor.imageUrl}`}
            height={700}
            width={700}
            alt=""
          />
        )}
      </div>
      {/**Room Selection */}
      <div className="">
        <div className="flex flex-row items-center gap-2">
          <Square2StackIcon className="h-6 w-6" />
          <label htmlFor="room">Choose Room</label>
        </div>{" "}
        <select
          id="customer"
          name="customerId"
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          required
          onChange={handleRoomChange}
        >
          <option value="" disabled className="text-gray-500">
            Select a Room
          </option>
          {rooms
            .filter((room) => room.floorId === selectedFloor?.id)
            .map((room) => (
              <option key={room.id} value={room.id}>
                {room.roomTitle}
              </option>
            ))}
        </select>
        {selectedRoom && !selectedDesk && (
          <Image
            src={`${selectedRoom.imageUrl}`}
            height={700}
            width={700}
            alt=""
          />
        )}
      </div>

      <div className="">
        <div className="flex flex-row items-center gap-2">
          <StopIcon className="h-6 w-6" />
          <label htmlFor="desk">Choose Desk</label>
        </div>
        <select
          id="customer"
          name="customerId"
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          required
          onChange={handleDeskChange}
        >
          <option value="" disabled>
            Select a Desk
          </option>
          {desks
            .filter((desk) => desk.roomId === selectedRoom?.id)
            .map((desk) => (
              <option key={desk.id} value={desk.id}>
                {desk.deskTitle}
              </option>
            ))}
        </select>
        {selectedDesk && (
          <Image
            src={`${selectedDesk.imageUrl}`}
            height={700}
            width={700}
            alt=""
          />
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
