import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lobster } from './ui/fonts';
import { mainColors } from './ui/colors';

export default function Home() {
  const squareArr = Array(16).fill(1);

  return (
    <main className="flex h-full flex-col flex-wrap items-center bg-slate-50">
      <h1 className={`${lobster.className} md:my-10 my-8 md:text-8xl text-7xl`}>memory</h1>
      
      <div className="md:my-10 my:10 grid grid-cols-4 grid-rows-4 items-center justify-center gap-5">
        {squareArr.map((_sqr, index) => (
          <div key={index} className="md:h-20 h-14 md:w-20 w-14 bg-gray-300"></div>
        ))}
      </div>
      <Link
        href="/dashboard/game"
        className={`md:my-20 mt-10 mb-40 flex items-center gap-5 self-auto rounded-lg ${mainColors.main} px-6 py-3 text-sm font-bold text-white transition-colors ${mainColors.hover} md:text-base`}
      >
        <span>Play</span>{' '}
        <ArrowRightIcon  key={Date.now()} className="w-5 md:w-6" />
      </Link>
    </main>
  );
}