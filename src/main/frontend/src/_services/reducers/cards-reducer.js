import DbService from "../DbService";

const SEARCH = 'SEARCH';

let initialState = {
    cards: [DbService.getCards('')],
    search: ''
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                cards: [DbService.getCards(state.search)],
            }

        default: return state
    }
}

export const searchCreator = (text) => {
    return {
        type: SEARCH,
        search: text,
    };
}

export default cardsReducer;
