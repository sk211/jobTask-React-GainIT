import React from 'react'
import Product from '../Product/Product'
import Dropdown from 'react-bootstrap/Dropdown';
import "./Products.css"

function Products() {
  return (
    <div className='container productSection'>
      <div className=" d-flex justify-content-between">
        <h3>All product </h3>
        <div className="d-flex dropdown_section justify-content-end">
          <div className="pr-4"> Short by :</div>
          <div className="ml-3">
            <Dropdown >
              <Dropdown.Toggle id="dropdown-basic">
                ALL Products
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Best Value</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Best Performance </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Best Camera</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

      </div>
      <div className="row">
        <Product />
      </div>
    </div>
  )
}

export default Products