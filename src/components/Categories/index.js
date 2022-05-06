import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FilterButton, FilterLabel, FilterList } from "./styles";

export default function Categories({ onChangeSelect }) {
  const [category, setCategory] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    api.get("products/categories").then((categories) => {
      setCategory(categories.data);
    });
  }, []);

  const changeIndex = (index) => {
    setCategoryIndex(index);
    onChangeSelect(categoryIndex);

    console.log("index", index);
  };

  return (
    <FilterList horizontal showsHorizontalScrollIndicator={false}>
      {category.map((categories, index) => (
        <FilterButton
          key={index}
          onPress={() => changeIndex(index)}
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
      ))}
    </FilterList>
  );
}
