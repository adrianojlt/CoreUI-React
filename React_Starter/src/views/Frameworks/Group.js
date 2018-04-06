import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Rule from './Rule';

class Group extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col xs="12" sm="12" md="12">
                <Card>
                    <CardHeader>
                        {this.props.headerLabel}
                    </CardHeader>
                    <CardBody>
                        <Rule />
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

Group.defaultProps = {
    headerLabel: "default header label"
}

export default Group