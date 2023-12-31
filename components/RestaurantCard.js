import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { MapIcon, StarIcon } from "react-native-heroicons/solid";

const RestaurantCard = ({
  id,
  genre,
  lat,
  long,
  short_description,
  address,
  dishes,
  rating,
  imgUrl,
  title,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          genre,
          lat,
          long,
          short_description,
          address,
          dishes,
          rating,
          imgUrl,
          title,
        });
      }}
      className="bg-white mr-3 shadow rounded-sm"
    >
      <Image className="w-64 h-64 rounded-sm" source={{ uri: imgUrl }} />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500"> {rating}</Text> | {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
