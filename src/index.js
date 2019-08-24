import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './components/counter';
import {counterreducer} from './reducers/counterreducer';
import {createStore} from 'redux';

const store = createStore(counterreducer);

const handleIncr = () => {
    console.log('should incr');
    store.dispatch({type: "INCREMENT"});
}

const handleDecr = () => {
    console.log('should decr');
    store.dispatch({type: "DECREMENT"});
}

// this trickiness below is the 'subscribe' thing documentation mentioned can be avoid by using react-redux
// basically, this made it so that render gets called after each reducer update due to associating it with store.subscribe()

const render = () => {
    ReactDOM.render(<Counter value={store.getState()} onIncrChange={handleIncr} onDecrChange={handleDecr} />, document.getElementById('root'));
}
render();
store.subscribe(render);