import Ace from 'react-ace'
import 'brace/mode/plain_text'
import 'brace/theme/github'

import { Label, Alert } from 'react-bootstrap'

import React from 'react'
import CodeEditorActions from '../actions/CodeEditorActions'
import CodeEditorStore from '../stores/CodeEditorStore'
import AppActions from '../actions/AppActions'

class CodeEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.unsubscribe = CodeEditorStore.listen(function(state) {
      this.setState(state);
    }.bind(this));
  }

  componentWillUnmount() {
    if (_.isFunction(this.unsubscribe))
      this.unsubscribe();
  }

  onGrammarChange(grammar) {
    AppActions.build(grammar)
  }

  render() {
    let opts = {
      mode: 'pegjs',
      lineNumbers: true
    }

    return (
      <div>
        <h1><Label>1</Label> Write your PEG.js grammar</h1>
        <Ace mode='plain_text'
          onChange={ this.onGrammarChange }
          theme='github'
          showGutter={true}
          showPrintMargin={true}
          value={ this.props.grammar }
          editorProps={{$blockScrolling: true}}
        />
        <Alert bsStyle={ this.props.buildResult.status }>
          { this.props.buildResult.detail }
        </Alert>
      </div>
    )
  }
}

CodeEditor.propTypes = {

}

CodeEditor.defaultProps = {

}

export default CodeEditor
