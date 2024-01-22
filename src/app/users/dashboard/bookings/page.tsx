import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";
import Link from "next/link";
import { getFloors, getRooms, getDesks } from "@/app/lib/data";
import { FloorForm } from "@/app/ui/bookings/form";

export default async function Page() {
  const floors = await getFloors();
  const rooms = await getRooms();
  const desks = await getDesks();
  return (
    <main className="flex flex-col">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Booking",
            href: "/superAdmins/dashboard/floors",
            active: true,
          },
        ]}
      />
      <div className="flex bg-gray-100 rounded-xl">
        <FloorForm floors={floors}  rooms={rooms} desks={desks}/>
      </div>
    </main>
  );
}
