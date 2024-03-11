import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { mainColors } from '../ui/colors';
import LoginForm from '../ui/components/LoginForm';
import Logo from '../ui/components/Logo';
import { lobster } from '../ui/fonts';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className={`flex h-20 w-full justify-center items-center rounded-lg ${mainColors.main} p-3 md:h-36`}>
          <div className="flex flex-row self-center items-center w-60 h-20 text-white">
            <PuzzlePieceIcon className='lg:w-24 w-16'/>
            <div className={`${lobster.className} lg:text-5xl text-5xl self-auto ml-1 md:top-5 top-1`}>memory</div>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}