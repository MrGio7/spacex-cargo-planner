import React, { useEffect, useState } from "react";

const Company = (props) => {
  const [box, setBox] = useState("");
  const {company} = props;
  let count = 0;
  let message = "";

  // assign value to box on every company update
  useEffect(() => {
    if (company !== null) {
      setBox(company.boxes);
    }
  }, [company]);

  // Cargo bay calculator
  if (company !== null) {
    let boxes = box.split(",").map(Number);

    for (let i = 0; i < boxes.length; i++) {
      if (isNaN(boxes[i])) {
        message = "Data is incorrect!";
        break;
      }
      if (boxes[i] > 10) {
        message = "Each Starship cargo bay can hold up to 10 units.";
        break;
      }
    }

    boxes = boxes.sort().reverse();

    while (boxes.length > 0) {
      let tmpSum = parseFloat(boxes[0]);
      if (isNaN(tmpSum)) {
        count = NaN;
        break;
      }
      let isDel = false;
      for (let i = 1; i < boxes.length; i++) {
        if (tmpSum + parseFloat(boxes[i]) <= 10) {
          tmpSum += parseFloat(boxes[i]);
        } else {
          isDel = true;
          boxes.splice(0, i);
          break;
        }
      }
      count++;
      if (!isDel && tmpSum <= 10) break;
      if (count > 20) break;
    }
  }


  return company !== null ? (
    <div className="company">
      <h1>{company.name}</h1>
      <h2>{company.email}</h2>
      <h3>CARGO BOXES</h3>
      <input
        type="text"
        value={box}
        onChange={(ev) => setBox(ev.target.value)}
        placeholder="Enter cargo boxes"
      />
      <h4>Number of required cargo bays</h4>
      <h5>{message.length > 0 ? message : count}</h5>
    </div>
  ) : (
    <div className="company">
      <h1>Please Select Company</h1>
    </div>
  );
};

export default Company;
