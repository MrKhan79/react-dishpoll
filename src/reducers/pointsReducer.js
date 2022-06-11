import data from '../db/dishesDb';

const pointsReducer = (state = data, action) => {
    switch(action.type){
        case 'ADD_POINT':
            state.map((i)=>i.points=action.payloadi)
            return state;
        default:
        return state
        
    }
    };
    
    export default pointsReducer;