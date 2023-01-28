import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { getPokemonsFavoriteApi } from "../api/favorite";
import { getPokemonDetailsApi } from "../api/pokemon";
import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import Nologged from "../components/Nologged";

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();
  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();
          const pokemonsArray = [];
          for (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <Nologged /> : <PokemonList pokemons={pokemons} />;
}
