import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";

export default function Page() {
  return (
    <Breadcrumbs
      breadcrumbs={[
        { label: "Desks", href: "/admins/dashboard/desks" },
        {
          label: "Update Desks",
          href: "/admins/dashboard/desks/update",
          active: true,
        },
      ]}
    />
  );
}
