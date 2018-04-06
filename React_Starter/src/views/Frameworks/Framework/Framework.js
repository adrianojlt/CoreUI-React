import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import FakeApi from '../../../fakeApi';
import Rule from '../Rule';
import Group from '../Group';
import schema from '../schema.json';
import handlebars from '../Handlebars.json';
import html from '../Html.json';

class Framework extends Component {


  constructor(props) {
    super(props);
    //this.framework = FakeApi.get(this.props.match.params.name);
    console.log('construct');
    this.state = {
      framework: [],
      rules: []
    };

    /*
    this.setState({
      framework: this.framework
    });
    */

    //window.schema = schema;
    //console.log(schema);
  }
  /*
  User = ({match}) => {
    return <h1>{match.params.name}</h1>
  }
  */
  componentDidMount() {
    //this.updateRules();
    console.log('componentDidMount');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
    //var frk = FakeApi.get(this.props.match.params.name);
    //this.state.rules = frk.frameworkPresentRules; 
  }

  renderTemplatePreProcessingRules(rules) {

    if (rules == null) {
      return (<div>no rules</div>);
    }

    return (
      //<div>{this.framework.templatePreProcessingRules.length}</div>
      // TODO - iterate rules
      <Rule 
        schema={schema} 
        lRule={rules}
        ruleName="templatePreProcessingRule"
        framework={this.framework} />
    );
  }

  renderFrameworkPresentRules() {

    console.log('render');
    //this.updateRules();
    var frk = FakeApi.get(this.props.match.params.name);
    this.state.rules = frk.frameworkPresentRules;
    var rules = this.state.rules;

    if (rules === 'undefined' || rules == 0) {
      return (<div>no rules</div>);
    }

    const rulesComp = rules.map(function(rule, k) {

      return (
        <Rule 
          key={k}
          schema={schema} 
          rule={rules}
          //framework={frk} 
        />
      );
    });
    

    return rulesComp;
  }

  updateRules() {
    var frk = FakeApi.get(this.props.match.params.name);
    this.setState({
      framework: frk,
      rules: frk.frameworkPresentRules
    });
  }

  something(rule) {
   
  }

  updateTest() {
    this.setState( (prevState,props) => {
      var frk = FakeApi.get(this.props.match.params.name);
      var newRules = prevState.rules.concat({});
      return {
        framework: frk,
        rules: newRules
      }
    });
    
    window.state = this.state;
    console.log(this.state);
  }

  addRule() {
    //var rules = this.state.rules;
    //window.rules = rules;
    //this.setState({rules: this.state.rules.concat({})});
    console.log('add rule');
    this.updateTest();
    //this.updateRules();
  }

  render() {

    //var hasFrameworkPresentRules = framework.frameworkPresentRules.length
    this.framework = FakeApi.get(this.props.match.params.name);
    //this.setState({rules: this.framework.frameworkPresentRules});

    const elems = this.framework.frameworkPresentRules.map(function (rule, k) {


      //console.log(rule);
      //var cenas = a.rules.map(function(e) { });

      return (
        <div key={k}>
          <p>Rule Type: <span>{rule.ruleType}</span></p>
          <p>Rule Type Extension: <span>{rule.rule.fileExtension}</span></p>
        </div>
      );
    })

   
  
    return (

      <div className="animated fadeIn">

        <div className="row">

          <div className="col-12">

            <div className="card">

              <div className="card-header">
                <strong>Framework info</strong>
              </div>

              <div className="card-body">
                <div className="bd-example">

                  <dl className="row">

                    <dd className="col-sm-7">Framework Name</dd>
                    <dt className="col-sm-5">{this.framework.name}</dt>

                    <dd className="col-sm-7">Language</dd>
                    <dt className="col-sm-5">{this.framework.language}</dt>

                    <dd className="col-sm-7">Version</dd>
                    <dt className="col-sm-5">{this.framework.Version}</dt>

                    <dd className="col-sm-7">Template Type</dd>
                    <dt className="col-sm-5">{this.framework.templateType}</dt>

                  </dl>

                  <dl className="row">
                    {
                      //elems
                    }
                  </dl>

                </div>
              </div>

            </div>
          </div>

          {
          /*
          <Group 
            headerLabel="Group"
            />
          
          <Group />
          */
          }

          <Col xs="12" sm="12" md="12">

            <Card>

              <CardHeader>
                <strong>Framework Present Rules</strong>
                {
                //<Button outline color="success" className="btn float-right icon-plus" onClick="{this.addRule}"></Button>
                }
                <button className="btn float-right icon-plus" onClick={this.addRule.bind(this)}></button>
              </CardHeader>

              <CardBody>

                <Row>

                  {/*
                  <Col xs="4" sm="4" md="4">
                    <Card>
                      <CardHeader>
                        rule 01
                      </CardHeader>
                      <CardBody>
                        cenas
                      </CardBody>
                    </Card>
                  </Col>
                  */}

                  {
                    this.renderFrameworkPresentRules()
                  }

                  {/*
                  <Rule 
                    schema={schema} 
                    framework={this.framework}
                    />

                  <Rule 
                    schema={schema} 
                    framework={this.framework}/>
                  */}

                </Row>

              </CardBody>

            </Card>

          </Col>

        </div>

        <Row>

          <Col xs="12" sm="12" md="12">
            <Card>
              <CardHeader>
                <strong>Template Pre Processing Rules</strong>
              </CardHeader>
              <CardBody>
                {
                  //this.renderTemplatePreProcessingRules(this.framework.templatePreProcessingRules)
                  //this.something(this.framework.templatePreProcessingRules)
                }
                {/*
                <Rule />
                <Rule />
                <Rule />
                */}
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="12" md="12">
            <Card>
              <CardHeader>
                <strong>Plain Code Pre Processing Rules</strong>
              </CardHeader>
              <CardBody>
                {/*<Rule />*/}
              </CardBody>
            </Card>
          </Col>

        </Row>

        <Row>

          <Col xs="4" sm="4" md="4">
            <CardHeader>
              <strong>Resolving Rules</strong>
            </CardHeader>
            <CardBody>
            </CardBody>
          </Col>

          <Col xs="4" sm="4" md="4">
            <CardHeader>
              <strong>Post AST Rules</strong>
            </CardHeader>
            <CardBody>
            </CardBody>
          </Col>

          <Col xs="4" sm="4" md="4">
            <CardHeader>
              <strong>Dependency Injection</strong>
            </CardHeader>
            <CardBody>
            </CardBody>
          </Col>

        </Row>

      </div>
    )
  }
}

export default Framework;
