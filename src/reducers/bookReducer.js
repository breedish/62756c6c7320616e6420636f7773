import { ADD_BOOK } from '../actions'

const initialState = {
    books: [{ name: 'East', author: 'John Steinbeck' }]
}

const bookReducer = (state = initialState) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                books: [
                    ...state.books,
                    action.book
                ]
            }
        default:
            return state; Í
    }
};
export default bookReducer;