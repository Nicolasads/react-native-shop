import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories";
import CheckoutFooter from "../../components/CheckoutFooter";
import ListCard from "../../components/ListCard";
import NewsCard from "../../components/NewsCard";
import { api } from "../../services/api";
import {
  CartButton,
  CartIcon,
  Container,
  FilterButton,
  FilterLabel,
  FilterList,
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

  const getNews = () => {
    api.get("/products?limit=5").then((news) => {
      setNews(news.data);
      console.log(news.data);
    });
  };

  const getList = () => {
    api.get("/products?limit=5").then((list) => {
      setList(list.data);
    });
  };

  useEffect(() => {
    getNews();
    getList();
  }, []);

  return (
    <Container>
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

        <Categories onChangeSelect={(category) => setCategory(category)} />
      </FilterView>

      <NewItemsContainer>
        <NewItemsPlaceholder>Novidades</NewItemsPlaceholder>
        <NewItemsContent horizontal showsHorizontalScrollIndicator={false}>
          <NewsCard data={news} />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </NewItemsContent>
      </NewItemsContainer>

      <ItemsListPlaceholder>Listagem</ItemsListPlaceholder>
      <ItemsListContainer>
        <ListCard data={news} />
      </ItemsListContainer>
    </Container>
  );
}
