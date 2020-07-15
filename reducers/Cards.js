import { CARD_LIST, CARD_PUSH } from '../actions/Cards';

export default function Cards(state = [], e) {
    switch (e.type) {
        case CARD_LIST:
            state = e.e
            return state
        case CARD_PUSH:
            state = state.concat([e.e])
            return state
        default:
            return state
    }
}
