import { useState } from "react";
const ComplexState = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(1);

  return (
    <div>
      <span>left</span>
      <button
        onClick={() => {
          setLeft(left + 1);
        }}
      >
        {left}
      </button>

      <span>right</span>
      <button
        onClick={() => {
          setRight(right + 1);
        }}
      >
        {right}
      </button>
    </div>
  );
};
export default ComplexState;
