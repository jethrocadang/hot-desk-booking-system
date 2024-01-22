import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Desks",
            href: "/users/dashboard/desks",
            active: true
          },
        ]}
      />
    </main>
  );
}
