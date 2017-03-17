import {GET_DEMO_ERR,GET_DEMO_SUCC} from './type'

const getDemoSucc = (data) => {
    return {
        type: GET_DEMO_SUCC,
        payload: {
            data
        }
    }
};

const getDemoErr = () => {
    return {
        type: GET_DEMO_ERR,
    }
};

/**
 * 用 async 触发 aciton
 * @param params
 * @returns {function(*)}
 */
export function getDemo(params) {
    return async (dispatch) =>{
        try {
            //do something with params
            dispatch(getDemoSucc(data))
        } catch(e) {
            dispatch(getDemoErr())
        }
    }
}

/**
 * 用 Promise 触发 aciton
 * @param params
 * @returns {function(*)}
 */
export function getDemo_P(params) {
    return (dispatch) =>{
        //a example with fetch
        fetch('url').then((res)=>{
            return res.json()
        }).then((json)=>{
            //do something with json
            dispatch(getDemoSucc(data))

        }).catch(()=>{
            dispatch(getDemoErr())
        })
    }
}