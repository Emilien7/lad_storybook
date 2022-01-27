import React from "react";
import {EButtonStyle} from "../enums";
import {Text, View} from "react-native";

type TCounter = {
  count: number;
  style: Omit<EButtonStyle, EButtonStyle.loading>;
}

const Counter = ({count, style}: TCounter): JSX.Element => {
  const getTextColor = () => {
    switch (style) {
      case EButtonStyle.primary:
        return '#2B78EE';
      case EButtonStyle.secondary:
        return '#3A465F';
      case EButtonStyle.muted:
        return '#98A1B3';
      case EButtonStyle.text:
        return '#ffffff';
      default:
        return '#ffffff'
    }
  }

  return (
    <View style={{
      width: 24,
      height: 24,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: style === EButtonStyle.text ? 'blue' : '#ffffff'
    }}>
      <Text style={{ color: getTextColor() }}>{count}</Text>
    </View>
  )
}

export default Counter;
