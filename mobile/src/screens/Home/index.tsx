import { useEffect, useState } from "react";
import { Image, View, FlatList } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";

import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://192.168.15.3:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImg} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar ..."
      />

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
            // onPress={() => handleOpenGaming(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
