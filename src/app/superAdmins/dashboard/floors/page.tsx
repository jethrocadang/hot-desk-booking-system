import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";
import {Floors } from "@/app/ui/desks/ui-desks";
import { getFloors, getRoomsbyID} from "@/app/lib/data";

export default async function Page() {

  // {params}: {params :{id: string}}
  // const id = params.id

  // const [floors, rooms] = await Promise.all([
  //   getRoomsbyID(id),
  //   get
  // ])
  
  const floors = await getFloors();


  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Floors", href: "/superAdmins/dashboard/floors", active: true },
          { label: "Rooms", href: "/superAdmins/dashboard/floors/rooms" },
          { label: "Desks", href: "/superAdmins/dashboard/floors/desks" },
        ]}
      />
      <div>
      <Floors floors={floors}/>
      </div>
    </main>
  );
}
