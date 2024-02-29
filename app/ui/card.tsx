// 'use client';

import { roboto } from "./fonts";

export function Card({
    value,
    visible,
    backgroundColor,
    textColor,
    hoverColor,
    onClick,
}: {
    value: number;
    visible: boolean;
    backgroundColor: string;
    textColor: string;
    hoverColor: string;
    onClick: () => void;
}) {
    const flippedBackgroundColor = 'bg-gradient-to-r from-purple-400 to-cyan-200'
    const flippedHoverColor = 'hover:bg-gradient-to-l'

    return (
        <button onClick={onClick} className={`${roboto.className} border-white border-4  flex justify-center items-center h-40 w-40 rounded-xl ${visible ? backgroundColor : flippedBackgroundColor} ${visible ? hoverColor : flippedHoverColor} py-6 px-6 shadow-md`}>
            <div className={`${textColor} text-8xl text-center`}>
                {visible ? value : ''}
            </div>
        </button>
    )
}