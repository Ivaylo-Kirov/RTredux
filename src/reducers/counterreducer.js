function counterreducer(state = 0, action) {
    console.log('inside')
    switch (action.type) {
        case "INCREMENT":
            console.log('+1')
            return state + 1;
        case "BIG INCREMENT":
            console.log('+10')
            return state + 10;
        case "DECREMENT":
            console.log('-1')
            return state - 1;
        default:
            return state;
    }
}

export {counterreducer};