import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Loading, NavBar, Search } from "./components";
import useInput from "./hooks/useInput";

function App() {
  const [shipData, setShipData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [navOpened, setNavOpened] = useState(false);

  const searchInput = useInput('');


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
        setShipData([]);
        setLoading(false);
        alert(err);
      });
  }, []);

  return loading ? (
    <Loading/>
  ) : (
    <>
      <NavBar
        shipData={shipData}
        searchValue={searchInput.value}
        navOpened={navOpened}
        setNavOpened={setNavOpened}
      />
      <div className="main">
        <Search setSearch={searchInput.onChange} navOpened={navOpened} />
        <Outlet context={[shipData]} />
      </div>
    </>
  );
}

export default App;
