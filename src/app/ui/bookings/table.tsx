import Image from "next/image";
import BookingStatus from "./status";
import { EditBooking, DeleteBooking } from "./buttons";
import { Booking } from "@prisma/client";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default async function BookingsTable({
  bookings,
}: {
  bookings: Booking[];
}) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  User
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                {/* <th scope="col" className="px-3 py-5 font-medium">
                  Time
                </th> */}
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                {/* <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th> */}
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {bookings?.map((bookings) => (
                <tr
                  key={bookings.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        className="rounded-full"
                        src={bookings.image}
                        height={40}
                        width={40}
                        alt="Profile"
                      />
                      <p>{bookings.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{bookings.userEmail}</p>
                  </td>
                  {/* <td className="whitespace-nowrap px-3 py-3">10:00 AM</td> */}
                  <td className="whitespace-nowrap px-3 py-3">
                    {bookings.date}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <BookingStatus status={`${bookings.bookingStatus}`} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <EditBooking />
                      <DeleteBooking id={bookings.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
