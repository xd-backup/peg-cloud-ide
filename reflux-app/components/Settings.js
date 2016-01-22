import { Input, Label, Button, Row, Col } from 'react-bootstrap'

import React from 'react'
import SettingsActions from '../actions/SettingsActions'
import SettingsStore from '../stores/SettingsStore'

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cache: false,
      optimize: 'speed'
    }
  }

  componentDidMount() {
    this.unsubscribe = SettingsStore.listen(function(state) {
      this.setState(state);
    }.bind(this));
  }

  componentWillUnmount() {
    if (_.isFunction(this.unsubscribe))
      this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1><Label>3</Label> Generate the parser code</h1>
          <Row>
            <Col xs={8}>
              <Input type='select'
                label='Optimize'>
                <option value='speed'>Parsing Speed</option>
                <option value='size'>Code Size</option>
              </Input>
              <Input type='checkbox'
                label='Use result cache'/>
            </Col>
            <Col xs={4}>
              <Button bsStyle='primary'>Generate</Button>
            </Col>
          </Row>
      </div>
    )
  }
}

Settings.propTypes = {

}

Settings.defaultProps = {

}

export default Settings
