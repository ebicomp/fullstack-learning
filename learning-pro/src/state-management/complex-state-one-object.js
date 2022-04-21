import { useState } from "react";

const ComplexStateOneObject = () => {
  const [click, setClick] = useState({ left: 0, right: 0 });
  const [allclicks, setAllClicks] = useState([]);
  const handleLeftClick = () => {
    const newClick = {
      ...click,
      left: click.left + 1,
    };
    setClick(newClick);
    setAllClicks(allclicks.concat("L"));
  };

  const handleRightClick = () => {
    const newClick = {
      ...click,
      right: click.right + 1,
    };
    setClick(newClick);
    setAllClicks(allclicks.concat("R"));
  };

  console.log("allclicks", allclicks);

  return (
    <div>
      <h1>hi</h1>
      <h2>
        {click.left} - {click.right}
      </h2>
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>

      <hr />
      <History clicks={allclicks} />
    </div>
  );
};
export default ComplexStateOneObject;

const History = ({ clicks }) => {
  if (clicks.length === 0)
    return <p>the app works when you start clicking the buttons</p>;
  else
    return (
      <div>
        <p>the search history is:</p>
        <ul>
          {clicks.map((click) => (
            <li>{click}</li>
          ))}
        </ul>
      </div>
    );
};
