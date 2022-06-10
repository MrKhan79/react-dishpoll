export const get = () =>{
    return{
        type: 'GET',
    }
}

export const setUser = (user) =>{
    return{
        type: 'SET',
        payload: user
    }
}