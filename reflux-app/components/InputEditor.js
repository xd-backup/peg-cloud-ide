import { Input, Label, Alert, Panel } from 'react-bootstrap'

import React from 'react'
import InputEditorActions from '../actions/InputEditorActions'
import InputEditorStore from '../stores/InputEditorStore'
import AppActions from '../actions/AppActions'

class InputEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.unsubscribe = InputEditorStore.listen(function(state) {
      this.setState(state);
    }.bind(this));
  }

  componentWillUnmount() {
    if (_.isFunction(this.unsubscribe))
      this.unsubscribe();
  }

  onInputChange(e) {
    AppActions.parse(e.target.value)
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1><Label>2</Label> Test the generated parser with some input</h1>
        <Input type='textarea' onChange={ this.onInputChange } />
        <Alert bsStyle={ this.props.parseResult.status }>
          { this.props.parseResult.detail }
        </Alert>
        <Panel header='Output' bsStyle={ this.props.output.status }>
          { this.props.output.detail }
        </Panel>
      </div>
    )
  }
}

InputEditor.propTypes = {

}

InputEditor.defaultProps = {

}

export default InputEditor
