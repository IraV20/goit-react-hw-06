import css from "./App.module.css";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";

// import initContacts from '../../contact.json';
// import { useState, useEffect } from "react";

const App = () =>{

    // const [contacts, setContacts] = useState(() => 
    //   JSON.parse(localStorage.getItem('saved-contacts')) ?? initContacts);
    
    // const [value, setValue] = useState("");

    // const addContact = (newContact) =>{
    //   setContacts((prevContacts)=>{
    //     return [...prevContacts, newContact];
    //   });
    // };

    // const handleChange = (e) =>{
    //   setValue(e.target.value);
    // };

    // const visibleContacts = contacts.filter((contact) =>
    //  contact.name.toLowerCase().includes(value.toLowerCase()) || 
    //  contact.number.toString().includes(value)  )
    

    // const deleteContact = (contactId) =>{
    //   setContacts((prevContacts)=>{
    //     return prevContacts.filter((contact) => contact.id !== contactId);
    //   });
    // };

    // useEffect(() => {
    //   localStorage.setItem('saved-contacts', JSON.stringify(contacts))
    // }, [contacts]);
    
    return(
        <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm/>
        <SearchBox/>
        <ContactList/>
      </div>
    )
}

export default App;
