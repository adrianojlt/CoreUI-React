import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Label, Select } from 'reactstrap';

class Rule extends Component {

    constructor(props) {
        super(props);
        this.testrules = [
            {
                name: "frameworkPresentRules",
                rule: [
                   {
                       name: "frameworkPresentfunction"
                   }, 
                   {
                       name: "pattern",
                       rule: [
                           {
                               name: "fileExtension"
                           },
                           {
                               name: "regEx"
                           },
                           {
                               name: "contentType"
                           }
                       ]
                   } 
                ]
            },
            {

            }
        ];

        //JSON.parse
        /*
        fetch(`schema.json`)
            .then(function(data) {
                console.log(data);
            }).catch(function(error) {

            });
            */

    }

    handleRuleChange(event) {

    }

    componentDidMount() {

    }

    renderHeader(rule) {

        return (
            <CardHeader>
                <Row>
                    <Col>
                        <Form>
                            <FormGroup>

                               
                                <Input type="select" name="rule" id="">


                                 
                                </Input>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </CardHeader>
        ); 
    }

    renderDynBody(rule) {
        return (
            <CardBody>
                <Row>
                    <Col>
                        <Form>
                            <FormGroup>

                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </CardBody> 
        )
    }

    renderDefaultHeader(selectedRule) {
        return (
            <CardHeader>
                <Row>
                    <Col>
                        <Form>
                            <FormGroup>

                                {/*<Label>Rule: </Label>*/}
                                <Input type="select" name="rule" id="" value={selectedRule} onChange={this.handleRuleChange.bind(this)}>
                                    {
                                        Object.keys(this.props.schema.properties).filter(_ => _.indexOf("Rules") != -1).map((rule) => {
                                            return (
                                                <option key={rule}>{rule}</option>
                                            );
                                        })
                                    }
                                </Input>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </CardHeader>
        );
    }

    renderDefaultBody() {
        return (
            <CardBody>
                <Row>
                    <Col>
                        <Form>
                            <FormGroup>
                                {<Label>Rule: </Label>}
                                <Input type="select" name="rule" id="">
                                    <option>frameworkPresentfunction</option>
                                    <option>Pattern</option>
                                    <option>fileExtension</option>
                                    <option>cSharpFunction</option>
                                    <option>grammar</option>
                                    <option>parameterizedString</option>
                                    <option>regularExpression</option>
                                    <option>plainCodecSharpFunction</option>
                                    <option>plainCodeGrammar</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                {<Label>Content Type: </Label>}
                                <Input type="select" name="rule" id="">
                                    <option>Template</option>
                                    <option>Plain Code</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="">File Extension</Label>
                                <Input type="text" name="extension" id="extension" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="">RegEx</Label>
                                <Input type="text" name="regex" id="extension" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="">Path to Grammar</Label>
                                <Input type="text" name="regex" id="extension" placeholder="" />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </CardBody> 
        );
    }


    render() {

        //window.myproperties = this.props.schema.properties;
        //console.log(this.props.schema.properties);
        //console.log(this.props.framework);
        
        /*
        Object.keys(this.props.schema.properties).filter(_ => _.indexOf("Rules") != -1 ).map(function(val) {
            console.log(val)
        });
        */

        return (
            /*<Col>*/
            <Col xs="4" sm="4" md="4">
                <Card>
                    {
                        //this.renderDefaultHeader(this.props.ruleName)
                        //this.renderHeader(this.props.framework.templatePreProcessingRules)
                    }
                    {
                        //this.renderDefaultBody()
                        this.renderDynBody(this.props.rule)
                    }
                </Card>
            </Col>
        );
    }
}

export default Rule