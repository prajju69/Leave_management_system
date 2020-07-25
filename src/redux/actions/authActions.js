import axios from 'axios';
import { baseUrl } from '../../utils/Utils';
import { LOGIN, LOGOUT } from './types';
import { ADD_HOLIDAY, ADD_LEAVE } from './types';

const addHolidaySuccessful = (data) => {
  return (
    {
      type: ADD_HOLIDAY,
      payload: data
    }
  );
};

export const addHoliday = (data) => async dispatch => {
  return new Promise((resolve, reject) => {
    axios.post(`${baseUrl}/add-holiday`, data)
      .then((res) => {
        console.log("aasss", res);
        resolve(res)
        dispatch(addHolidaySuccessful(res))
      })
      .catch((err) => {
        reject(err)
        dispatch(addHolidaySuccessful(err.response))
      })
  })
}

const addLeaveSuccessful = (data) => {
  return (
    {
      type: ADD_LEAVE,
      payload: data
    }
  );
};

export const addLeave = (data) => async dispatch => {
  return new Promise((resolve, reject) => {
    axios.post(`${baseUrl}/add-leave`, data)
      .then((res) => {
        console.log("aasss1", res);
        resolve(res)
        dispatch(addLeaveSuccessful(res))
      }).catch((err) => {
        reject(err)
        dispatch(addLeaveSuccessful(err.response))
      })
  })
}


const loginSuccess = (data) => {
  return (
    {
      type: LOGIN,
      payload: data
    }
  );
};

export const loginAction = (dispatch, data) => async () => {
  return new Promise((resolve, reject) => {
    const loginData = {
      "email": data.email,
      "password": data.password
    }
    axios.post(`${baseUrl}/signin`, loginData)
      .then((res) => {
        resolve(res)
        dispatch(loginSuccess(res))
      })
      .catch((err) => {
        reject(err)
        dispatch(loginSuccess(err.response))
      })
  })
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}
