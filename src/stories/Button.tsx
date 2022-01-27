import React from "react";
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity} from "react-native";
import {EButtonIcon, EButtonSize, EButtonStyle} from "./enums";
import Plus from "./components/Plus";
import {getIconColor} from "./functions";
import Counter from "./components/Counter";

export type TButton = {
  size: EButtonSize,
  style: EButtonStyle,
  icon: EButtonIcon,
  text: string,
  onPress(): void
};

export const CustomButton = ({ size, style, icon, text, onPress }: TButton) => (
    <TouchableOpacity
      style={[styles.button, styles[size], styles[style]]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {style === EButtonStyle.loading ?
        <ActivityIndicator size={24} color={'#fff'}  />
        :
        <>
          {icon === EButtonIcon.left && <Plus style={style} /> }
        <Text style={[styles.buttonText, { color: getIconColor(style) }]}>
          {text}
        </Text>
        {icon === EButtonIcon.right && <Plus style={style} /> }
        {icon === EButtonIcon.counter && <Counter count={3} style={style} />}
        </>
      }
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  fixed: {
    width: '90%',
    height: 48,
  },
  large: {
    height: 48,
  },
  small: {
    height: 36,
  },
  primary: {
    backgroundColor: 'blue'
  },
  loading: {
    backgroundColor: 'blue'
  },
  secondary: {
    backgroundColor: '#EDEFF2'
  },
  muted: {
    backgroundColor: '#98A1B3'
  },
  text: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 5
  },
});
