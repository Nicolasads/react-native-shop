import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FilterButton, FilterLabel, FilterList, FilterLoading } from "./styles";

export default function Categories({ loading, data }) {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const navigation = useNavigation();

  const changeIndex = (index, categories) => {
    setCategoryIndex(index);

    navigation.navigate("Categories", { category: categories });
  };

  return (
    <FilterList horizontal showsHorizontalScrollIndicator={false}>
      {loading ? (
        <FilterLoading>Carregando...</FilterLoading>
      ) : (
        data.map((categories, index) => (
          <FilterButton
            key={index}
            onPress={() => changeIndex(index, categories)}
            categoryIndex={categoryIndex}
            style={
              categoryIndex == index && {
                backgroundColor: "#8775FE",
              }
            }
          >
            <FilterLabel
              style={
                categoryIndex == index && {
                  color: "#fff",
                }
              }
            >
              {categories}
            </FilterLabel>
          </FilterButton>
        ))
      )}
    </FilterList>
  );
}
