import { MouseEventHandler } from "react";

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
export default function Button({ text, onClick }: Props) {
  return (
    <button
      className="rounded-md bg-palette2 px-4 py-1 text-palette1 transition-colors hover:bg-palette1 hover:text-palette2 "
      onClick={onClick}
    >
      {text}
    </button>
  );
}
