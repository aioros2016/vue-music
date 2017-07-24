import * as types from './mutation-types'

const matutaions = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {
  	state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
  	state.fullScreen = flag
  	console.log(state.fullScreen)
  },
  [types.SET_PLAYLIST](state, list) {
  	state.playList = list
  	console.log(state.playList)
  },
  [types.SET_SEQUENCELIST](state, list) {
  	state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {
  	state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
  	state.currentIndex = index
  }
}

export default matutaions