import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavBar, Search, Company } from "./components";

function App() {
  const [shipData, setShipData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Event Handlers
  const setSelectedCompanyValue = (val) => {
    setSelectedCompany(val);
  };

  const setSearchValue = (val) => {
    setSearch(val);
  };

  // Get Shipment data, sort and save in shipData state, then set loading state to false;
  useEffect(() => {
    axios
      .get(
        "https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json"
      )
      .then((res) => {
        setShipData(
          res.data.sort((a, b) =>
            a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
          )
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return loading ? (
    <div className="loading">Loading...</div>
  ) : (
    <>
      <NavBar
        shipData={shipData}
        searchValue={search}
        setSelectedCompanyValue={setSelectedCompanyValue}
      />
      <div className="main">
        <Search setSearchValue={setSearchValue} />
        <Company shipData={shipData} selectedCompany={selectedCompany} />
      </div>
    </>
  );
}

export default App;
