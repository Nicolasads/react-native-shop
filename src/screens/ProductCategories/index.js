import React, { useEffect, useState } from "react";
import {
  BackButton,
  EmptyContainer,
  EmptyMessage,
  LoadingContainer,
  ProductContainer,
  ProductDivider,
  ProductHeader,
  ResultForText,
  Title,
} from "./styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { api } from "../../services/api";
import { FlatList, ActivityIndicator } from "react-native";
import ListCard from "../../components/ListCard";

export default function ProductCategories({ route, navigation }) {
  const [loading, setLoading] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const { category } = route.params;

  const renderLoading = () => {
    return (
      <LoadingContainer>
        <ActivityIndicator color="#8775FE" size="large" />
      </LoadingContainer>
    );
  };

  useEffect(() => {
    let canceled = false;

    async function getPerCategory() {
      setLoading(true);

      try {
        const result = await api
          .get(`products/category/${category}`)
          .finally(() => setLoading(false));

        setFilteredProduct(result.data);
      } catch (e) {
        console.log(e);
      }
    }

    getPerCategory();

    return () => {
      canceled = true;
    };
  }, []);

  return (
    <ProductContainer>
      <ProductHeader>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="#85868A" />
        </BackButton>
        <Title> {category} </Title>
        <ProductDivider />
      </ProductHeader>

      {loading ? (
        renderLoading()
      ) : (
        <FlatList
          data={filteredProduct}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListCard item={item} />}
          numColumns={2}
          style={{ marginTop: 20 }}
          ListHeaderComponent={() => (
            <ResultForText>Resultados para {category}</ResultForText>
          )}
          ListEmptyComponent={() => (
            <EmptyContainer>
              <AntDesign name="questioncircleo" size={70} color="#B4B4B6" />
              <EmptyMessage>Nenhum resultado foi encontrado.</EmptyMessage>
            </EmptyContainer>
          )}
        />
      )}
    </ProductContainer>
  );
}
