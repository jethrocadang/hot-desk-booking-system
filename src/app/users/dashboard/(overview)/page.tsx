'use client';

import UserBookingsTable from "@/app/ui/bookings/userBookingsTable";
import { getBookings } from "@/app/lib/data";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";


export default function Page() {

const {data: session} = useSession();





  // const bookings = await getBookings()

    return (
      <main>
        <p className={`${lusitana}`}>Welcome {`${session?.user?.name}`}, start your Booking today !</p>
      </main>
    )
  }