import { mainColors } from "../colors";
import Button from "./Button";

export default function Modal({
    isOpen, 
    message,
    onClose,
}: {
    isOpen: boolean;
    message: string;
    onClose: () => void;
}) {
    return (
        <>
        {isOpen && (
            <div className="fixed top-5 left-15 backdrop-blur-lg flex justify-center items-center transition-transform rounded-xl m-3">
                <div className="p-20 rounded-xl shadow-lg">
                    <p className="text-white font-semibold text-3xl mb-5">{message}</p>
                    <Button className={`${mainColors.main} ${mainColors.hover} self-center mt-4 w-48 font-bold text-white border-0 py-4 px-20 cursor-pointer`} onClick={onClose}>OK</Button>
                </div>
            </div>
        )}
        </>
    )
}