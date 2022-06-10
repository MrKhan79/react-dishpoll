const currentUserReducer = (state = {
    "id": 0,
    "username": "",
    "password": ""
  }, action) => {
    switch(action.type){
        case 'GET':
            return state
        case 'SET':
            return state = action.payload
            default:
                return state;
    }
    };
    
    export default currentUserReducer