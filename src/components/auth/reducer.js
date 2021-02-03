import { ReactReducer } from '../small-components/redux';

ReactReducer.register('auth', (state = {}, action) => {
    switch(action.type) {
        case 'LOGGED_IN': {
            return {
                ...state,
                loggendIn: true
            }
        }
        default:
            return state;
    }
})