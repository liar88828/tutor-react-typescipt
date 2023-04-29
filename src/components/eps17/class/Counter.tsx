import { Component } from 'react'


type CounterProps = {
    message: string

}
type CounterState = { count: number }
export class Counter extends Component<CounterProps, CounterState> {
    state = { count: 0 }

    handleClick = () => {
        this.setState((prev) => ({ count: prev.count + 1 }))
    }

    render() {
        return (
            <div>
                {this.state.count} - {this.props.message}
                <button onClick={this.handleClick}>Increment +</button>
            </div>
        )
    }
}

export default Counter