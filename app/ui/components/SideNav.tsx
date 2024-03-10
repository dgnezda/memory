import Link from 'next/link';
import NavLinks from './NavLinks';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { lobster } from '../fonts';
import { mainColors } from '../colors';
// import { PowerIcon } from '@heroicons/react/24/outline';
// import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 lg:px-2">
      <div className='hidden lg:block'>
          <div className={`mb-2 flex h-20 items-end justify-start rounded-lg ${mainColors.main} p-4 lg:h-40`}>
            <div className="flex lg:justify-start justify-between items-center flex-wrap w-32 text-white lg:w-40">
            <PuzzlePieceIcon className='lg:w-24 w-10'/>
            <div className={`${lobster.className} lg:text-3xl text-2xl self-auto ml-1 md:top-5 top-1`}>memory</div>
          </div>
        </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2">
        <NavLinks />
        <div className="flex hidden h-auto w-full grow rounded-lg bg-gray-50 lg:block p-2 text-sm"></div>
        {/* <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-lg bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 lg:flex-none lg:justify-start lg:p-2 lg:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden lg:block">Sign Out</div>
          </button>
        </form> */}
      </div>
    </div>
  );
}
