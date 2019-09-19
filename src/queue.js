import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

export default function Queue() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Primera Canción" />
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Drafts" />
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
}
