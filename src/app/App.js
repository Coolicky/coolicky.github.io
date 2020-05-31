import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../ProTip";
import ProjectCard from "../components/ProjectCard";
import { Grid } from "@material-ui/core";
import Copyright from "../components/Copyright";
import apis from "../api/api";

export default function App() {
  const [cards, setCards] = useState([
    {
      categoryTitle: "Category",
      subCategoryTitle: "Subcategory",
      pictureLocation: "https://picsum.photos/200",
      pictureTittle: "Picture",
      mainText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet suspendisse interdum consectetur libero id. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est.",
      secondaryTitle: "Eu facilisis sed odio morbi.",
      secondaryText:
        "Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Nulla pellentesque dignissim enim sit. Sed sed risus pretium quam vulputate dignissim suspendisse in. Vestibulum morbi blandit cursus risus at ultrices mi. Erat imperdiet sed euismod nisi. In hac habitasse platea dictumst quisque sagittis purus sit amet. Fames ac turpis egestas sed tempus urna et pharetra pharetra.",
    },
  ]);

  useEffect(() => {
    apis.getAllCards().then((res) => {
      const receivedCards = res.data.data;
      setCards(receivedCards);
    });
  }, []);

  // function changeCards(event) {}

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to my Website
        </Typography>
        <Grid container spacing={3}>
          {cards.map((card) => (
            <ProjectCard data={card} />
          ))}
        </Grid>

        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
