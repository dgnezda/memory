import { mainColors } from "@/app/ui/colors";
import Button from "@/app/ui/components/Button";
import Title from "@/app/ui/components/Title";
import WhiteDiv from "@/app/ui/components/WhiteDiv";
import Link from "next/link";
import { ArrowPathIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';

export default function Page() {
    return (
        <div className="md:ml-0 ml-2">
            <Title>About</Title>
            <div>
                <WhiteDiv className="text-sm">
                    <div className="text-sm flex flex-row">
                        Hi! My name is Domen. Do you like my memory game app?
                        I hope you enjoy my app as much as I enjoyed building it!
                    </div>
                    <div className="mt-4">If you are interested in collaborating with me or hiring me for work, you can <Link href="https://github.com/dgnezda?tab=repositories" className="text-teal-500 text-sm text-bold hover:underline animate-pulse">check out my github repos</Link> or click on the button below to shoot me an email.</div>
                    <div className="my-4"><Button className={`${mainColors.main} ${mainColors.hover} w-40`}><Link href="mailto:domen.gnezda@pm.me" className="text-white text-md text-bold">Contact me</Link></Button></div>
                    
                </WhiteDiv>
                <WhiteDiv className="text-sm">
                    <div className="text-lg">Instructions</div>
                    <div className="mt-2">
                        <div>Find all matching pairs of cards!</div>
                    </div>
                    <div className="mt-2 flex flex-row">
                        <div>Press &nbsp;</div>
                        <ArrowPathIcon className="h-4 mt-[1px]" /> 
                        <div>&nbsp; to reset game.</div>
                    </div>
                    <div className="mt-2 flex flex-row">
                        <div>Press &nbsp;</div>
                        <SpeakerWaveIcon className="h-4 mt-[1px]" />
                        <div>&nbsp; to mute/unmute all sound.</div>
                    </div>
                    <div className="mt-2">
                        Press the 123/ABC/etc. button to change card faces from numbers to letters, symbols or arrows. 
                    </div>
                    <div className="mt-2">
                        Score is calculated based on the number of moves and time of completion. The less, the better!
                        The highest possible score is 1000 points, but it is almost impossible to achieve... Or is it?
                    </div>
                </WhiteDiv>
                
            </div>
        </div>
    )
}