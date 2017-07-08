// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state
// and returns new state(do not mutate the state)
// *** every reducer is going to run whenever the action is dispatched

function data(state = [], action){
    switch(action.type) {
        case 'SELECT_OPTION' : {
            const i = action.i;
            return [
                ...state.slice(0,i), // before the one we are updating
                {...state[i], selectedOption: action.option, marked: true},
                ...state.slice(i + 1), // after the one we are updating
            ];
        }

        case 'MARK_INCORRECT' : {
            const i = action.i;
            return [
                ...state.slice(0,i), // before the one we are updating
                {...state[i], incorrect: action.value},
                ...state.slice(i + 1), // after the one we are updating
            ];
        }

        case 'CLEAR_FORM' : {
            const newState = state.map((data) => ({
                ...data,
                selectedOption: null,
                marked: false,
                incorrect: false
            }));
            return newState;
        }

        default:
            return state;
    }
}

export default data;
