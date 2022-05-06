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
    setLoading(true);

    const getNews = () => {
      api.get("/products?limit=5").then((news) => {
        setNews(news.data);

        setLoading(false);
        console.log("carregando 1", loading);
      });
    };

    const getList = () => {
      api.get("/products").then((list) => {
        setList(list.data);

        setLoading(false);
        console.log("carregando 2", loading);
      });
    };

    getNews();
    getList();
  }, []);

  return (
    <AnimatedLoading />

    // <Container>
    //   <FlatList
    //     ListHeaderComponent={() => (
    //       <>
    //         <Header>
    //           <TextHeader>Produtos</TextHeader>

    //           <CartButton onPress={() => navigation.navigate("Cart")}>
    //             <CartIcon source={require("../../assets/BAG_1.png")} />
    //           </CartButton>
    //         </Header>

    //         <FilterView>
    //           <FilterPlaceholder>
    //             Filtrar Categoria {category != null && category}
    //           </FilterPlaceholder>

    //           <Categories
    //             onChangeSelect={(category) => setCategory(category)}
    //           />
    //         </FilterView>

    //         <NewItemsContainer>
    //           <NewItemsPlaceholder>Novidades</NewItemsPlaceholder>
    //           <NewItemsContent
    //             horizontal
    //             showsHorizontalScrollIndicator={false}
    //           >
    //             {loading ? (
    //               <Text>Carregando novidades...</Text>
    //             ) : (
    //               <NewsCard data={news} />
    //             )}
    //           </NewItemsContent>
    //         </NewItemsContainer>

    //         <ItemsListPlaceholder>Listagem</ItemsListPlaceholder>
    //       </>
    //     )}
    //     data={list}
    //     keyExtractor={(item) => item.id}
    //     renderItem={({ item }) => <ListCard item={item} />}
    //     numColumns={2}
    //   />
    // </Container>
  );
}
