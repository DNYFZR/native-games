import css from "./_styles";
import { Link } from "expo-router";
import { View, Text } from "react-native";
import { useState } from "react";

import Button from "@/components/Button";
import Blackjack from "@/components/games/blackjack";
import TexasHoldEm from "@/components/games/poker";

export default function CardGames() {
  let [activeGame, setActiveGame] = useState<string>("");

  return (
    <View style={css.container}>
      <View style={css.navContainer}>
        <Link href="/" style={css.nav}>Back</Link>
        <Button name="Blackjack" style={css.nav} onPress={( _ ) => setActiveGame("blackjack")} />
        <Button name="Poker" style={css.nav} onPress={( _ ) => setActiveGame("poker")} />  
      </View>
      
      {activeGame.length === 0 ? <Text style={css.heading}>Please Select A Game</Text> : null}
      {activeGame === "blackjack" ? <Blackjack/> : null}
      {activeGame === "poker" ? <TexasHoldEm /> : null}
      
    </View>
  );
}

