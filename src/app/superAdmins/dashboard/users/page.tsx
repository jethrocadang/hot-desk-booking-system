import UsersTable from "@/app/ui/users/table";
import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Bookings",
            href: "/superAdmins/dashboard/users",
            active: true,
          },
        ]}
      />
      <UsersTable />
    </main>
  );
}
