import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Link, NavItem, NavLink } from 'react-router-dom';

class Temp extends Component {

  componentDidMount() {
    /*
    setInterval(() => {
      this.setState( () => {
        console.log('setting state');
        return { unseen: 'does not display' }
      })
    },1000);
    */
  }

  render() {

    return (

      <div className="animated fadeIn">
        <Row>

          <Col xs="12" sm="12" md="12">

            <Card>

              <CardHeader>
                <strong>Temp</strong>
              </CardHeader>

              <CardBody>

              </CardBody>
            </Card>

          </Col>

        </Row>
      </div>
    )
  }
}

export default Temp;
