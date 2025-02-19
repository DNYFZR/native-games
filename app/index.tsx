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
        <Link style={activeContent === ""? css.navButton : css.button} href="/" onPress={() => setActiveContent("")}>Home</Link>
        <Button name="Info" style={activeContent === "info"? css.navButton : css.button} onPress={( _ ) => setActiveContent("info")} />
        <Button name="Blackjack" style={activeContent === "blackjack"? css.navButton : css.button} onPress={( _ ) => setActiveContent("blackjack")} />
        <Button name="Poker" style={activeContent === "poker"? css.navButton : css.button} onPress={( _ ) => setActiveContent("poker")} />  
      </View>

    </View>
  );
}
