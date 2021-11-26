import React from 'react';
import Button from '@mui/material/Button';
import '../Edit/Edit.css'

function Edit({editFormData,handleEditFormChange}) {
    return (
        <div>
            <tr className="row">
                <td>
                    <input type="text" placeholder="enter name" name="fullname" onChange={handleEditFormChange}
                    value={editFormData.fullname}/>
                </td>
                <td>
                <input type="text" placeholder="enter email" name="email" onChange={handleEditFormChange}
                value={editFormData.email}/>
                </td>
                <td>
                <input type="text" placeholder="enter mobile" name="mobile" onChange={handleEditFormChange}
                value={editFormData.mobile}/>
                </td>
                <td>
                <input type="text" placeholder="enter address" name="address" onChange={handleEditFormChange}
                value={editFormData.address}/>
                </td>
                <td><Button type="submit">Save</Button></td>
            </tr>
        </div>
    )
}

export default Edit
