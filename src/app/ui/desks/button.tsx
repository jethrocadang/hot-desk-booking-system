import clsx from 'clsx';
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';



export function Button({status}:{status:string}) {
  return (
    <button
      className={clsx(
        "flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors ",
        {
            'bg-amber-500 hover:bg-amber-400': status == 'AVAILABLE',
            'bg-green-500 hover:bg-green-400': status == 'DISABLE',

        },
      )}
    >
        <span>
        {status === 'AVAILABLE' ? 'Disable' : 'Make Available'}
        </span>
        {status === 'AVAILABLE' ? <ExclamationCircleIcon className="h-5 md:ml-4" /> : <CheckCircleIcon className="h-5 md:ml-4"/>}
    </button>
  );
}
