import Reflux from 'reflux'
import SettingsActions from '../actions/SettingsActions'

let state = {
  cache: false,
  optimize: 'speed'
}

let SettingsStore = Reflux.createStore({
  listenables: SettingsActions,

  onSetCache: async function(cache) {
    state.cache = cache
    this.trigger(state)
  },

  onSetOptimize: async function(optimize) {
    state.optimize = optimize
    this.trigger(state)
  },

  onSave: async function()
  {
    // TO DO : save
  }
})

export default SettingsStore
