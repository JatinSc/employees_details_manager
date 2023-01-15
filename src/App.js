import React, { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import data from "./mock-data.json"
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';


function App() {
  const [contacts, setContacts] = useState(data);
  // const {nameRef,addressRef , phoneRef ,  emailRef }  = useRef()
const [editContactId , setEditContactId] = useState(null);

  const [addContact, setAddContact] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  })

  const [editContact , setEditContact] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  })

  function onAdd(event) {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addContact.fullName,
      address: addContact.address,
      phoneNumber: addContact.phoneNumber,
      email: addContact.email
    }
    setContacts([...contacts, newContact])
  }

  const onEditClick = (event , contact) => {
   event.preventDefault();
   setEditContactId(contact.id);
   
   const editContactValues = {
    fullName: contact.fullName,
    address: contact.address,
    phoneNumber: contact.phoneNumber,
    email: contact.email
  }
setEditContact(editContactValues)
  };

  const onSave =(event) =>{
    event.preventDefault()
    const newEditedContact = {
      id:editContactId,
      fullName: editContact.fullName,
      address: editContact.address,
      phoneNumber: editContact.phoneNumber,
      email: editContact.email
    }
    const newContacts = [...contacts]

    const index = contacts.findIndex((contact)=> contact.id === editContactId);
    newContacts[index] = newEditedContact;
        setContacts(newContacts);
        setEditContactId(null);
          setEditContactId(null)

      }

const onCancel = (event) => {
event.preventDefault()
setEditContactId(null)
}

const onDeleteClick = (deleteContactId) =>{
   const newContacts = [...contacts];
   const index = contacts.findIndex((contact)=> contact.id === deleteContactId);

   newContacts.splice(index, 1);
   setContacts(newContacts);

  }

  return (
    <div className="app-container">
      <h1>EMPLOYEE DETAILS</h1>
      <form onSubmit={onSave}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) =>
            <>
            {editContactId === contact.id ?(
            <EditableRow 
            editContact={editContact}
            setEditContact={setEditContact}
            key={contact.id}
            onSave={onSave}
            onCancel={onCancel}
            // setContacts={setContacts}
            />
            ) : (
            <ReadOnlyRow contact={contact} 
             onEditClick={onEditClick}
             onDelete={onDeleteClick}
             />
            )} 
            </>
          )}

        </tbody>
      </table>
      </form>
      <h2>ADD NEW EMPLOYEE</h2>
      <form onSubmit={onAdd}>
        <input
          type="text"
          name="fullName"
          placeholder="Enter A Full Name"
          required="required"

          onChange={(event) => { setAddContact({ ...addContact, fullName: event.target.value }) }}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter A address"
          required="required"
          onChange={(event) => { setAddContact({ ...addContact, address: event.target.value }) }}

        />
        <input
          type="text"
          name="PhoneNumber"
          placeholder="Enter A phone number"
          required="required"

          onChange={(event) => { setAddContact({ ...addContact, phoneNumber: event.target.value }) }}

        />
        <input
          type="email"
          name="email"
          placeholder="Enter A email"
          required="required"

          onChange={(event) => { setAddContact({ ...addContact, email: event.target.value }) }}

        />
        <button type='submit'>ADD</button>

      </form>
    </div>
  );
}

export default App;
