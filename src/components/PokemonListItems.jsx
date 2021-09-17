import React from "react";
// import Card from "../utilities/Card";
import { lazy, Suspense } from "react";
import Loading from "react-loading";

const Card = lazy(() => import("../utilities/Card"));

const PokemonListItems = ({ id, name, sprite }) => {
  return (
    <div>
      <Suspense
        fallback={<Loading type={"spin"} delay={100} color={"#EF4444"} />}
      >
        <Card id={id} name={name} sprite={sprite} />
      </Suspense>
    </div>
  );
};

export default PokemonListItems;
