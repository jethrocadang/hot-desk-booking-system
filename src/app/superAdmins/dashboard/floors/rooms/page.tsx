import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";
import { Rooms } from "@/app/ui/desks/ui-desks";
import { lusitana } from "@/app/ui/fonts";

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Floors", href: "/superAdmins/dashboard/floors" },
          { label: "Rooms", href: "/superAdmins/dashboard/floors/rooms", active: true },
          { label: "Desks", href: "/superAdmins/dashboard/floors/desks" },
        ]}
      />
      <div className={`${lusitana.className} bg-sky-100 p-3 mb-10 rounded-lg`}>Floor 1</div>

      <Rooms/>

    </main>
  );
}
