"use server";

import UsersTable from "@/app/ui/users/table";
import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";
import { getUsers } from "@/app/lib/data";

export default async function Page() {

  const users = await getUsers();

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
      <UsersTable users={users}/>
    </main>
  );
}
