import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightCircleIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { urlFor } from "./../sanity";

const FeaturedRow = ({ title, description, id, restaurants }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightCircleIcon color="#00CCBB" />
      </View>
      <Text className=" text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants &&
          restaurants.map((restaurant) => {
            return (
              <RestaurantCard
                id={1}
                imgUrl={urlFor(restaurant.image).url()}
                title={restaurant.name}
                rating={restaurant.rating}
                genre={restaurant.genre}
                address={restaurant.address}
                short_description={restaurant.short_description}
                dishes={restaurant.dishes}
                long={restaurant.long}
                lat={restaurant.lat}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
