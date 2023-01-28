import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Nologged() {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Debes iniciar sesión para ver esta pantalla
      </Text>
      <Button
        title="Ir al login"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});
