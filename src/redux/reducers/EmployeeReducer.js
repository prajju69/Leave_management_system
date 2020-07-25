import { ADD_EMPLOYEE, GET_EMPLOYEE, GET_EMP_DATA, DELETE_EMPLOYEE, UPDATE_EMPLOYEE, GET_EMPLOYEEBYID } from '../actions/types';
import { act } from 'react-test-renderer';

const INITITIAL_STATE = {
  message: '',
  employees: [],
  empData: [],
  updateEmp: '',
  deleteEmployee: '',
  updateEmployee: '',
  getEmployeeById: []
};

export default (state = INITITIAL_STATE, action) => {

  switch (action.type) {

    case ADD_EMPLOYEE:
      return {
        ...state,
        message: action.payload.message
      };

    case GET_EMPLOYEE:
      return {
        ...state,
        employees: action.payload
      }

    case GET_EMP_DATA:
      return {
        ...state,
        empData: action.payload.data
      }

    case DELETE_EMPLOYEE:
      return {
        ...state,
        deleteEmployee: action.payload
      }

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        updateEmp: action.payload
      }
    case GET_EMPLOYEEBYID:
      return {
        ...state,
        getEmployeeById: action.payload
      }


    default:
      return state;
  }
};
