import React, { Component } from 'react';
import {
  Badge, Row, Col, Card, CardHeader, CardFooter, CardBody, CardImg,
  Label, Input, Button, NavItem, NavLink, CardText, CardTitle, TabContent, TabPane, Nav
} from 'reactstrap';

import './Framework';
import Framework from './Framework';

class Profiles extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {



    return (
      <div className="animated fadeIn">
        <Row>

          <Col xs="12" sm="12" md="12">
            <Framework 
              name="Knockout"
              language="Typescript"
             />
          </Col>

          <Col xs="12" sm="12" md="12">
            <Card>
              {/*
              <CardImg top width="30%" src="https://handlebarsjs.com/images/handlebars_logo.png" alt="Card image cap" />
              */}
              <CardHeader className="text-center">
                Handlebars
            </CardHeader>
              <CardBody>
                Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.
            </CardBody>
              <CardFooter>Card footer</CardFooter>
            </Card>
          </Col>

          <Col xs="12" sm="12" md="12">
            <Card>
              <CardHeader className="text-center">
                Angular
            </CardHeader>
              <CardBody>
                <Nav tabs>
                  <NavItem>
                    <NavLink className="active">Main</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Presence Rules</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Template Rules</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Plain Code Rules</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Post AST</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Post AST</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Resolving</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>DI</NavLink>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
          </Col>

          {/*     
          <Col xs="6" sm="6" md="6">
            <Card>
              <CardHeader className="text-center">
                Angular
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                    >
                      Tab1
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                    >
                      Moar Tabs
                    </NavLink>
                  </NavItem>
                </Nav>
               
              </CardHeader>
                </Nav>
            </CardBody>
            </Card>
          </Col>

           {/*     
          <Col xs="6" sm="6" md="6">
            <Card>
              <CardHeader className="text-center">
                Angular
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                    >
                      Tab1
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                    >
                      Moar Tabs
                    </NavLink>
                  </NavItem>
                </Nav>
               
              </CardHeader>
              <CardBody>
              <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <h4>Tab 1 Contents</h4>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="6">
                        <Card body>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                      <Col sm="6">
                        <Card body>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
           </CardBody>
              <CardFooter>
                <Button color="primary" icon="">Edit
                <i className="ms-Icon"></i>
                </Button>
              </CardFooter>
            </Card>
          </Col>
          */}
        </Row>


        <Row>
          <Col xs="12" sm="12" md="12">
            <Card>
              {/*
              <CardImg top width="30%" src="https://handlebarsjs.com/images/handlebars_logo.png" alt="Card image cap" />
              */}
              <CardHeader className="text-center">
                Handlebars
            </CardHeader>
              <CardBody>
                Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.
            </CardBody>
              <CardFooter>Card footer</CardFooter>
            </Card>
          </Col>

        </Row>
      </div>

    )
  }
}

export default Profiles;
