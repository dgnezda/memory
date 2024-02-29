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
            <div className="fixed top-5 left-15 backdrop-blur-lg flex justify-center items-center rounded-xl">
                <div className="p-20 rounded-xl shadow-lg">
                    <p className="text-white font-semibold text-3xl mb-5">{message}</p>
                    <button className="bg-gray-700 font-bold text-white border-0 py-5 px-20 rounded-xl cursor-pointer hover:bg-gray-600" onClick={onClose}>OK</button>
                </div>
            </div>
        )}
        </>
    )
}