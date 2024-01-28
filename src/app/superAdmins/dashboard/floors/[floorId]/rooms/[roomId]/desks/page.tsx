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
          { label: "Floors", href: "/superAdmins/dashboard/floors" },
          { label: "Rooms", href: "/superAdmins/dashboard/floors/rooms" },
          {
            label: "Desks",
            href: "/superAdmins/dashboard/floors/desks",
            active: true,
          },
        ]}
      />

      {/* <div className={`${lusitana.className} bg-sky-100 p-3 mb-10 rounded-lg`}>
        Private Office
      </div> */}
      <Desks desks={desks}/>
    </main>
  );
}
