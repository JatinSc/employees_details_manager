import React from 'react'

const EditableRow = ({onCancel,editContact,setEditContact,contact}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="fullName"
                    placeholder="edit your Full Name"
                    required="required"
                    value={editContact.fullName}
                    onChange={(event) => { setEditContact({ ...editContact, fullName: event.target.value }) }}
                />
            </td>
            <td><input
                type="text"
                name="address"
                placeholder="edit your address"
                required="required"
                value={editContact.address}

                onChange={(event) => { setEditContact({ ...editContact, address: event.target.value }) }}            />
            </td>
            <td>
                <input
                    type="text"
                    name="PhoneNumber"
                    placeholder="edit your PhoneNumber"
                    required="required"
                    value={editContact.phoneNumber}
                    onChange={(event) => { setEditContact({ ...editContact, phoneNumber: event.target.value }) }}
                />
            </td>
            <td>
                <input
                    type="email"
                    name="email"
                    placeholder="edit your email address"
                    required="required"
                    value={editContact.email}
                    onChange={(event) => { setEditContact({ ...editContact, email: event.target.value }) }}
                />
            </td>
            <td>
                <button type='submit'>SAVE</button>
                <button type='button' onClick={onCancel}>CANCEL</button>
            </td>
        </tr>
    )
}

export default EditableRow