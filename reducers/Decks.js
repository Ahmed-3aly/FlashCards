import { DECK_LIST, DECK_PUSH } from '../actions/Decks.js';

export default function Decks(state = [], e) {
    switch (e.type) {
        case DECK_LIST:
            state = e.e
            return state
        case DECK_PUSH:
            state = state.concat([e.e])
            return state
        default:
            return state
    }
}
