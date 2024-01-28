import Image from "next/image";
import { DeleteUser, AcceptUser, EditUser } from "./buttons";
import UserRole from "./roles";
import { User } from "@prisma/client";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default async function UsersTable({users}:{users:User[]}) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  User
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Role
                </th>
                {/* <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th> */}
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users?.map((users) => 
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <UserCircleIcon className="h-10 w-10"/>
                    <p>{users.firstName} {users.lastName}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {users.email}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                    <UserRole role={users.role}/>
                  

                </td>
                {/* <td className="whitespace-nowrap px-3 py-3">January 1, 2023</td> */}
                <td className="whitespace-nowrap px-3 py-3">
                </td>
                {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <EditUser/>
                    <DeleteUser/>
                    <AcceptUser/>
                  
                  </div>
                </td> */}
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
