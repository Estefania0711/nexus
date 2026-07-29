interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="
      bg-red-600
      hover:bg-red-700
      transition-all
      duration-300
      rounded-xl
      px-6
      py-3
      font-semibold
      text-white
      shadow-lg
      "
    >
      {text}
    </button>
  );
}