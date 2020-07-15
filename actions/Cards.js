export const CARD_LIST = 'CARD_LIST'

export function card_List(e)
{
    return {
        type: CARD_LIST,
        e: e
    }
}

export const CARD_PUSH = 'CARD_PUSH'

export function card_Push(
    name,
    question,
    answer
)
{
    return {        
        type: CARD_PUSH,
        e: {
            Name: name,
            Q: question,
            A: answer
        }
    }
}
