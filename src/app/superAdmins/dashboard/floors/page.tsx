import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";
import {Floors } from "@/app/ui/desks/ui-desks";

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Floors", href: "/superAdmins/dashboard/floors", active: true },
          { label: "Rooms", href: "/superAdmins/dashboard/floors/rooms" },
          { label: "Desks", href: "/superAdmins/dashboard/floors/desks" },
        ]}
      />
      <Floors/>
    </main>
  );
}
