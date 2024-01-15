import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Desks", href: "/admins/dashboard/desks", active: true },
          { label: "Update Desks", href: "/admins/dashboard/desks/update" },
        ]}
      />

      <Image
      src="/desks/desks-main.png"
      height={1000}
      width={1000}
      alt="Floor Image"
      />
    </main>
  );
}
