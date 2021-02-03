import { ReactReducer } from '../small-components/redux';

ReactReducer.register('navigation', (state = {}, action) => {
    switch(action) {
        default:
            return state;
    }
})