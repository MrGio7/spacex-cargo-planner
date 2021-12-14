import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Company } from "./components";

import "./style/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="spacex-cargo-planner/" element={<App />}>
        <Route
          index
          element={
            <div className="company">
              <h1>Please Select Company</h1>
            </div>
          }
        />
        <Route path=":companyId" element={<Company />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
