'use client';

import {
  TrophyIcon,
  InformationCircleIcon,
  PuzzlePieceIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  // { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Game', href: '/dashboard/game', icon: PuzzlePieceIcon },
  { name: 'Scores', href: '/dashboard/scores', icon: TrophyIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: CogIcon },
  { name: 'About', href: '/dashboard/about', icon: InformationCircleIcon},
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-teal-100 hover:text-slate-700 transition-colors lg:flex-none lg:justify-start lg:p-2 lg:px-3`,
              {
                'bg-teal-100 text-slate-600': pathname === link.href,
              },
              )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden lg:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
