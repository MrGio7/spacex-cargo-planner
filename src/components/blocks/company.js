import React from "react";

const Company = (props) => {

  const selectedCompany = props.shipData.filter(val => {
    if (val.id !== props.selectedCompany) {
      return null
    } else {
      return val
    }
  }).map(val => <div key={val.id} className="company"> <h1>{val.name}</h1>
    <h2>{val.email}</h2>
    <h3>CARGO BOXES</h3>
    <input type="text" defaultValue={val.boxes} />
    <h4>Number of required cargo bays</h4>
    <h5>5</h5>
   </div>)

  return selectedCompany.length > 0 ? selectedCompany : <div className="company"> <h1>Please Select Company</h1> </div>;
};

export default Company;