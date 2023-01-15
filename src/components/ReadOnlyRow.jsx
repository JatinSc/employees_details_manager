import React from "react";
import "../App.css"
const ReadOnlyRow = ({contact , onEditClick , onDelete}) => {
    return (
       <>
            <tr key={contact.id}>
                <td>{contact.fullName}</td>
                <td>{contact.address}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
                <td>
                    <button type="button" onClick={(event)=>onEditClick(event,contact)}>EDIT</button>
                    <button type="button" onClick={()=>onDelete(contact.id)}>DELETE</button>
                </td>
            </tr>

        </>
    )
}

export default ReadOnlyRow