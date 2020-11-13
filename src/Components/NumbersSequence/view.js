import React, { useReducer } from 'react';
import './style.css';
import { FIBONACCI, AKE, LAB, AKELAB, TYPE_VALUE_GREATER_THAN_ZERO, WRONG_VALUE_TYPED, FIBONACCI_RESPONSE, NUMBERS_REPLACEMENT_RESPONSE } from '../../Utils/constants';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function NumbersSequence({ component = FIBONACCI }) {

    const initialState = {
        fibunacciNumberTyped: "", fibunacciHasError: false, fibunacciResponse: [],
        multiplesNumberTyped: "", multiplesHasError: false, multiplesResponse: [],
    };

    const [state, dispatch] = useReducer(myReducer, initialState);

    const validateNumber = (number) => {
        const regex = /^[1-9][0-9]*$/;
        if (regex.test(number)) {
            component === FIBONACCI ? dispatch({ type: 'setFibunacciHasError', data: false }) : dispatch({ type: 'setMultiplesHasError', data: false })
            component === FIBONACCI ? dispatch({ type: 'setFibunacciNumberTyped', data: number }) : dispatch({ type: 'setMultiplesNumberTyped', data: number })
        }
        else component === FIBONACCI ? dispatch({ type: 'setFibunacciHasError', data: true }) : dispatch({ type: 'setMultiplesHasError', data: true })
    }

    const calculateFibonacci = (e) => {
        e.preventDefault();

        if (state.fibunacciNumberTyped === "") return;

        let a = 1, b = 0, temp;
        let fibonacciSequence = [1]; //first value is 1
        for (let i = 1; i < state.fibunacciNumberTyped; i++) {
            temp = a;
            a = a + b;
            b = temp;
            fibonacciSequence = fibonacciSequence.concat(a);
        }
        dispatch({ type: 'setFibunacciResponse', data: fibonacciSequence })
    }

    const replaceNumbers = (e) => {
        e.preventDefault();

        let alphanumerics = [];
        for (let i = 1; i <= state.multiplesNumberTyped; i++) {
            if (i % 3 === 0 && i % 5 === 0) alphanumerics = alphanumerics.concat(AKELAB);
            else if (i % 3 === 0) alphanumerics = alphanumerics.concat(AKE);
            else if (i % 5 === 0) alphanumerics = alphanumerics.concat(LAB);
            else alphanumerics = alphanumerics.concat(i);
        }
        dispatch({ type: 'setMultiplesResponse', data: alphanumerics })
    }

    return (
        <form>
            <Box className="wrapper">
                <TextField variant="outlined" placeholder={TYPE_VALUE_GREATER_THAN_ZERO} defaultValue={component === FIBONACCI ? state.fibunacciNumberTyped : state.multiplesNumberTyped}
                    onChange={(e) => validateNumber(e.currentTarget.value)} maxLength={10} className="numbersInput" />
                <Button className="button" variant="outlined" color="primary" onClick={component === FIBONACCI ? calculateFibonacci : replaceNumbers} disabled={component === FIBONACCI ? state.fibunacciHasError : state.multiplesHasError}>
                    Calcular
                </Button>
            </Box>

            <label hidden={component === FIBONACCI ? !state.fibunacciHasError : !state.multiplesHasError}>{WRONG_VALUE_TYPED}</label>

            <Box className="response_wrapper">
                <h2>{component === FIBONACCI ? FIBONACCI_RESPONSE : NUMBERS_REPLACEMENT_RESPONSE}</h2>
                <textarea defaultValue={component === FIBONACCI ? state.fibunacciResponse.join(", ") : state.multiplesResponse.join(", ")}></textarea>
            </Box>

        </form>
    );

}

function myReducer(state, action) {
    switch (action.type) {
        case "setFibunacciNumberTyped":
            return {
                ...state,
                fibunacciNumberTyped: action.data
            }

        case "setFibunacciHasError":
            return {
                ...state,
                fibunacciHasError: action.data
            }

        case "setFibunacciResponse":
            return {
                ...state,
                fibunacciResponse: action.data
            }

        case "setMultiplesNumberTyped":
            return {
                ...state,
                multiplesNumberTyped: action.data
            }

        case "setMultiplesHasError":
            return {
                ...state,
                multiplesHasError: action.data
            }

        case "setMultiplesResponse":
            return {
                ...state,
                multiplesResponse: action.data
            }

        default:
            return state;
    }
}