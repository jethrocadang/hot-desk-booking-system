import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";
import BookingsTable from "@/app/ui/bookings/table";
import { getBookings } from "@/app/lib/data";


export default async function Page() {

  const bookings = await getBookings();

    return (
      <main>
        <Breadcrumbs
        breadcrumbs={[
          { label: "Bookings", href:"/superAdmins/dashboard/bookings", active:true}
        ]}
        />
        <BookingsTable bookings={bookings}/>
      </main>
    )
  }