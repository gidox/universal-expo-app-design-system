import React from "react";
import { SafeAreaView, View, Text, Platform } from "react-native";
import tailwind from "tailwind-rn";

const Card = () => (
  <View
    style={tailwind(
      "min-h-screen min-w-screen flex items-center justify-center bg-gray-100"
    )}
  >
    <View style={tailwind("flex flex-col px-6 py-8 bg-white shadow-lg")}>
      {Platform.OS == "web" ? (
        <Text style={tailwind("mb-8 font-extrabold text-gray-800 leading-6")}>
          Coronavirus - Facts, advice and measures
        </Text>
      ) : null}
      <Text style={tailwind("mb-8 font-extrabold text-gray-800 leading-6")}>
        Coronavirus - Facts, advice and measures
      </Text>
      <View style={tailwind("flex flex-col space-y-4 text-gray-900")}>
        <Text
          style={tailwind(
            "bg-yellow-100 border-l-4 border-yellow-300 rounded-md w-full px-6 py-4 cursor-pointer"
          )}
        >
          Facts and knowledge about COVID19
        </Text>
        <Text
          style={tailwind(
            "bg-purple-100 border-l-4 border-purple-300 rounded-md w-full px-6 py-4 cursor-pointer"
          )}
        >
          For the public
        </Text>
        <Text
          style={tailwind(
            "bg-red-100 border-l-4 border-red-300 rounded-md w-full px-6 py-4 cursor-pointer"
          )}
        >
          For the government
        </Text>
      </View>
    </View>
  </View>
);

export default Card;
