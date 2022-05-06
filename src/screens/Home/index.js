import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Text } from "react-native";
import AnimatedLoading from "../../components/AnimatedLoading";
import Categories from "../../components/Categories";
import ListCard from "../../components/ListCard";
import NewsCard from "../../components/NewsCard";
import { api } from "../../services/api";
import {
  CartButton,
  CartIcon,
  Container,
  FilterPlaceholder,
  FilterView,
  Header,
  ItemsListContainer,
  ItemsListPlaceholder,
  NewItemsContainer,
  NewItemsContent,
  NewItemsPlaceholder,
  TextHeader,
} from "./styles";

export default function Home({ navigation }) {
  const [category, setCategory] = useState(0);
  const [news, setNews] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let canceled = false;

    async function fetchNews() {
      setLoading(true);

      const result = await api
        .get("/products?limit=5")
        .finally(() => setLoading(false));

      if (!canceled) {
        setNews(result.data);
      }
    }

    fetchNews();

    return () => {
      canceled = true;
    };
  }, []);

  useEffect(() => {
    let canceled = false;

    async function fetchList() {
      setLoading(true);

      const result = await api
        .get("/products")
        .finally(() => setLoading(false));
      if (!canceled) {
        setList(result.data);
      }
    }

    fetchList();

    return () => {
      canceled = true;
    };
  }, []);

  return loading ? (
    <AnimatedLoading />
  ) : (
    <Container>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Header>
              <TextHeader>Produtos</TextHeader>

              <CartButton onPress={() => navigation.navigate("Cart")}>
                <CartIcon source={require("../../assets/BAG_1.png")} />
              </CartButton>
            </Header>

            <FilterView>
              <FilterPlaceholder>
                Filtrar Categoria {category != null && category}
              </FilterPlaceholder>

              <Categories
                onChangeSelect={(category) => setCategory(category)}
                loading={loading}
              />
            </FilterView>

            <NewItemsContainer>
              <NewItemsPlaceholder>Novidades</NewItemsPlaceholder>
              <NewItemsContent
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {loading ? (
                  <Text>Carregando novidades...</Text>
                ) : (
                  <NewsCard data={news} />
                )}
              </NewItemsContent>
            </NewItemsContainer>

            <ItemsListPlaceholder>Listagem</ItemsListPlaceholder>
          </>
        )}
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListCard item={item} />}
        numColumns={2}
      />
    </Container>
  );
}
