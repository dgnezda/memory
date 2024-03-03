import Image from "next/image";
import Link from 'next/link';
import { lobster } from "./ui/fonts";

export default function Home() {
  return (
    <main className="flex flex-col flex-wrap items-center bg-slate-50">
      <h1 className={`${lobster.className} text-5xl`}>memory</h1>
      <Link href={"./dashboard/game"} className="text-white bg-gray-700 hover:bg-gray-500 rounded-lg m-10 p-10">PLAY</Link>
      <div>Login</div>
    </main>
  );
}
