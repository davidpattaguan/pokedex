import React from "react";
import PokemonsList from "../components/PokemonsList";
import { useState } from "react";

const Home = ({ pokemons }) => {
  return (
    <div className="px-5 py-5">
      <PokemonsList pokemons={pokemons} />
    </div>
  );
};

export default Home;
