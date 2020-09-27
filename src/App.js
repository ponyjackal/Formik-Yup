import React, { useState, useEffect } from "react";
import { Form, Button, Col, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles.css";

const validateSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too short").required("Required"),
  address: Yup.string().required("Required"),
  number: Yup.string().min(10).required("Required"),
  isAccept: Yup.boolean()
});

const App = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      number: "",
      password: "",
      isAccept: false
    },
    validateSchema,
    onSubmit: (values) => {
      console.log(values);
      console.log(errors);
    }
  });

  return (
    <Form className="App">
      <Form.Row>
        <Col>
          <Form.Group id="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={values.email}
              placeholder="Email"
              onChange={handleChange}
            />
            {errors.name ? (
              <Alert variant="warning">{errors.name}</Alert>
            ) : null}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group id="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group id="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={values.name}
              placeholder="Name"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group id="formNumber">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="text"
              name="number"
              value={values.number}
              placeholder="Number"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group id="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={values.address}
              placeholder="Address"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Form.Group id="formIsAccept">
          <Form.Check
            type="checkbox"
            name="isAccept"
            label="isAccept"
            value={values.isAccept}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default App;
