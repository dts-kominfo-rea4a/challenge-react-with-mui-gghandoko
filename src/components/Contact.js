// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
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
    console.log("mydata");
    console.log(data);
    const classes = useStyles();
    // Contact berisi foto, nama, telepon, dan email
    
    return (
        <>
            <List className={classes.root}>
                {data.map(itemContact => {
                    return (
                        // <h2>asdsadasd</h2>
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
                        {/* <Divider variant="inset" component="li" /> */}

                        </ListItem>

                        
                    );
                    
                })
                }
                
                {/* <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="https://avatars3.githubusercontent.com/u/8424863?s=256" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            to Scott, Alex, Jennifer
                        </Typography>
                        <Typography>Emails</Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" /> */}
                {/* <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="https://avatars3.githubusercontent.com/u/8424863?s=256" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            Sandra Adams
                        </Typography>
                            <Typography>
                                Email
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem> */}
            </List>
    
        </>
        // );
    );
};

export default Contact;
