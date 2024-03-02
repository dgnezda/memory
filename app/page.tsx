import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import { lobster } from "./ui/fonts";

export default function Home() {
  const squareArr = Array(16).fill(1)

  return (
    <main className="flex flex-col h-full flex-wrap items-center bg-slate-50">
      <h1 className={`${lobster.className} my-20 text-8xl`}>memory</h1>
      {/* <Link href={"./dashboard/game"} className="text-white bg-gray-700 hover:bg-gray-500 rounded-lg m-10 p-10">PLAY</Link> */}
      
      <div className="grid justify-center items-center grid-cols-4 grid-rows-4 gap-5 mb-20">
        {squareArr.map(sqr => (
          <div className="bg-gray-300 h-20 w-20"></div>
        ))}
      </div>
      <Link
        href="/login"
        className="flex mb-20 self-auto items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>Play</span> <ArrowRightIcon className="w-5 md:w-6" />
      </Link>
    </main>
  );
}
