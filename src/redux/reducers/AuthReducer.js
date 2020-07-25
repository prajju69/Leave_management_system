import { LOGIN, LOGOUT, ADD_HOLIDAY, ADD_LEAVE } from '../actions/types';

const INITITIAL_STATE = {
    token: '',
    userData: [],
    message: '',

};

export default (state = INITITIAL_STATE, action) => {
    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                token: action.payload.data.accessToken,
                userData: action.payload.data
            };


        case ADD_HOLIDAY:
            return {
                ...state,
                message: action.payload.message
            };


        case ADD_LEAVE:
            return {
                ...state,
                message: action.payload.message
            }

        case LOGOUT:
            return INITITIAL_STATE;

        default:
            return state;
    }
};
