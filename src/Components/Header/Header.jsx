import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./Header.css"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BiSearch } from "react-icons/bi"


function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="header container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 header_left">
                        <h1> Logo </h1>
                    </div>
                    <div className="col-md-6 header_right d-flex justify-content-end">
                        <div className="hear_search d-flex ">
                            <input type="text" name="search" id="search" placeholder='Search by Title and Brand' />
                            <BiSearch />
                        </div>
                        <div>
                            <Button variant="light" onClick={handleShow}>
                                Add Product
                            </Button>
                            {/* Add product modal  */}
                            <Modal size="lg" show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Product</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Product name</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter Your Product Name"
                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Row>
                                                <Col>
                                                    <Form.Label>Brand</Form.Label>
                                                    <Form.Control placeholder="Brand" />
                                                </Col>

                                                <Col>
                                                    <Form.Label>Ram/Rom</Form.Label>

                                                    <Form.Control placeholder="Ram /Rom" />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Tag</Form.Label>
                                            <Form.Select>
                                                <option>Search the Select</option>
                                                <option>Best Value</option>
                                                <option>Best Performance</option>
                                                <option>Best Camera</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter Your Product Price"
                                                autoFocus
                                            />
                                        </Form.Group>

                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Publish
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header