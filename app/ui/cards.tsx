import { roboto } from "./fonts";

export function Card({
    value,
    visibility,
    backgroundColor,
    textColor,
    hoverColor,
}: {
    value: number;
    visibility: boolean;
    backgroundColor: string;
    textColor: string;
    hoverColor: string;
}) {
    return (
        <div className={`${roboto.className} flex justify-center items-center h-40 w-40 rounded-xl ${backgroundColor} ${hoverColor} py-6 px-6 shadow-md`}>
            <div className={`${textColor} text-8xl text-center`}>{value}</div>
        </div>
    )
}