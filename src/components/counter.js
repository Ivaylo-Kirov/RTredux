import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                {this.props.value}
                <button onClick={this.props.onIncrChange}>Increment</button>
                <button onClick={this.props.onBigIncrChange}>BIG Increment</button>
                <button onClick={this.props.onDecrChange}>Decrement</button>
            </div>
        );
    }
}

export {Counter};