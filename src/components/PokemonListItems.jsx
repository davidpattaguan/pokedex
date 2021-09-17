import React from "react";
// import Card from "../utilities/Card";
import { lazy, Suspense } from "react";
import Loading from "react-loading";
import { useState } from "react";

const Card = lazy(() => import("../utilities/Card"));

const PokemonListItems = ({ pokemon }) => {
  return (
    <div>
      <Suspense
        fallback={<Loading type={"spin"} delay={100} color={"#EF4444"} />}
      >
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          height={pokemon.height}
          weight={pokemon.weight}
          stats={pokemon.base_experience}
        />
      </Suspense>
    </div>
  );
};

export default PokemonListItems;
