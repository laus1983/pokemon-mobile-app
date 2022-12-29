import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavoriteApi } from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;
  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };
  return (
    <Icon
      name="heart"
      size={20}
      color="#fff"
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
