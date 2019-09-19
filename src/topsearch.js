import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

export default function TopSearchList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Primera Canción" />
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Drafts" />
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
}
