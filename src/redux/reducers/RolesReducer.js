import { GET_ROLES } from '../actions/types';

const INITITIAL_STATE = {
  roles:[]
};

export default (state = INITITIAL_STATE, action) => {

    switch (action.type) {

        case GET_ROLES:
            console.log("reducerr", action.payload)
            return {
                ...state,
                roles: action.payload
            };
            


        default:
            return state;
    }
};
