// 'use client';

import useSound from 'use-sound';
import { roboto } from "../fonts";
import { cardColors } from '../colors';

export default function Card({
    disabled,
    value,
    visible,
    backgroundColor,
    textColor,
    onClick,
    sound,
    back,
}: {
    disabled: boolean;
    value: number | any;
    visible: boolean;
    backgroundColor: string;
    textColor: string;
    onClick: () => void;
    sound: string
    back: number
}) {
    const flippedBackgroundColor = cardColors[back]
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
            border-white border-4 border-dashed
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