import axios from 'axios';
import { FETCHDATA } from './types';


export const fetchmissionData = () => {
    return(dispatch) =>{
        axios.get(`https://api.spacexdata.com/v3/launches?limit=100`)
        .then(response => {
            dispatch(fetchmission(response.data))
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export const fetchmission = (data) => {
    return {
        type: FETCHDATA,
        payload: data
    }
}