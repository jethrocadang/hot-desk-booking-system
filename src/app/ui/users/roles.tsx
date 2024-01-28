import { UserCircleIcon, Cog6ToothIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function UserRole({ role }: { role: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-sky-500 text-white font-medium': role === 'SUPERADMIN',
          'bg-orange-500 text-white font-medium': role === 'ADMIN',
          'bg-green-500 text-white font-medium': role === 'USER',

        },
      )}
    >
      {role === 'SUPERADMIN' ? (
        <>
          Admin
          <ShieldCheckIcon className="ml-1 w-4 text-white font-medium" />
        </>
      ) : null}
      {role === 'ADMIN' ? (
        <>
          Floor Manager
          <Cog6ToothIcon className="ml-1 w-4 text-white font-medium" />
        </>
      ) : null}
        {role === 'USER' ? (
        <>
          User
          <UserCircleIcon className="ml-1 w-4 text-white font-medium" />
        </>
      ) : null}
    </span>
  );
}
