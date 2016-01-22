import Reflux from 'reflux'

let SettingsActions = Reflux.createActions({
  'setCache': {asyncResult: true},
  'setOptimize': {asyncResult: true},
  'save': {asyncResult: true}
})

export default SettingsActions
