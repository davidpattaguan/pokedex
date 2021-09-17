import React from "react";
import PokemonListItems from "./PokemonListItems";
import { useState } from "react";

const PokemonsList = ({ pokemons }) => {
  const [searchPoke, setSearchPoke] = useState("");
  // const [openModal, setOpenModal] = useState(false);
  // const [pokemonName, setPokemonName] = useState("");

  // //OPEN MODAL
  // let openModalHandler = () => {
  //   setOpenModal(true);
  // };

  // //CLOSE MODAL
  // let closeModalHandler = () => {
  //   setOpenModal(false);
  // };

  //SEARCHING
  const handleSearch = (event) => {
    setSearchPoke(event);
  };

  if (searchPoke.length > 0) {
    pokemons = pokemons.filter((i) => {
      return i.name.match(searchPoke);
    });
  }
  return (
    <div className>
      <div className="mx-20 mb-5">
        <input
          type="text"
          placeholder=" Search Pokemon"
          className="rounded w-30"
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-20">
        {pokemons.map((pokemon) => (
          <PokemonListItems pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonsList;
