import Link from "next/link";
import { PlusIcon, TrashIcon, ExclamationCircleIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export function AddFloor(){
    return(
        <Link
        href=""
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Add Floor</span>{' '}
        <PlusIcon className="h-5 md:ml-4" />
      </Link>
    )
}

export function DeleteFloor(){
    return(
        <Link
        href=""
        className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Delete Floor</span>{' '}
        <TrashIcon className="h-5 md:ml-4" />
      </Link>
    )
}

export function DisableFloor(){
    return(
        <Link
        href=""
        className="flex h-10 items-center rounded-lg bg-amber-500 px-4 text-sm font-medium text-white transition-colors hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Disable Floor</span>{' '}
        <ExclamationCircleIcon className="h-5 md:ml-4" />
      </Link>
    )
}

export function DisableRoom(){
    return(
        <Link
        href=""
        className="flex h-10 items-center rounded-lg bg-amber-500 px-4 text-sm font-medium text-white transition-colors hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Disable Room</span>{' '}
        <ExclamationCircleIcon className="h-5 md:ml-4" />
      </Link>
    )
}

export function DeleteRoom(){
    return(
        <Link
        href=""
        className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Delete Room</span>{' '}
        <TrashIcon className="h-5 md:ml-4" />
      </Link>
    )
}

export function DisableDesk(){
  return(
      <Link
      href=""
      className="flex h-10 items-center rounded-lg bg-amber-500 px-4 text-sm font-medium text-white transition-colors hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Disable Desk</span>{' '}
      <ExclamationCircleIcon className="h-5 md:ml-4" />
    </Link>
  )
}

export function DeleteDesk(){
  return(
      <Link
      href=""
      className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Delete Desk</span>{' '}
      <TrashIcon className="h-5 md:ml-4" />
    </Link>
  )
}

export function ViewFloor(){
  return(
      <Link
      href=""
      className="flex h-10 items-center rounded-lg bg-sky-500 px-4 text-sm font-medium text-white transition-colors hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Floor 1</span>{' '}
      <ArrowTopRightOnSquareIcon className="h-5 md:ml-4" />
    </Link>
  )
}

export function ViewRoom(){
  return(
      <Link
      href=""
      className="flex h-10 items-center rounded-lg bg-sky-500 px-4 text-sm font-medium text-white transition-colors hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Private Office</span>{' '}
      <ArrowTopRightOnSquareIcon className="h-5 md:ml-4" />
    </Link>
  )
}