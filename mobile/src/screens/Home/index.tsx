import React from "react";
import { Image, View } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImg} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
    </View>
  );
}
