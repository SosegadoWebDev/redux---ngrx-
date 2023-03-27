import { Action } from "../ngrx-fake/ngrx";

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

const multiplicarAction: Action = {
    type: 'MULTIPLICAR', payload: 2
};

const resetAction: Action = {
    type: 'RESET'
}

export { incrementadorAction, decrementadorAction, multiplicarAction,resetAction };