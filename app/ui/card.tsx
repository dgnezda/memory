// 'use client';

import { roboto } from './fonts';

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
  const flippedBackgroundColor = 'bg-gradient-to-r from-purple-400 to-cyan-200';
  const flippedHoverColor = 'hover:bg-gradient-to-l';

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${roboto.className} flex h-20 w-20 items-center justify-center rounded-xl border-4 border-white hover:-translate-y-1 md:h-40 md:w-40 ${visible ? backgroundColor : flippedBackgroundColor} ${visible ? hoverColor : flippedHoverColor} px-6 py-6 shadow-md`}
    >
      <div
        className={
          typeof value === 'number' || 'letter'
            ? `${textColor} text-center text-6xl md:text-8xl`
            : `${textColor}`
        }
      >
        {visible ? value : ''}
      </div>
    </button>
  );
}
