import React from "react";
import { Button, Form } from "react-bootstrap";

const Products = () => {
  const handleSubmit = (event) => {};
  return (
    <div>
    <Form onSubmit={handleSubmit}>
    <h1>Product Information</h1>
      <Form.Group className="my-3" controlId="product">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          name="product"
          type="product"
          placeholder="Enter Your Product Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          name="price"
          type="price"
          placeholder="Enter Your price Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="product">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          name="quantity"
          type="quantity"
          placeholder="Enter Product Quantity"
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

export default Products;
