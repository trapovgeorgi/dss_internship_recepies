import { MouseEventHandler } from "react";

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
export default function Button({ text, onClick }: Props) {
  return <button className="py-1 px-2 bg-white rounded-md hover:bg-blue-300" onClick={onClick}>{text}</button>;
}
