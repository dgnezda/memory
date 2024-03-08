import ColorSwash from "@/app/ui/components/ColorSwash"
import WhiteDiv from "@/app/ui/components/WhiteDiv"
import TinyGrid from "@/app/ui/components/TinyGrid"
import { SpeakerWaveIcon, SpeakerXMarkIcon, ClockIcon } from "@heroicons/react/24/outline"
import Button from "@/app/ui/components/Button"

export default function Page() {
    return (
        <div className="md:grid md:grid-cols-2 md:ml-0 ml-3 md:mr-0 mr-1">
            <div className="text-xl col-span-2 bg-white rounded-lg md:mt-4 mt-0 mr-2 p-4">Game Settings</div>
            <WhiteDiv value="Board size">
                <div className="flex flex-row items-end text-sm mt-1">
                    <label>
                        <TinyGrid rows={4} columns={4} />
                        <input className="m-2" type="radio" name="boardSize" value="44" />
                        4x4
                    </label>
                    <label>
                        <TinyGrid rows={5} columns={4} />
                        <input className="m-2" type="radio" name="boardSize" value="54" />
                        5x4
                        <br></br>
                    </label>
                    <label>
                        <TinyGrid rows={6} columns={6} />
                        <input className="m-2" type="radio" name="boardSize" value="66" />
                        6x6
                    </label>
                </div>
            </WhiteDiv>

            <WhiteDiv className="h-44" value="Sound">
                <div className="flex flex-row">
                    <label>
                        <SpeakerWaveIcon className="h-10 mt-8 ml-1" />
                        <input className="mt-2 m-2" type="radio" name="sound" value="On" />
                        On
                    </label>
                    <label>
                        <SpeakerXMarkIcon className="h-10 mt-8 ml-5" />
                        <input className="mt-2 ml-5 mr-2" type="radio" name="sound" value="Off" />
                        Off
                    </label>
                </div>
            </WhiteDiv>
            
            <WhiteDiv className="h-24" value="Card back color scheme">
                <div className="flex flex-row items-start h-4">
                    <ColorSwash className="bg-gradient-to-r from-purple-400 to-cyan-200 hover:from-purple-300 hover:to-cyan-100" />
                    <ColorSwash className="bg-gradient-to-r from-indigo-400 to-sky-200 hover:from-indigo-300 hover:to-sky-100" />
                    <ColorSwash className="bg-gradient-to-r from-rose-400 to-pink-200 hover:from-rose-300 hover:to-pink-100" />
                    <ColorSwash className="bg-gradient-to-r from-emerald-500 to-lime-200 hover:from-emerald-300 hover:to-lime-100" />
                </div>
            </WhiteDiv>
            
            <WhiteDiv value="Timer">
            <div className="flex flex-row">
                <ClockIcon className="h-7" />
                <label>
                    <input className="mt-2 m-2" type="radio" name="timer" value="On" />
                    On
                </label>
                <label>
                    <input className="mt-2 m-2" type="radio" name="timer" value="Off" />
                    Off
                </label>
            </div>
            </WhiteDiv>
            <div className="text-xl col-span-2 bg-white rounded-lg mt-4 mr-2 p-4">Profile Settings</div>
            <div className="md:flex md:flex-row w-full">
                <WhiteDiv value="Change Password" className="h-48">
                    <div className="flex flex-col mt-2 justify-center items-center">
                        <input type="password" className="border-solid rounded-lg border-[1px] p-1 mt-2 w-60" />
                        <input type="password" className="border-solid rounded-lg border-[1px] p-1 mt-2 w-60" />
                        <Button className="bg-blue-400 hover:bg-blue-500 mt-2 w-60">Save New Password</Button>
                    </div>
                </WhiteDiv>
                <WhiteDiv value="Reset Stats">
                    <div className="flex justify-center items-start">
                        <Button className="bg-blue-400 hover:bg-blue-500 self-center mt-4 w-60">Reset Stats</Button>
                    </div>
                </WhiteDiv>
            </div>
        </div>
    )
}