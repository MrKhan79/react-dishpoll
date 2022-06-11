export const fetch = () =>{
    return{
        type: 'FETCH',
    }
}

export const addPoints = (data) =>{
    return{
        type: 'ADD_POINTS',
        payload: data
    }
    
}
