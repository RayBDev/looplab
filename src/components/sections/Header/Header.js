import React from "react"
import { Element } from "react-scroll"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"

import "./Header.css"

const header = () => {
  return (
    <header id="home-section">
      <Element className="dark-overlay" name="home-section">
        <Container className="home-inner">
          <Row>
            <Col lg={8} className="d-none d-lg-block">
              <h1 className="display-4">
                Build <strong>social profiles</strong> and gain revenue{" "}
                <strong>profits</strong>
              </h1>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x" />
                </div>
                <div className="p-4 align-self-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, iusto? In vel nobis ut quisquam.
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x" />
                </div>
                <div className="p-4 align-self-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, iusto? In vel nobis ut quisquam.
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x" />
                </div>
                <div className="p-4 align-self-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, iusto? In vel nobis ut quisquam.
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <Card bg="primary" className="text-center card-form">
                <Card.Body>
                  <h3>Sign Up Today</h3>
                  <p>Please fill out this form to register</p>
                  <Form>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Username"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="email"
                        size="lg"
                        placeholder="Email"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="password"
                        size="lg"
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="password"
                        size="lg"
                        placeholder="Confirm Password"
                      />
                    </Form.Group>
                    <input
                      type="submit"
                      value="Sign Up"
                      class="btn btn-outline-light btn-block"
                    />
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Element>
    </header>
  )
}

export default header
