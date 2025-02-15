// Native Games App
import { Link } from "expo-router";
import { View, Text, Image } from "react-native";
import { useState } from "react";

import css from "@/components/styles";
import Button from "@/components/Button";
import Blackjack from "@/components/games/blackjack";
import TexasHoldEm from "@/components/games/poker";

export default function App() {
  let [activeContent, setActiveContent] = useState<string>("");
  return (
    <View style={css.container}>
      <View style={css.app}>
        <Text style={css.heading}>NATIVE GAMES</Text>

        {activeContent === "blackjack" ? <Blackjack/> : null}
        {activeContent === "poker" ? <TexasHoldEm /> : null}
        {activeContent.length === 0 ? 
          <Image 
            source={require("../assets/arcade.jpg")} 
            style={css.image}
          /> 
          : null
        }
        {activeContent === "info" ? 
          <View style={css.col}>
            <Text style={css.text}>Something, something, something, darkside...</Text>
          </View> 
          : null
        }
      </View>

      <View style={css.navbar}>
        <Link style={css.button} href="/" onPress={() => setActiveContent("")}>Home</Link>
        <Button name="Info" style={css.button} onPress={( _ ) => setActiveContent("info")} />
        <Button name="Blackjack" style={css.button} onPress={( _ ) => setActiveContent("blackjack")} />
        <Button name="Poker" style={css.button} onPress={( _ ) => setActiveContent("poker")} />  
      </View>

    </View>
  );
}
