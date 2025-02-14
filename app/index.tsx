import { Link } from "expo-router";
import { View, Text, Image } from "react-native";
import css from "./_styles";

export default function App() {
  return (
    <View style={css.container}>
      {/* Page Nav */}
      <View style={css.navContainer}>
        <Link style={css.nav} href="/info">Info</Link>
        <Link style={css.nav} href="/games">Games</Link>
      </View>

      {/* Landing Page */}
      <Text style={css.heading}>NATIVE GAMES</Text>
      <Image 
        source={require("../assets/arcade.jpg")} 
        style={css.image}
      />
    </View>
  );
}
