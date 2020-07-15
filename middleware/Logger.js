const Logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The action:')
    console.log(action)
    console.log('')
    const returnValue = next(action)
    console.log('The new state:')
    console.log(store.getState())
    console.log('')
    console.groupEnd()
    return returnValue
}

export default Logger
