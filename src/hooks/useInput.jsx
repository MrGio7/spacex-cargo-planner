import { useState } from "react/cjs/react.development";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (ev) => {
    setValue(ev.target.value);
  };

  return {
    value,
    setValue,
    onChange,
  };
}
