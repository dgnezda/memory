import Button from "@/app/ui/components/Button";
import WhiteDiv from "@/app/ui/components/WhiteDiv";
import { inter, roboto } from "@/app/ui/fonts";
import Link from "next/link";

export default function Page() {
    return (
        <WhiteDiv className={`text-sm mt-4 md:ml-0 ml-2 ${roboto.className}`} value="About">
            <div className={`text-sm mt-4 ${roboto.className}`}>
                Hi! My name is Domen. Do you like my memory game app? Well, it just so happens that I am available for hire!
                I hope you enjoy my app as much as I enjoyed building it!
            </div>
            <div className="mt-4">If you are interested in my work, you can <Link href="https://github.com/dgnezda?tab=repositories" className="text-teal-500 text-sm text-bold hover:underline">check out my github repos</Link> or click on the big button below to shoot me an email.</div>
            <div className="my-4"><Button className="bg-teal-400 hover:bg-teal-500"><Link href="mailto:domen.gnezda@pm.me" className="text-white text-md text-bold">Contact me</Link></Button></div>
            
        </WhiteDiv>
    )
}