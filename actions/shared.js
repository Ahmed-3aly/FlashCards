import { cardPush, deckPush, init } from '../utils/api';
import { card_List, card_Push } from './Cards';
import { deck_List, deck_Push } from './Decks';

function Init(json) {
    return (dispatch) => {
        if (json === null) {
            return
        }
        if (typeof json === 'undefined') {
            return
        }
        const data = JSON.parse(json)
        const decks = data.map(deck => deck.Name)
        const cards = []
        data.forEach((deck) => {
            if (deck.Quiz === null || typeof deck.Quiz === 'undefined') {
                return
            }
            const append = deck.Quiz.map(quiz => ({
                Name: deck.Name,
                Q: quiz.Q,
                A: quiz.A
            }))
            append.forEach(x => {
                cards.push(x)
            })
        })
        dispatch(deck_List(decks))
        dispatch(card_List(cards))
    }
}

export function handleInit() {
    return (dispatch) => {
        // load().then((data) => {
        //     dispatch(Init(data))
        // })
        const data = JSON.stringify(init)
        dispatch(Init(data))
    }
}

export function handleDeckPush(
    name,
) {
    return (dispatch) => {
        deckPush(name).then(() => {
            dispatch(deck_Push(name))
        })
    }
}

export function handleCardPush(
    name,
    question,
    answer
) {
    return (dispatch) => {
        cardPush(name, question, answer).then(() => {
            dispatch(card_Push(name, question, answer))
        })
    }
}
