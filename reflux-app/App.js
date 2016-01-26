import React from 'react'
import { PageHeader, Nav, NavItem, Row, Col } from 'react-bootstrap'

import AppActions from './actions/AppActions'
import AppStore from './stores/AppStore'

import CodeEditor from './components/CodeEditor'
import InputEditor from './components/InputEditor'
import Settings from './components/Settings'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grammar: '',
      buildResult: {},
      input: '',
      parseResult: {},
      output: {},
      cache: false,
      optimize: 'speed'
    }
  }

  componentDidMount() {
    this.unsubscribe = AppStore.listen(function(state) {
      this.setState(state)
    }.bind(this))

    AppActions.build(this.state.grammar)
    AppActions.parse(this.state.input)
  }

  componentWillUnmount() {
    if (_.isFunction(this.unsubscribe))
      this.unsubscribe()
  }

  handleNavSelect() {

  }

  render() {
    return (
      <div className='container-fluid'>
        <Row>
          <Col xs={6}>
            <PageHeader><a href='/'>PEG.js</a><small>Parser Generator for JavaScript</small></PageHeader>
          </Col>
          <Col xs={6}>
            <Nav bsStyle='pills' activeKey={1} onSelect={ this.handleNavSelect }>
              <NavItem eventKey={1} href='/'>Designer</NavItem>
              <NavItem eventKey={2} href='/doc'>Documentation</NavItem>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <CodeEditor
              grammar={ this.state.grammar }
              buildResult={ this.state.buildResult }
            />
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={12}>
                <InputEditor
                  input={ this.state.input }
                  parseResult={ this.state.parseResult }
                  output={ this.state.output }
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Settings
                  cache={ this.state.cache }
                  optimize={ this.state.optimize }
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

App.propTypes = {

}

App.defaultProps = {

}

export default App
