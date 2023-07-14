import { ChangeEvent, useState } from "react";

export function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  const rval: [
    {
      value: string;
      onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    },
    React.Dispatch<React.SetStateAction<string>>,
  ] = [inputProps, setValue];

  return rval;
}
