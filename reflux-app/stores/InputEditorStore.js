import Reflux from 'reflux'
import InputEditorActions from '../actions/InputEditorActions'

let state = {
  input: '',
  parseResult: {},
  output: {}
}

let InputEditorStore = Reflux.createStore({
  listenables: InputEditorActions,

  onSetInput: async function(input) {
    state.input = input
    this.trigger(state)
  },

  onParse: async function() {
    // TO DO : parse
  }

})

export default InputEditorStore
