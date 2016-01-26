import { Input, Label, Button, Row, Col } from 'react-bootstrap'

import React from 'react'
import SettingsActions from '../actions/SettingsActions'
import SettingsStore from '../stores/SettingsStore'
import AppActions from '../actions/AppActions'

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

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

  onOptimizeChange(e) {
    AppActions.setOptimize(e.target.value)
    e.preventDefault()
  }

  onCacheChange(e) {
    AppActions.setCache(e.target.checked)
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1><Label>3</Label> Generate the parser code</h1>
          <Row>
            <Col xs={8}>
              <Input type='select'
                label='Optimize'
                onChange={ this.onOptimizeChange }
                value={ this.props.optimize }>
                <option value='speed'>Parsing Speed</option>
                <option value='size'>Code Size</option>
              </Input>
              <Input type='checkbox'
                label='Use result cache'
                onChange={ this.onCacheChange }
                checked={ this.props.cache }
              />
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
