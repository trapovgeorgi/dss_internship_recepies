import { MouseEventHandler } from "react";

type Props = {
  id?: string;
  className?: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
export default function Button({ id, className = "", text, onClick }: Props) {
  return (
    <button
      id={id}
      className={`${className} rounded-md bg-palette2 px-4 py-1 text-palette1 transition-colors hover:bg-palette1 hover:text-palette2`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
