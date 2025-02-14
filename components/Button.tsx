import React from "react";
import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";

interface ButtonProps {
  name: string;
  style: Object;
  onPress: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ name, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;