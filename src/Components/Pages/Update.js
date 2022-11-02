import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const student = useLoaderData()
    const [user, setUser] = useState({})

  const handleOnchange = (event) =>{
    const value = event.target.value
    const field = event.target.name
    const newUser = {...user}
    newUser[field] = value
    setUser(newUser)
  }



  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(user)
//process of sending data from client to server------ fetch , method(post/put), headers, body

    fetch('http://localhost:5000/student', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data => {
      if(data.acknowledged){
        alert("Data added successfully")
        event.target.reset()
      }
     
      
      console.log(data)
    
    })

  }

  return (
    <div>
    <Form onSubmit={handleSubmit}>
    <h1>Product Information</h1>
      <Form.Group className="my-3" controlId="product">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
        onChange={handleOnchange}
          name="product"
          type="product"
          placeholder="Enter Your Product Name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product">
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          onChange={handleOnchange}
          name="price"
          type="number"
          placeholder="Enter Your price Name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product">
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control
        onChange={handleOnchange}
          name="quantity"
          type="number"
          placeholder="Enter Product Quantity"
          required
        />
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Add Product
      </Button>
    </Form>
    <div>
    </div>
    </div>
  );
};

export default Update;