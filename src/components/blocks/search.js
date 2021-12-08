import React from "react";
import zoom from "../../assets/zoom.svg";

const Search = () => {
  return (
    <div className="search">
      <input placeholder="Search" style={{backgroundImage: `url(${zoom})`}} />
    </div>
  );
};

export default Search;
