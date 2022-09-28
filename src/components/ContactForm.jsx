// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, {useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@material-ui/core';
import { textAlign } from '@mui/system';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
    
//   </Box>
// );


const ContactForm = ({ fnAddContact }) => {
    const [newNameContact, setnewNameContatct] = useState("")
    const [newPhoneContact, setnewPhoneContact] = useState("")
    const [newEmailContact, setnewEmailContact] = useState("")
    const [newPhotoContact, setnewPhotoContact] = useState("")
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const inputNameOnchangeHandler = (event) => {
        
        setnewNameContatct(event.target.value);
        
    }

    const inputEmailOnchangeHandler = (event) => {
        
        setnewEmailContact(event.target.value);
        
    }

    const inputPhoneOnchangeHandler = (event) => {
        
        setnewPhoneContact(event.target.value);
        
    }
    const inputPhotoOnchangeHandler = (event) => {
       
        setnewPhotoContact(event.target.value);
        
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        fnAddContact(newNameContact,newEmailContact,newPhoneContact,newPhotoContact);
     
        setnewNameContatct("");
        setnewEmailContact("");
        setnewPhoneContact("");
        setnewPhotoContact("");

        
    }
    

    return (
        <>
            <Card sx={{
                maxWidth: 405,
                textAlign: "center",
                marginLeft:"5em"
            }}>
                <form action='' onSubmit={onSubmitHandler}>
                    <CardContent>
                    
              
                            <TextField
                                id="filled-basic1"
                                label="Nama"
                                variant="filled"
                            
                                value={newNameContact}
                                onChange={inputNameOnchangeHandler}
                                />
                 
              
                            <TextField
                                id="filled-basic2"
                                label="Phone"
                                variant="filled"
                            
                                value={newPhoneContact}
                                onChange={inputPhoneOnchangeHandler}
                                />
                            
                     
                 
                            <TextField
                                id="filled-basic3"
                                label="Email"
                                variant="filled"
                                
                                value={newEmailContact}
                                onChange={inputEmailOnchangeHandler}
                                />
                  
                       
                            <TextField
                                id="filled-basic4"
                                label="Image URL"
                                variant="filled"
                                
                                value={newPhotoContact}
                                onChange={inputPhotoOnchangeHandler}
                                />
                     
                    </CardContent>
                    
                    
                    <CardActions>
                        <Button type='submit' size="small">ADD NEW</Button>
                    </CardActions>
                </form>
            </Card>
  
        </>
    );
}
export default ContactForm;