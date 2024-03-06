import Link from 'next/link';
import NavLinks from './nav-links';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { lobster } from './fonts';
// import { PowerIcon } from '@heroicons/react/24/outline';
// import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className='hidden md:block'>
          <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-400 p-4 md:h-40">
            <div className="flex md:justify-start justify-between items-center flex-wrap w-32 text-white md:w-40">
            <PuzzlePieceIcon className='md:w-24 w-10'/>
            <div className={`${lobster.className} md:text-3xl text-2xl self-auto ml-1 top-5`}>memory</div>
          </div>
        </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        {/* <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form> */}
      </div>
    </div>
  );
}