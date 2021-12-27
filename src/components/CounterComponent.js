import React, { Component } from "react";

import Button from './Button';
import {connect} from 'react-redux';
import { incrementCount, decrementCount } from "../actions/act";

import './CounterComp.css';

class CounterComponent extends Component {

    handleBtnActionIncrement = () => {
        this.props.onIncementClick(this.props.count)
    }

    handleBtnActionDecrement = () => {
        this.props.onDecrementClick(this.props.count)
    }
    render() {
    const {count} = this.props
    return (
        <div className="Counter">
            <h1>Simple Counter App</h1>
            <Button action = {this.handleBtnActionIncrement} buttonTitle = "+" />
            <h1>Count:{count}</h1>
            <Button action = {this.handleBtnActionDecrement} buttonTitle = "-" />
        </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        onIncementClick: (count) => {
            dispatch(incrementCount(count))
        },
        onDecrementClick: (count) => {
            if(count !==0)
            dispatch(decrementCount(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToprops) (CounterComponent);