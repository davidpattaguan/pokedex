import React from "react";
// import Card from "../utilities/Card";
import { lazy, Suspense } from "react";
import Loading from "react-loading";
import { useState } from "react";

const Card = lazy(() => import("../utilities/Card"));

const PokemonListItems = ({ id, name, sprite }) => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Card id={id} name={name} sprite={sprite} />
      </Suspense>
    </div>
  );
};

export default PokemonListItems;
