export const DECK_LIST = 'DECK_LIST'

export function deck_List(e)
{
    return {
        type: DECK_LIST,
        e: e
    }
}

export const DECK_PUSH = 'DECK_PUSH'

export function deck_Push(
    name
)
{
    return {
        type: DECK_PUSH,
        e: name,
    }
}
