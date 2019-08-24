function counterreducer(state = 0, action) {
    console.log('inside')
    switch (action.type) {
        case "INCREMENT":
            console.log('+1')
            return state + 1;
        case "DECREMENT":
            console.log('-1')
            return state - 1;
        default:
            return state;
    }
}

export {counterreducer};