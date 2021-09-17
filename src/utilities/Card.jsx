import React from "react";
import { useState } from "react";

const Card = ({ id, name, openModalHandler }) => {
  let pad = (number, length) => {
    let str = "" + number;
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  };

  let pokemonImageUrl =
    "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" +
    pad(id, 3) +
    ".png";

  return (
    <div>
      <div className="shadow-lg rounded border overflow-hidden font-mono animate-fade-in-down">
        <div className="rounded">
          <img
            src={pokemonImageUrl}
            alt=""
            className=" object-scale-down h-36 w-full pt-9"
          />
        </div>
        <div className="m-3">
          <span className="block capitalize">{name}</span>
          <span>#{id}</span>
        </div>
        <div className="m-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={openModalHandler}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
