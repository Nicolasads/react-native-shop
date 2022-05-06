import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FilterButton, FilterLabel, FilterList, FilterLoading } from "./styles";

export default function Categories({ onChangeSelect, loading }) {
  const [category, setCategory] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    let canceled = false;

    async function fetchCategories() {
      const result = await api.get("products/categories");
      if (!canceled) {
        setCategory(result.data);
      }
    }

    fetchCategories();
    return () => {
      canceled = true;
    };
  }, []);

  const changeIndex = (index) => {
    setCategoryIndex(index);
    onChangeSelect(categoryIndex);

    console.log("index", index);
  };

  return (
    <FilterList horizontal showsHorizontalScrollIndicator={false}>
      {loading ? (
        <FilterLoading>Carregando...</FilterLoading>
      ) : (
        category.map((categories, index) => (
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
        ))
      )}
    </FilterList>
  );
}
