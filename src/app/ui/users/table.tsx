import Image from "next/image";
import { DeleteUser, AcceptUser, EditUser } from "./buttons";
import UserRole from "./roles";

export default async function UsersTable() {
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
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/Cadang,Jethro R..jpg"
                      width={28}
                      height={28}
                      alt="Picture"
                      className="rounded-full"
                    />
                    <p>Jethro Cadang</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  jethrocadang@gmail.com
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                    <UserRole role={`superAdmin`}/>
                    <UserRole role={`admin`}/>
                    <UserRole role={`user`}/>

                </td>
                <td className="whitespace-nowrap px-3 py-3">January 1, 2023</td>
                <td className="whitespace-nowrap px-3 py-3">
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <EditUser/>
                    <DeleteUser/>
                    <AcceptUser/>
                  
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
