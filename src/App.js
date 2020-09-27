import React, { useState, useEffect } from "react";
import { Form, Button, Col, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import "./styles.css";

const MyAlert = styled(Alert)`
  margin-top: 10px;
`;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8, "Too short").required("Password is required"),
  address: Yup.string().required("Address is rquired"),
  number: Yup.string().min(10).required("Number is required"),
  isAccept: Yup.bool().oneOf([true], "Accept Terms & Conditions is required")
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
    validationSchema,
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
            {errors.email ? (
              <MyAlert variant="danger">{errors.email}</MyAlert>
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
            {errors.password ? (
              <MyAlert variant="danger">{errors.password}</MyAlert>
            ) : null}
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
            {errors.name ? (
              <MyAlert variant="danger">{errors.name}</MyAlert>
            ) : null}
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
            {errors.number ? (
              <MyAlert variant="danger">{errors.number}</MyAlert>
            ) : null}
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
            {errors.address ? (
              <MyAlert variant="danger">{errors.address}</MyAlert>
            ) : null}
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Form.Group id="formIsAccept">
          <Form.Check
            type="checkbox"
            name="isAccept"
            label="Accept Terms & Conditions"
            value={values.isAccept}
            onChange={handleChange}
          />
          {errors.isAccept ? (
            <MyAlert variant="danger">{errors.isAccept}</MyAlert>
          ) : null}
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default App;
