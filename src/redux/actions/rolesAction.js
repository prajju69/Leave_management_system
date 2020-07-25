import axios from 'axios';
import { baseUrl } from '../../utils/Utils';
import { GET_ROLES } from './types';

const getRolesSuccess = (data) => {
  return (
    {
      type: GET_ROLES,
      payload: data
    }
  );
};


export const getRolesAction = (data) => async dispatch => {
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/get-roles`)
      .then((res) => {
        console.log("bvg....1111...", res);
        resolve(res)
        dispatch(getRolesSuccess(res))
      })
      .catch((err) => {
        reject(err)
        dispatch(getRolesSuccess(err.response))
      })
  })
}