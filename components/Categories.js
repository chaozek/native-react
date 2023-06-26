import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        padding: 10,
      }}
    >
      <CategoryCard
        title="testing"
        imgUrl="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
      />
      <CategoryCard
        title="testing"
        imgUrl="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
      />
      <CategoryCard
        title="testing"
        imgUrl="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
      />
      <CategoryCard
        title="testing"
        imgUrl="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
      />
      <CategoryCard
        title="testing"
        imgUrl="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
      />
      <CategoryCard
        title="testing"
        imgUrl="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
      />
      <CategoryCard
        title="testing"
        imgUrl="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
      />
    </ScrollView>
  );
};

export default Categories;
