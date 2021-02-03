import { ReactReducer } from '../small-components/redux';

ReactReducer.register('posts', (state = {}, action) => {
    switch(action) {
        default:
            return state;
    }
})