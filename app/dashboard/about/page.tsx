import { mainColors } from "@/app/ui/colors";
import Button from "@/app/ui/components/Button";
import Title from "@/app/ui/components/Title";
import WhiteDiv from "@/app/ui/components/WhiteDiv";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Title>About</Title>
            <div className="md:ml-0 ml-2">
                <WhiteDiv className={`text-sm`}>
                    <div className={`text-sm`}>
                        Hi! My name is Domen. Do you like my memory game app?
                        I hope you enjoy it as much as I enjoyed building it!
                    </div>
                    <div className="mt-4">If you are interested in collaborating with me or hiring me for work, you can <Link href="https://github.com/dgnezda?tab=repositories" className="text-teal-500 text-sm text-bold hover:underline">check out my github repos</Link> or click on the button below to shoot me an email.</div>
                    <div className="my-4"><Button className={`${mainColors.main} ${mainColors.hover} w-40`}><Link href="mailto:domen.gnezda@pm.me" className="text-white text-md text-bold">Contact me</Link></Button></div>
                    
                </WhiteDiv>

                <div className='absolute bottom-1 left-1/2 text-xs text-gray-400'>Website design and app by Domen Gnezda</div>
            </div>
        </>
    )
}