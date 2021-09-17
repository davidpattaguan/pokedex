import React from "react";
import { useState } from "react";

const PokemonSearch = ({ filteredPokemons }) => {
  const [searchPoke, setSearchPoke] = useState("");

  const handleSearch = (event) => {
    setSearchPoke(event);
  };

  if (searchPoke.length > 0) {
    filteredPokemons = filteredPokemons.filter((i) => {
      return i.name.match(searchPoke);
    });
  }
  return (
    <div>
      <input
        type="text"
        placeholder=" Search Pokemon"
        className="rounded w-30"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

export default PokemonSearch;
