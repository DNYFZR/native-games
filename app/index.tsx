import { Link } from "expo-router";
import { View, Text } from "react-native";
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
      <Text style={css.heading}>Hello World...</Text>
      <Text style={css.text}>This is the homepage & such...</Text>
      
    </View>
  );
}
