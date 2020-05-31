import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid } from "@material-ui/core";

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const [cardInfo, setCardInfo] = useState({
  //   categoryTitle: "Category",
  //   subCategoryTitle: "Subcategory",
  //   pictureLocation: "https://picsum.photos/200",
  //   pictureTittle: "Picture",
  //   mainText:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet suspendisse interdum consectetur libero id. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est.",
  //   secondaryTitle: "Eu facilisis sed odio morbi.",
  //   secondaryText:
  //     "Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Nulla pellentesque dignissim enim sit. Sed sed risus pretium quam vulputate dignissim suspendisse in. Vestibulum morbi blandit cursus risus at ultrices mi. Erat imperdiet sed euismod nisi. In hac habitasse platea dictumst quisque sagittis purus sit amet. Fames ac turpis egestas sed tempus urna et pharetra pharetra.",
  // });

  return (
    <Grid item xs={12} sm={6} lg={4} md={4}>
      <Card className={classes.root}>
        <CardHeader
          title={props.data.categoryTitle}
          subheader={props.data.subCategoryTitle}
        />
        <CardMedia
          className={classes.media}
          image={props.data.pictureLocation}
          title={props.data.pictureTittle}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.mainText}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
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
            <Typography paragraph>{props.data.secondaryTitle}</Typography>
            <Typography paragraph>{props.data.secondaryText}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
