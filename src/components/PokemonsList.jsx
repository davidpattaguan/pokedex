import React from "react";
// import PokemonListItems from "./PokemonListItems";
import { lazy, Suspense } from "react";
import { useState } from "react";

const PokemonListItems = lazy(() => import("./PokemonListItems"));

const PokemonsList = ({ pokemons }) => {
  const [searchPoke, setSearchPoke] = useState("");

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
      <Suspense fallback={<h1>Still Loading…</h1>}>
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
            <PokemonListItems
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              sprite={pokemon.sprite}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default PokemonsList;
