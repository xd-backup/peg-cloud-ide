import Reflux from 'reflux'
import CodeEditorActions from '../actions/CodeEditorActions'

let state = {
  grammar: '',
  buildResult: {}
}

let CodeEditorStore = Reflux.createStore({
  listenables: CodeEditorActions,

})

export default CodeEditorStore
