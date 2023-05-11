type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function ModalWrapper({ onClose, children }: Props) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/60"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative bg-white w-[90%] max-w-xl rounded-[16px]">
        {children}
      </div>
    </section>
  );
}
