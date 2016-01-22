import Reflux from 'reflux'

let InputEditorActions = Reflux.createActions({
  'setInput': {asyncResult: true},
  'parse': {asyncResult: true}
})

export default InputEditorActions
