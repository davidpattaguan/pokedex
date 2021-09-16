import React from "react";
import Card from "../utilities/Card";

const PokemonListItems = ({ id, name, sprite }) => {
  return (
    <div>
      <Card id={id} name={name} sprite={sprite} />
    </div>
  );
};

export default PokemonListItems;
