import Reflux from 'reflux'

let AppActions = Reflux.createActions({
  'build': {asyncResult: true},
  'parse': {asyncResult: true},
  'setCache': {asyncResult: true},
  'setOptimize': {asyncResult: true},
  'save': {asyncResult: true}
})

export default AppActions
