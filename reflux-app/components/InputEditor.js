import { Input, Label, Alert, Panel } from 'react-bootstrap'

import React from 'react'
import InputEditorActions from '../actions/InputEditorActions'
import InputEditorStore from '../stores/InputEditorStore'

class InputEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      parseResult: {},
      output: {}
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

  onGrammarChange(grammar) {
    InputEditorActions.parse(input)
  }

  render() {
    return (
      <div>
        <h1><Label>2</Label> Test the generated parser with some input</h1>
        <Input type='textarea' />
        <Alert bsStyle={ this.state.parseResult.status }>
          { this.state.parseResult.detail }
        </Alert>
        <Panel header='Output' bsStyle={ this.state.output.status }>
          { this.state.output.detail }
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
