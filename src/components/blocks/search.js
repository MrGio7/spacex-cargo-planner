import React from "react";
import zoom from "../../assets/zoom.svg";

const Search = (props) => {
  const {navOpened, setSearch} = props;

  return (
    <div className={navOpened ? "search opened" : "search"}>
      <input
        placeholder="Search"
        type="text"
        onChange={(ev) => setSearch(ev.target.value)}
        style={{ backgroundImage: `url(${zoom})` }}
      />
    </div>
  );
};

export default Search;
