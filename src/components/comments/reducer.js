import { ReactReducer } from '../small-components/redux';

ReactReducer.register('comments', (state = {'name': 'harley'}, action) => {
    switch(action.type) {
        default:
            return state;
    } 
});