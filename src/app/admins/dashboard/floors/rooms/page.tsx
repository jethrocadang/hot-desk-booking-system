import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";
import { Rooms } from "@/app/ui/desks/ui-desks";
import { lusitana } from "@/app/ui/fonts";
import { getRooms, getRoomsbyID } from "@/app/lib/data";

export default async function Page() {

  const rooms = await getRooms()

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Floors", href: "/admins/dashboard/floors" },
          { label: "Rooms", href: "/admins/dashboard/floors/rooms", active: true },
          { label: "Desks", href: "/admins/dashboard/floors/desks" },
        ]}
      />
      <Rooms rooms={rooms}/>
    </main>
  );
}
