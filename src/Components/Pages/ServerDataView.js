import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServerDataView = () => {
    const student = useLoaderData()
    const [displayStudent, setDisplayStudent] = useState(student)
    // console.log(student)
    const handleDelete=(_id)=>{
        // console.log('Deleting id: ', _id)
        const agree = window.confirm(`Are you sure to delete ${_id}`)
        if(agree){
            console.log('Deleting id: ', _id)
            fetch(`http://localhost:5000/student/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.acknowledged===true){
                    alert('Data deleted successfully')
                    const remainingStudent = displayStudent.filter(st=>st._id !== _id)
                    setDisplayStudent(remainingStudent)
                }
            
            })
        }
        
    }

    const handleUpdate = () =>{

    }
    return (
        <div>
            <h2>Students: {displayStudent.length}</h2>
            <div>
            {
                displayStudent.map(st=>
                    <p key={st._id}>{st.product}, {st.price} <Link to={`/update/${st._id}`}><button onClick={()=>handleUpdate(st._id)}>Update</button></Link><button onClick={()=>handleDelete(st._id)}>X</button></p> 
                )
            }
            </div>
        </div>
    );
};

export default ServerDataView;