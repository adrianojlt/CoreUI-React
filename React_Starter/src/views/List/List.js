import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Link,NavItem,NavLink } from 'react-router-dom';

class List extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="2" sm="2" md="2">
            <Card>
              <CardHeader>
                <strong>Framework List</strong>
              </CardHeader>
              <CardBody>
              <ul>
                  <li>
                    <Link to="/list">Angular</Link>
                  </li>
                  <li>
                      <NavLink activeClassName="active" to="/profiles">profiles</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" to="/frameworks">frameworks</NavLink>
                  </li>
                  <li>
                    <Link to="/list/Knockout">Knockout</Link>
                  </li>
                </ul>
                </CardBody>
            </Card>
          </Col>
          <Col xs="10" sm="10" md="10">
            <Card>
              <CardHeader>
                <strong>Framework Content</strong>
              </CardHeader>
              <CardBody>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <h1>row</h1>
        </Row>
      </div>
    )
  }
}

export default List;
