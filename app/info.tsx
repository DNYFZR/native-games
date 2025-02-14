import css from "./_styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function About() {
  return (
    <View style={css.container}>
      <View style={css.navContainer}>
        <Link href="/" style={css.nav}>Back</Link>
      </View>

      <Text style={css.heading}>Info</Text>
      <Text style={css.text}>Something, something, something, darkside...</Text>
    </View>
  );
}

