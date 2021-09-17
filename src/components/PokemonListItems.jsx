import React from "react";
import Card from "../utilities/Card";
import { lazy, Suspense } from "react";

const PokemonListItems = ({ id, name, sprite }) => {
  return (
    <div>
      <Card id={id} name={name} sprite={sprite} />
    </div>
  );
};

export default PokemonListItems;
