import { lusitana } from "@/app/ui/fonts";
import AdminCardWrapper from "@/app/ui/dashboard/adminCards";


export default function Page() {
    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <AdminCardWrapper/>
        </div>
      </main>
    )
  }