import { ChangeEventHandler } from "react";

type Props = {
  label: string;
  type?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Input({ label, type = "text", value, onChange }: Props) {
  return (
    <div>
      <p>{label}</p>
      <input className="w-full py-1 px-2 rounded-md bg-palette2 text-palette1" type={type} onChange={onChange} value={value} />
    </div>
  );
}