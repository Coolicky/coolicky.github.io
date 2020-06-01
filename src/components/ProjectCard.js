import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
import CardApis from "../api/CardApi";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  const [data, setData] = React.useState(props.data);
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function handleLike() {
    setLiked(!liked);
    var newLikes = data.likes;
    liked ? newLikes-- : newLikes++;
    setData({ ...data, likes: newLikes });
    CardApis.updateCardById(data._id, { likes: newLikes });
  }

  return (
    <Grid item xs={12} sm={6} lg={4} md={4}>
      <Card className={classes.root}>
        <CardHeader
          title={data.categoryTitle}
          subheader={data.subCategoryTitle}
          action={
            <IconButton aria-label="more">
              <OpenInNewIcon />
            </IconButton>
          }
        />
        <CardMedia
          className={classes.media}
          image={data.pictureLocation}
          title={data.pictureTittle}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.mainText}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like me!" onClick={handleLike}>
            <FavoriteIcon color={liked ? "secondary" : "default"} />
            <Typography style={{ marginLeft: 10 }}>{data.likes}</Typography>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{data.secondaryTitle}</Typography>
            <Typography paragraph>{data.secondaryText}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
