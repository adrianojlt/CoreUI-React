import React, { Component } from 'react';
import {Card,CardHeader,CardBody,CardFooter} from 'reactstrap';

class Framework extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                {/*
                    <CardImg top width="30%" src="https://handlebarsjs.com/images/handlebars_logo.png" alt="Card image cap" />
                */}

                <CardHeader className="text-center">
                    {this.props.name}
                </CardHeader>

                <CardBody>
                    Framework Description
                </CardBody>

                <CardFooter>Card footer</CardFooter>

            </Card>
        );
    }    

}

export default Framework