import {
    UserGroupIcon,
    Cog6ToothIcon,
    BookmarkIcon,
    Squares2X2Icon
    
  } from "@heroicons/react/24/outline";
  import { lusitana } from "@/app/ui/fonts";
  import { countInfosForCards } from "@/app/lib/data";
  
  //Icons
  const iconMap = {
    users: UserGroupIcon,
    floorManagers: Cog6ToothIcon,
    desks: Squares2X2Icon,
    bookings: BookmarkIcon,
  };
  
  export default async function AdminCardWrapper() {
    const { countUsers, countBookings, countDesks, countAdmins } =
      await countInfosForCards();
  
    return (
      <>
        <Card title="Users" value={countUsers} type="users" />
        <Card title="Bookings" value={countBookings} type="bookings" />
        <Card title="Desks" value={countDesks} type="desks" />
      </>
    );
  }
  
  export function Card({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: "users" | "floorManagers" | "desks" | "bookings";
  }) {
    const Icon = iconMap[type];
  
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
          <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <p
          className={`${lusitana.className}
              truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {value}
        </p>
      </div>
    );
  }
  