import React, { useEffect, useState } from "react";

const Company = (props) => {
  const [box, setBox] = useState("");
  const {company} = props;
  let count = 1;
  let message = "";

  // assign value to box on every company update
  useEffect(() => {
    if (company !== null) {
      setBox(company.boxes !== null ? company.boxes : "");
    }
  }, [company]);

  // Cargo bay calculator
  if (company !== null) {
    let boxes = box.split(",").map(Number).sort().reverse();
    boxes.reduce((prVal, curVal, curIdx, arr) => {
      if(box.trim().length === 0) {
        message = "Please provide new data"
      }
      if (isNaN(curVal)) {
        message = "Data is incorrect!";
      }
      if (curVal > 10) {
        message = "Each Starship cargo bay can hold up to 10 units.";
      }

      if (parseFloat(prVal) + parseFloat(curVal) > 10) { 
          prVal = parseFloat(curVal);
          count++;
        } else {
          prVal += parseFloat(curVal)
        }
      return prVal;
    }, 0);
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
