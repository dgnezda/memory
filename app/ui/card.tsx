// 'use client';

import { roboto } from "./fonts";

export function Card({
    disabled,
    value,
    visible,
    backgroundColor,
    textColor,
    hoverColor,
    onClick,
}: {
    disabled: boolean;
    value: number | any;
    visible: boolean;
    backgroundColor: string;
    textColor: string;
    hoverColor: string;
    onClick: () => void;
}) {
    const flippedBackgroundColor = 'bg-gradient-to-r from-purple-400 to-cyan-200'
    const flippedHoverColor = 'hover:bg-gradient-to-l'

    return (
        <button disabled={disabled} onClick={onClick} className={`${roboto.className} border-white border-4 hover:-translate-y-1 flex justify-center items-center md:h-40 h-20 w-20 md:w-40 rounded-xl ${visible ? backgroundColor : flippedBackgroundColor} ${visible ? hoverColor : flippedHoverColor} py-6 px-6 shadow-md`}>
            <div className={typeof value === 'number' 
                    ? `${textColor} md:text-8xl text-6xl text-center`
                    : `${textColor}`
                }>
                {visible ? value : ''}
            </div>
        </button>
    )
}