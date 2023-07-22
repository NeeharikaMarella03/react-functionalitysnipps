import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './contacts.css';
import AgeToggle from './AgeToggle'

export default function ContactList() {
    const [contacts, setContacts] = useState([]);
    // const [age, setAge] = useState("")
    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=10')
            .then((response) => {
                // Extract only the required properties from the API response
                const filteredContacts = response.data.results.map((user) => ({
                    name: `${user.name.first} ${user.name.last}`,
                    age: user.dob.age,
                    email: user.email,
                    image: user.picture.large,
                }));
                setContacts(filteredContacts);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);

    

    console.log(contacts)
    return (
        <div className='contact-page'>
            {
                contacts.length === 0 ? <div>Loading ....</div>
                :
                contacts.map((contact, index)=>{
                    return <div className='contact-card' key={index}>
                        <div className='contact-img'>
                            <img src={contact.image} alt='img'/>
                        </div>
                        <div className='contact-details'>
                            <h3>Name: {contact.name}</h3>
                            <h3>Email: {contact.email}</h3>
                            
                            <AgeToggle contact={contact}/>
                            
                        </div>
                    </div>
                })
                    
            }
            
        </div>
    )
}