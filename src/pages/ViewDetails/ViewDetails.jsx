import React,{useState,Fragment} from 'react';
import data from '../../pages/info.json'
import ReadOnly from '../../components/ReadOnly/ReadOnly.jsx';
import Edit from '../../components/Edit/Edit.jsx'
import '../ViewDetails/ViewDetails.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NavBar from '../../components/NavBar/NavBar.jsx';

function ViewDetails() {
    const[details,setDetails]=useState(data);
    const[editId,setEditId]=useState(null);
    const[info,setInfo]=useState({
        fullname:'',
        email:'',
        mobile:'',
        address:''
    });
    
    const[editFormData,setEditFormData]=useState({
        fullname:'',
        email:'',
        mobile:'',
        address:''
    })

    const onchange=(e)=>{
        e.preventDefault();
        const fieldname=e.target.getAttribute('name');
        const fieldvalue=e.target.value;
        const newdata={...info};
        newdata[fieldname]=fieldvalue;
        setInfo(newdata);
    }

    const onsubmit=(e)=>{
        e.preventDefault();
        const newUserInfo={
            fullname:info.fullname,
            email:info.email,
            mobile:info.mobile,
            address:info.address
        }
        const newUserInfos=[...details,newUserInfo];
        setDetails(newUserInfos)
    }

    const handleEditClick=(e,detail)=>{
        e.preventDefault();
        setEditId(detail.id);

        const foemValues={
            fullname:detail.fullname,
            address:detail.address,
            mobile:detail.mobile,
            email:detail.email
        }
        setEditFormData(foemValues)
    }

    const handleEdit=(e)=>{
        e.preventDefault();
        const fieldname=e.target.getAttribute("name");
        const fieldvalue=e.target.value;
        const newFormData={...editFormData};
        newFormData[fieldname]=fieldvalue;
        setEditFormData(newFormData)
    }

    const handleEditFormSubmit=(e)=>{
        e.preventDefault();
        const editedUser={
            id:editId,
            fullname:editFormData.fullname,
            email:editFormData.email,
            mobile:editFormData.mobile,
            address:editFormData.address
        }
        const newUser=[...details];
        const index=details.findIndex((detail)=>detail.id===editId);
        newUser[index]=editedUser;
        setDetails(newUser);
        setEditId(null)
    }

    const handleDeleteClick=(userId)=>{
        const newUser=[...details];
        const index=details.findIndex((user)=>user.id===editId)
        newUser.splice(index,1)
        setDetails(newUser)
    }

    return (
        <div>
            <NavBar/>
            <form onSubmit={handleEditFormSubmit}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((detail)=>(
                        <Fragment>
                            {editId === detail.id? (
                            <Edit 
                            editFormData={editFormData} 
                            handleEdit={handleEdit}
                            /> 
                    ) : (
                             <ReadOnly 
                             detail={detail} 
                             handleEditClick={handleEditClick} 
                    handleDeleteClick={handleDeleteClick}/> )}
                       </Fragment>
                    ))}
                </tbody>
            </table>
            </form>
            <h2>Add User</h2>
            <form onSubmit={onsubmit}>
                <div className="enterData">

                <TextField 
                type="text" 
                name="fullname" 
                placeholder="enter name" 
                onChange={onchange} 
                sx={{mb:1}}/>

                <TextField 
                type="text" 
                name="email" 
                placeholder="enter email" 
                onChange={onchange} 
                sx={{mb:1}}/>
                
                <TextField type="text" name="mobile" placeholder="enter mobile" onChange={onchange} sx={{mb:1}}/>
                <TextField type="text" name="address" placeholder="enter address" onChange={onchange} sx={{mb:1}}/>
                <Button type="submit" onClick={onsubmit} className="add">ADD</Button>
                </div>
            
            </form>
            
        </div>
    )
}

export default ViewDetails;
