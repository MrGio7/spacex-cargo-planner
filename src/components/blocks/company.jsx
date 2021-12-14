import React, { useEffect } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
import useInput from "../../hooks/useInput";

const Company = () => {
  const location = useLocation();
  let company = null;
  
  const [shipData] = useOutletContext();
  const params = useParams();

  const cargoInput = useInput("");
  const setCargoInput = cargoInput.setValue;
  
  let count = 1;
  let message = "";

  // handles manual url input, if we dont get data from Link, than find it through list
  if (location.state !== null && location.state.company !== null) {
    company = location.state.company
  } else {
    company = shipData.find(val => val.id === params.companyId)
  }

  // assign value to box on every company update
  useEffect(() => {
    setCargoInput(company.boxes !== null ? company.boxes : "");
  }, [company, setCargoInput]);

  // Cargo bay calculator
  if (company !== null) {
    let boxes = cargoInput.value.split(",").map(Number).sort().reverse();
    boxes.reduce((prVal, curVal) => {
      if (cargoInput.value.trim().length === 0) {
        message = "Please provide new data";
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
        prVal += parseFloat(curVal);
      }
      return prVal;
    }, 0);
  }

  return (
    <div className="company">
      <h1>{company.name}</h1>
      <h2>{company.email}</h2>
      <h3>CARGO BOXES</h3>
      <input
        type="text"
        value={cargoInput.value}
        onChange={cargoInput.onChange}
        placeholder="Enter cargo boxes"
      />
      <h4>Number of required cargo bays</h4>
      <h5>{message.length > 0 ? message : count}</h5>
    </div>
  );
};

export default Company;
