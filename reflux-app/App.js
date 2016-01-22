import React from 'react'
import { PageHeader, Nav, NavItem, Row, Col } from 'react-bootstrap'

import CodeEditor from './components/CodeEditor'
import InputEditor from './components/InputEditor'
import Settings from './components/Settings'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
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
            <CodeEditor />
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={12}>
                <InputEditor />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Settings />
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
