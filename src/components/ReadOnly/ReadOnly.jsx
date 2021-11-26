import React from 'react';
import Button from '@mui/material/Button';
import '../ReadOnly/ReadOnly.css'

function ReadOnly({detail,handleEditClick,handleDeleteClick}) {
    return (
        <tr className="readOnlyDetails">
        <td>{detail.fullname}</td>
        <td>{detail.email}</td>
        <td>{detail.mobile}</td>
        <td>{detail.address}</td>
        <td>
            <Button type="button" onClick={(e)=>handleEditClick(e,detail)} className="edit">Edit</Button>
            <Button type="button" onClick={()=>handleDeleteClick(detail.id)} className="delete">Delete</Button>
        </td>
    </tr>
    )
}

export default ReadOnly
