import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Copyright from "./Copyright";
import CardApis from "../api/CardApi";
import CardsGrid from "./CardsGrid";
import Navbar from "./Navbar";
import Container from "@material-ui/core/Container";

export default function Main() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CardApis.getAllCards()
      .then((res) => {
        const receivedCards = res.data.data;
        setCards(receivedCards);
      })
      .then(() => setLoading(false));
  }, []);

  // function changeCards(event) {}

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom="true">
          Welcome to my Website
        </Typography>
        <CardsGrid />
        <Copyright />
      </Box>
    </Container>
  );
}
