import axios from 'axios';
import { baseUrl } from '../../utils/Utils';
import {
  ADD_EMPLOYEE, GET_EMPLOYEE, GET_EMP_DATA,
  DELETE_EMPLOYEE, UPDATE_EMPLOYEE, GET_EMPLOYEEBYID
} from './types';

const addEmployeeSuccess = (data) => {
  return (
    {
      type: ADD_EMPLOYEE,
      payload: data
    }
  );
}

export const getEmployee = () => async dispatch => {
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/get-employees`)
      .then((res) => {
        resolve(res)
        dispatch(getEmployeeSuccess(res))
      })
      .catch((err) => {
        reject(err)
        dispatch(getEmployeeSuccess(err.response))
      })
  })
}


const updateEmployeeSuccess = (data) => {
  return (
    {
      type: UPDATE_EMPLOYEE,
      payload: data
    }
  )
}


const getEmployeeSuccess = (data) => {
  return (
    {
      type: GET_EMPLOYEE,
      payload: data
    }
  );
}

const deleteEmployeeSuccess = (data) => {
  return (
    {
      type: DELETE_EMPLOYEE,
      payload: data
    }
  );
}


const getEmployeeByIdSuccess = (data) => {
  return (
    {
      type: GET_EMPLOYEEBYID,
      payload: data
    }
  );
}


export const addEmployee = (data) => async dispatch => {
  return new Promise((resolve, reject) => {
    axios.post(`${baseUrl}/add-employee`, data)
      .then((res) => {
        resolve(res)
        dispatch(addEmployeeSuccess(res))
      })
      .catch((err) => {
        reject(err)
        dispatch(addEmployeeSuccess(err.response))
      })
  })
}


export const updateEmployee = (data) => async dispatch => {
  return new Promise((resolve, reject) => {
    console.log("actionId", data);
    axios.put(`${baseUrl}/update-employee/${data.id}`, data.updateData)
      .then((res) => {
        resolve(res)
        dispatch(updateEmployeeSuccess(res))
      })
      .catch((err) => {
        reject(err)
        dispatch(updateEmployeeSuccess(err.response))
      })
  })
}

const getEmployeeData = (data) => {
  return (
    {
      type: GET_EMP_DATA,
      payload: data
    }
  );
};

export const getEmployeeDataAction = (data) => async dispatch => {
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/get-employee/${data}`)
      .then((res) => {
        console.log("zzcxzczx..", res)
        resolve(res)
        dispatch(getEmployeeData(res))
      }).catch((err) => {
        reject(err);
        dispatch(getEmployeeSuccess(err.response))
      })
  })
}

export const deleteEmployee = (data) => async dispatch => {
  return new Promise((resolve, reject) => {
    axios.delete(`${baseUrl}/delete-employee/${data}`)
      .then((res) => {
        resolve(res)
        dispatch(deleteEmployeeSuccess(res))
      })
      .catch((err) => {
        reject(err)
        dispatch(deleteEmployeeSuccess(err.response))
      })
  })
}

const editEmployeeSuccess = (data) => {
  return (
    {
      type: UPDATE_EMPLOYEE,
      payload: data
    }
  );
}

export const editEmployeeDataAction = (data) => async dispatch => {
  return new Promise((resolve, reject) => {
    axios.put(`${baseUrl}/update-employee/${data}`)
      .then((res) => {
        resolve(res);
        dispatch(editEmployeeSuccess(res))
      })
      .catch((err) => {
        reject(err);
        dispatch(editEmployeeSuccess(err.response))
      })
  });
}


export const getEmployeeById = (id) => async dispatch => {
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/get-employee/${id}`)
      .then((res) => {
        resolve(res)
        dispatch(getEmployeeByIdSuccess(res))
      })
      .catch((err) => {
        reject(err)
        dispatch(getEmployeeByIdSuccess(err.response))
      })
  })
}
