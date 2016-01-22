import Reflux from 'reflux'
import CodeEditorActions from '../actions/CodeEditorActions'

let state = {
  grammar: '',
  buildResult: {}
}

let CodeEditorStore = Reflux.createStore({
  listenables: CodeEditorActions,

  onSetGrammar: async function(grammar) {
    state.grammar = grammar
    this.trigger(state)
  },

  onBuild: async function() {
    // TO DO : build
  }
})

export default CodeEditorStore
