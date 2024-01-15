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

export function DeleteBooking() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Link
        href=""
        className="rounded-md border p-2 hover:bg-gray-100"
        onClick={() => setShowModal(true)}
      >
        <TrashIcon className="w-5" />
      </Link>
      
    </>
  );
}

export function EditBooking() {
  return (
    <Link href="" className="rounded-md border p-2 hover:bg-gray-100">
      <PencilIcon className="w-5" />
    </Link>
  );
}
