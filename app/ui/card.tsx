// 'use client';

import useSound from 'use-sound';
import { roboto } from "./fonts";

export default function Card({
    disabled,
    value,
    visible,
    backgroundColor,
    textColor,
    onClick,
    sound,
}: {
    disabled: boolean;
    value: number | any;
    visible: boolean;
    backgroundColor: string;
    textColor: string;
    onClick: () => void;
    sound: string
}) {
    const flippedBackgroundColor = 'bg-gradient-to-r from-purple-400 to-cyan-200'
    const flippedHoverColor = 'hover:bg-gradient-to-l'

    const [playClick] = useSound(sound)

    return (
        <button 
            disabled={disabled} 
            onClick={() => {
                onClick();
                playClick();
            }} 
            className={`${roboto.className} grid-item
            border-white border-4 
            ${visible ? backgroundColor : `${flippedBackgroundColor} ${flippedHoverColor} md:hover:-translate-y-1`} 
            flex justify-center items-center md:h-40 h-20 w-20 md:w-40 rounded-xl py-6 px-6 shadow-md`}
        >
            <div className={typeof value === 'number' || 'letter'
                    ? `${textColor} card-font text-center`
                    : `${textColor}`
                }>
                {visible ? value : ''}
            </div>
        </button>
    )
}