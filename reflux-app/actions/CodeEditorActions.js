import Reflux from 'reflux'

let CodeEditorActions = Reflux.createActions({
  'setGrammar': {asyncResult: true},
  'build': {asyncResult: true}
})

export default CodeEditorActions
