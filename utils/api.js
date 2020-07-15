import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'DECKS'

export const init = [
    {
        Name: 'Deck 1',
        Quiz: [
            { Q: 'Is Question 1?', A: 'true' },
            { Q: 'Is Question 2?', A: 'false' },
        ]
    },
    {
        Name: 'Deck 2',
        Quiz: [
            { Q: 'Is Question 1?', A: 'true' },
            { Q: 'Is Question 2?', A: 'false' },
        ]
    }
]

function restore() {
    return AsyncStorage.getItem(STORAGE_KEY).then(json => {        
        return JSON.parse(json)
    }).catch(() => {
        return null
    })
}

export function load() {
    return restore().then((result) => {
        if (result === null) {
            return save(true, init).then(() => {
                return JSON.parse(init)
            }).catch(() => {
                return null
            })
        }
        return result
    }).catch(() => {
        return null
    })
}

function save(
    isLoading,
    data
) {
    if (data === null || typeof data === 'undefined') {
        return
    }
    const json = JSON.stringify(data)
    return AsyncStorage.setItem(STORAGE_KEY, json).then(() => {
        if (isLoading) {
            return
        }
        load()
    }).catch(() => {
        return
    })
}

export function deckPush(
    name
) {
    return restore().then(json => {
        json.push({
            Name: name,
            Quiz: []
        })
        save(false, json)
    })
}

export function cardPush(
    name,
    question,
    answer
) {
    return restore().then(json => {
        const match = json.filter(x => x.Name === name)
        if (match === null || typeof match === 'undefined') {
            return
        }
        const deck = match[0]
        if (deck === null || typeof deck === 'undefined') {
            return
        }
        deck.Quiz.push({
            Q: question,
            A: answer
        })
        save(false, json)
    })
}
