import { CheckCircleIcon, ExclamationCircleIcon, StarIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function BookingStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-sky-500 text-white font-medium': status === 'confirmed',
          'bg-orange-500 text-white font-medium': status === 'cancelled',
          'bg-green-500 text-white font-medium': status === 'completed',

        },
      )}
    >
      {status === 'confirmed' ? (
        <>
          Confirmed
          <CheckCircleIcon className="ml-1 w-4 text-white font-medium" />
        </>
      ) : null}
      {status === 'cancelled' ? (
        <>
          Cancelled
          <ExclamationCircleIcon className="ml-1 w-4 text-white font-medium" />
        </>
      ) : null}
        {status === 'completed' ? (
        <>
          Completed
          <StarIcon className="ml-1 w-4 text-white font-medium" />
        </>
      ) : null}
    </span>
  );
}
