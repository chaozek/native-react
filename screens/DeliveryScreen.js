import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "./../features/restaurantSlice";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50 ">
        <View className="flex-row justify-between items-center p-5 ">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color={"white"} size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">44-55 Minutes</Text>
            </View>
            <Image
              className="h-10 w-10"
              source={require("../assets/200w.gif")}
            />
          </View>
          <Progress.Bar indeterminate={true} size={30} color={"#00ccbb"} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row justify-between  items-center space-x-5 h-28">
        <Image
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
          source={{
            uri: "https://img.freepik.com/premium-vector/delivery-courier-truck-car-deliver-vector-flat-cartoon-icon-man-driver-delivery-van-express_316839-671.jpg?w=2000",
          }}
        />
        <View>
          <Text className="text-lg"> Pavel K</Text>
          <Text className="text-gray-400">Your rider</Text>
        </View>
        <View>
          <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
