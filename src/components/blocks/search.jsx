import React from "react";
import zoom from "../../assets/zoom.svg";

const Search = ({navOpened, setSearch}) => {

  return (
    <div className={navOpened ? "search opened" : "search"}>
      <input
        placeholder="Search"
        type="text"
        onChange={setSearch}
        style={{ backgroundImage: `url(${zoom})` }}
      />
    </div>
  );
};

export default Search;
