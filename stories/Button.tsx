import React from "react";
import { Button as RNButton, ButtonProps } from "react-native";

export default function Button(props: ButtonProps) {
  return <RNButton {...props} />;
}
