"use client";

import Link from "next/link";
import React from "react";
import {
  PlusIcon,
  TrashIcon,
  ExclamationCircleIcon,
  PencilIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { deleteBooking } from "@/app/lib/actions";

export function DeleteBooking({ id }: { id: string }) {

  const deleteBookingwithID = deleteBooking.bind(null, id)


  return (
    <form action={deleteBookingwithID}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

export function EditBooking() {
  return (
    <Link href="" className="rounded-md border p-2 hover:bg-gray-100">
      <PencilIcon className="w-5" />
    </Link>
  );
}
