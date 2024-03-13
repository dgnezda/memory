'use client'

import ColorSwash from "@/app/ui/components/ColorSwash"
import WhiteDiv from "@/app/ui/components/WhiteDiv"
import TinyGrid from "@/app/ui/components/TinyGrid"
import { SpeakerWaveIcon, SpeakerXMarkIcon, ClockIcon } from "@heroicons/react/24/outline"
import Button from "@/app/ui/components/Button"
import { cardColors, cardHoverColors, mainColors } from "@/app/ui/colors"
import Title from "@/app/ui/components/Title"
import { useState } from 'react'

export default function Page() {
    const [selectedColor, setSelectedColor] = useState(0)

    const handleColorSelect = (index: number) => {
        setSelectedColor(index)
    }

    return (
        <div className="md:grid md:grid-cols-2 md:ml-1 ml-3 md:mr-0 mr-1">
            <Title>Game Settings</Title>
            <WhiteDiv value="Board size">
                <div className="flex flex-row items-end text-sm mt-1">
                    <label>
                        <TinyGrid rows={4} columns={4} />
                        <input className="m-2" type="radio" name="boardSize" value="44" defaultChecked />
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

            <WhiteDiv className="md:h-44 sm:h-32" value="Sound">
                <div className="flex flex-row">
                    <label>
                        <SpeakerWaveIcon className="h-8 md:mt-8 sm:mt-2 ml-1" />
                        <input className="mt-2 m-2" type="radio" name="sound" value="On" defaultChecked />
                        On
                    </label>
                    <label>
                        <SpeakerXMarkIcon className="h-8 md:mt-8 sm:mt-2 ml-5" />
                        <input className="mt-2 ml-5 mr-2" type="radio" name="sound" value="Off" />
                        Off
                    </label>
                </div>
            </WhiteDiv>
            
            <WhiteDiv className="h-24" value="Card back color">
                <div className="flex flex-row items-start h-4">
                    {cardColors.map((color, index) => (
                        <ColorSwash 
                            key={index} 
                            className={`${color} ${cardHoverColors[index]} ${selectedColor === index ? 'border-2 border-slate-500' : 'border-2 border-transparent'}`} 
                            onClick={() => handleColorSelect(index)}
                        />
                    ))}
                </div>
            </WhiteDiv>
            
            <WhiteDiv value="Timer">
            <div className="flex flex-row">
                <ClockIcon className="h-7" />
                <label>
                    <input className="mt-2 m-2" type="radio" name="timer" value="On" defaultChecked />
                    On
                </label>
                <label>
                    <input className="mt-2 m-2" type="radio" name="timer" value="Off" />
                    Off
                </label>
            </div>
            </WhiteDiv>
            <div className="text-xl col-span-2 bg-white rounded-lg mt-4 mr-2 p-4">Profile Settings</div>
            
            <WhiteDiv value="Change Password" className="h-52">
                <div className="flex flex-col mt-2 justify-center items-center">
                    <input type="password" placeholder={"Enter new password"} className="border-solid rounded-lg border-[1px] p-1 my-2 w-60 text-sm" />
                    <input type="password" placeholder={"Confirm new password"} className="border-solid rounded-lg border-[1px] p-1 my-2 w-60 text-sm" />
                    <Button className={`${mainColors.main} ${mainColors.hover} mt-2 w-60`}>Save New Password</Button>
                </div>
            </WhiteDiv>
            <WhiteDiv value="Reset Game Stats" className="mb-2 flex flex-col justify-between h-52">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-sm">Reset game statistics. This will delete all game scores, number of games played, average scores for every game etc. - everything.</div>
                    <Button className={`${mainColors.main} ${mainColors.hover} self-center mt-4 w-60`}>Reset Stats</Button>
                </div>
            </WhiteDiv>
            <WhiteDiv className="md:col-span-2"></WhiteDiv>
        </div>
    )
}