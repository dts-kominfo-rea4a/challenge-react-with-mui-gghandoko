import './App.css';
import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Contact from './components/Contact';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import contactsJSON from './data/contacts.json';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


// Uncomment untuk memuat daftar kontak



const App = () => {
  const classes = useStyles();
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contact, setContact] = useState(contactsJSON)
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const tambahContact = (contactNameBaru,contactEmailBaru,contactNomorBaru,contactPhotobaru) => {
    
    const objectContactBaru = {
      name: contactNameBaru,
      phone: contactNomorBaru,
      email: contactEmailBaru,
      photo: contactPhotobaru
    }

    setContact([...contact, objectContactBaru]);
    
  }

  

  


  return (
    <div className="App">
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
          
        </Grid>
        <Grid item xs={6}>
            <ContactForm
              fnAddContact={tambahContact} />
        </Grid>
        <Grid item xs={6}>
            <Contact data={contact} />
        </Grid>
        
      </Grid>
    </div>
      
      
      
    </div>
  );
};

export default App;
