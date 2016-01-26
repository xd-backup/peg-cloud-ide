import Reflux from 'reflux'
import AppActions from '../actions/AppActions'
import PEG from '../../public/vendor/pegjs/peg'

let parser = {}

let state = {
  grammar: '',
  buildResult: { status: '', detail: '' },
  input: '',
  parseResult: { status: '', detail: '' },
  output: { status: '', detail: '' },
  cache: false,
  optimize: 'speed'
}

let AppStore = Reflux.createStore({
  listenables: AppActions,

  onBuild: async function(grammar) {
    state.grammar = grammar

    try {
      parser = PEG.buildParser(state.grammar,
        { cache: state.cache, optimize: state.optimize })
      state.buildResult.status = 'success'
      state.buildResult.detail = 'Parser built successfully.'
    } catch (e) {
      if (state.grammar === '')
        state.buildResult.status = 'warning'
      else
        state.buildResult.status = 'danger'

      state.buildResult.detail = 'Line ' +
        e.location.start.line +
        ', column ' +
        e.location.start.column +
        ': ' +
        e.message
    } finally {
      this.onParse(state.input)
    }
  },

  onParse: async function(input) {
    state.input = input

    if (state.buildResult.status == 'success') {
      try {
        state.output.detail = parser.parse(state.input)
        state.output.status = 'info'
        state.parseResult.status = 'success'
        state.parseResult.detail = 'Input parsed successfully.'
      } catch (e) {
        if (state.input === '')
          state.parseResult.status = 'warning'
        else
          state.parseResult.status = 'danger'

        state.parseResult.detail = 'Line ' +
          e.location.start.line +
          ', column ' +
          e.location.start.column +
          ': ' +
          e.message

        state.output.status = 'default'
        state.output.detail = 'Output not available.'
      }
      finally {
        this.trigger(state)
      }
    }
    else {
      state.parseResult.status = 'warning'
      state.parseResult.detail = 'Parser not available.'
      state.output.status = 'default'
      state.output.detail = 'Output not available.'
      this.trigger(state)
    }
  },

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

export default AppStore
