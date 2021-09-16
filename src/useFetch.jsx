import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    function getPokemons(pokemons) {
      pokemons.forEach((pokemon) => {
        let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
        axios
          .get(pokeUrl)
          .then(function (response) {
            setData((add) => [...add, response.data]);
          })
          .catch(function (error) {
            // handle error
            setError(error);
          })
          .then(function () {
            setLoading(false);
          });
      });
    }

    axios
      .get(url)
      .then(function (response) {
        getPokemons(response.data.results);
      })
      .catch(function (error) {
        // handle error
        setError(error);
      })
      .then(function () {});
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
