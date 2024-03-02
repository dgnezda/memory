import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import LoginForm from '@/app/ui/login-form';
import { lobster } from '../ui/fonts';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="flex justify-center items-center w-32 text-white md:w-36">
            <PuzzlePieceIcon className='h-28 self-center' />
          </div>
          <div className={`${lobster.className} self-center text-5xl text-white`}>memory</div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}