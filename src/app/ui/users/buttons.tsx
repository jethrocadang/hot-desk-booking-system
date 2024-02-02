"use client";

import Link from "next/link";
import {
  PlusIcon,
  TrashIcon,
  ExclamationCircleIcon,
  PencilIcon,
  XMarkIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

import React from "react";

import { lusitana, inter } from "../fonts";

import { promoteUser, deleteUser } from "@/app/lib/actions";

export function DeleteUser({ id }: { id: string }) {

  const [showModal, setShowModal] = React.useState(false);
  const deleteUserwitId = deleteUser.bind(null, id);

  return (
    <>
      <Link
        href=""
        className="rounded-md border p-2 bg-red-500 hover:bg-red-400 text-white focus:outline-none focus:ring focus:ring-red-300"
        onClick={() => setShowModal(true)}
      >
        <TrashIcon className="w-5" />
      </Link>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-10 mx-auto  max-w-sm ">
              {/*content*/}
              <div className="bg-slate-50 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button onClick={() => setShowModal(false)}>
                    <span className=" font-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <XMarkIcon className="font-black" />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-10 flex justify-center flex-auto ">
                  <p className="text-base flex  ">
                    Are you sure you want to DELETE the user?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <form action={deleteUserwitId}>
                    <button
                      className="flex h-10 gap-1 font-bold items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      onClick={() => setShowModal(false)}
                    >
                      <span>DELETE USER </span>
                      <TrashIcon className="w-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export function EditUser({ id }: { id: string }) {
  const editUserwithId = promoteUser.bind(null, id);

  return (
    <form
      action={editUserwithId}
      className="rounded-md border bg-sky-500 p-2 hover:bg-sky-400 text-white"
    >
      <button>
        <PencilIcon className="w-5" />
      </button>
    </form>
  );
}
