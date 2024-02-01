'use client';

import UserBookingsTable from "@/app/ui/bookings/userBookingsTable";
import { getBookings } from "@/app/lib/data";
import { useSession } from "next-auth/react";
import Image from "next/image";


export default function Page() {

const {data: session} = useSession();

const imageUrl = session?.user?.image;

console.log(imageUrl)
console.log(session?.user.id)
console.log(session?.user.email)



  // const bookings = await getBookings()

    return (
      <main>
        {/* <UserBookingsTable bookings={bookings}/>      */}
        {/* <img src={`${session?.user?.image}`} alt="" /> */}
        {/* <Image
        src={imageUrl}
        height={50}
        width={50}
        alt="akjsd"
        /> */}
        <p>{`${session?.user?.name}`}</p>
        <p>{imageUrl}</p>
      </main>
    )
  }