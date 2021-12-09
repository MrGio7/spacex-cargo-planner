import React from "react";
import zoom from "../../assets/zoom.svg";

const Search = (props) => {
  return (
    <div className="search">
      <input
        placeholder="Search"
        type="text"
        onChange={(ev) => props.setSearchValue(ev.target.value)}
        style={{ backgroundImage: `url(${zoom})` }}
      />
    </div>
  );
};

export default Search;
