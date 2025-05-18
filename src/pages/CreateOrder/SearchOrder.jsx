import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [searchOrder, setSearchOrder] = useState("");
  const navigate=useNavigate()
  function handleSearchSubmit(e){
    e.preventDefault()
    if(!searchOrder)return
    navigate(`/order/${searchOrder}`)
    setSearchOrder("")
  }

  return (
    <form action="" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={searchOrder}
        onChange={(e) => setSearchOrder(e.target.value)}
      />
    </form>
  );
};

export default SearchOrder;
