import { ChangeEventHandler } from "react";

type Props = {
  label: string;
  type?: string;
  value: string;
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Input({
  label,
  type = "text",
  id,
  value,
  onChange,
}: Props) {
  return (
    <div>
      <p>{label}</p>
      <input
        className="w-full rounded-md bg-palette2 px-2 py-1 text-palette1"
        id={id}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
