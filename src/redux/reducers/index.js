import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import RolesReducer from './RolesReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  form: formReducer,
  auth: AuthReducer,
  roles: RolesReducer,
  employee: EmployeeReducer
});
