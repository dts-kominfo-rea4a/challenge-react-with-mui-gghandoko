// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
   
    const classes = useStyles();
    // Contact berisi foto, nama, telepon, dan email
    
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {data.map(itemContact => {
                    return (
                        <ListItem alignItems="flex-start" key={itemContact.name}>
                            
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={itemContact.photo} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={itemContact.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {itemContact.email}
                                        </Typography>
                                        <Typography>{itemContact.phone}</Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    );
                }
                )}
            </List>
        </>
    );
};

export default Contact;
