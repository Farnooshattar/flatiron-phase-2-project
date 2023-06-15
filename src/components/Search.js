import React, {useState} from "react";

function Search({searchedCard}) {
  const [searchedName, setSearchedName] = useState("");
  function handleSearchChange(e){
    //console.log(e.target.value)
    setSearchedName(e.target.value)
  }
  
  function handleClick(e){
    e.preventDefault()
    console.log(searchedName)
    if (searchedName !== "") searchedCard(searchedName)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        
        <form onSubmit={handleClick}>
        <input className="prompt" value={searchedName} onChange={handleSearchChange}/>
        <button type="submit">
        <i className="search icon"  />
        </button>
        
        </form>
      </div>
    </div>
  );
}

export default Search;
