import Breadcrumbs from "@/app/ui/bookings/breadcrumbs";
import BookingsTable from "@/app/ui/bookings/table";


export default function Page() {
    return (
      <main>
        <Breadcrumbs
        breadcrumbs={[
          { label: "Bookings", href:"/superAdmins/dashboard/bookings", active:true}
        ]}
        />
        <BookingsTable/>
      </main>
    )
  }