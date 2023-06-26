import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  selectBasketItems,
  selectBasketItemsWithId,
  selectBasketTotal,
} from "./../features/basketSlice";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector((state) => selectBasketItems(state));
  const basketTotal = useSelector((state) => selectBasketTotal(state));
  const navigation = useNavigation();

  if (items.length <= 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5  bg-[#00ccbb] p-4 rounded-lg flex-row  items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1  text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency={"czk"} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
