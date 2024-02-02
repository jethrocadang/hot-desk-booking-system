import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";
import { lusitana } from "@/app/ui/fonts";
import { Desks } from "@/app/ui/desks/ui-desks";
import { getDesks } from "@/app/lib/data";

export default async function Page() {

const desks = await getDesks();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Floors", href: "/admins/dashboard/floors" },
          { label: "Rooms", href: "/admins/dashboard/floors/rooms" },
          {
            label: "Desks",
            href: "/admins/dashboard/floors/desks",
            active: true,
          },
        ]}
      />
      <Desks desks={desks}/>
    </main>
  );
}
