import React from "react";
import CheckoutFooter from "../../components/CheckoutFooter";
import ListCard from "../../components/ListCard";
import NewsCard from "../../components/NewsCard";
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
  return (
    <Container>
      <Header>
        <TextHeader>Produtos</TextHeader>

        <CartButton onPress={() => navigation.navigate("Cart")}>
          <CartIcon source={require("../../assets/BAG_1.png")} />
        </CartButton>
      </Header>

      <FilterView>
        <FilterPlaceholder>Filtrar Categoria</FilterPlaceholder>

        <FilterList horizontal showsHorizontalScrollIndicator={false}>
          <FilterButton>
            <FilterLabel>Últimos</FilterLabel>
          </FilterButton>

          <FilterButton>
            <FilterLabel>Categoria 1</FilterLabel>
          </FilterButton>

          <FilterButton>
            <FilterLabel>Categoria 2</FilterLabel>
          </FilterButton>

          <FilterButton>
            <FilterLabel>Categoria 3</FilterLabel>
          </FilterButton>

          <FilterButton>
            <FilterLabel>Categoria 4</FilterLabel>
          </FilterButton>
        </FilterList>
      </FilterView>

      <NewItemsContainer>
        <NewItemsPlaceholder>Novidades</NewItemsPlaceholder>
        <NewItemsContent horizontal showsHorizontalScrollIndicator={false}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </NewItemsContent>
      </NewItemsContainer>

      <ItemsListPlaceholder>Listagem</ItemsListPlaceholder>
      <ItemsListContainer>
        <ListCard />
        <ListCard />
      </ItemsListContainer>
      <ItemsListContainer>
        <ListCard />
        <ListCard />
      </ItemsListContainer>
      <ItemsListContainer>
        <ListCard />
        <ListCard />
      </ItemsListContainer>
      <ItemsListContainer>
        <ListCard />
        <ListCard />
      </ItemsListContainer>

      <CheckoutFooter />
    </Container>
  );
}
