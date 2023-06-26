import { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  MagnifyingGlassCircleIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { client } from "../sanity";

function HomeScreen({ navigation }) {
  const [featuredCategories, setFeaturesCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'featured']{
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
          ...,
        }
      }
    }`
      )
      .then((data) => {
        console.log(data, "DATAAAAAAAAAAAAAAA");
        setFeaturesCategories(data);
      });
  }, []);
  console.log(featuredCategories, "featuredCategories");
  return (
    <ScrollView>
      <SafeAreaView className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://www.stavebni-technika.cz/images/resized/2010/1024x800-fit/04_eurolift_2.jpg",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCB8" />
            </Text>
          </View>
          <UserIcon size={25} color="#00CCB8" />
        </View>
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <MagnifyingGlassCircleIcon color="gray" size={30} />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsHorizontalIcon color="#00CCB8" />
        </View>
      </SafeAreaView>
      <Categories />
      <View className="py-3">
        {featuredCategories?.map((category) => {
          console.log(category.restaurants, "TAGGG");
          return (
            <FeaturedRow
              title={category.name}
              id={category.id}
              description={category.short_description}
              restaurants={category.restaurants}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
