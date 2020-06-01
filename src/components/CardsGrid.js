import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { Grid } from "@material-ui/core";
import CardApis from "../api/CardApi";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function App() {
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
    <React.Fragment>
      {loading ? <LinearProgress color="secondary" /> : null}
      <Grid container spacing={3}>
        {cards.map((card) => (
          <ProjectCard data={card} />
        ))}
      </Grid>
    </React.Fragment>
  );
}
