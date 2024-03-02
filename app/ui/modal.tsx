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
        <div className="left-15 fixed top-5 flex items-center justify-center rounded-xl backdrop-blur-lg">
          <div className="rounded-xl p-20 shadow-lg">
            <p className="mb-5 text-3xl font-semibold text-white">{message}</p>
            <button
              className="cursor-pointer rounded-xl border-0 bg-gray-700 px-20 py-5 font-bold text-white hover:bg-gray-600"
              onClick={onClose}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
