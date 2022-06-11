import data from '../db/dishesDb';



const dishesReducer = (state = data, action) => {
    switch(action.type){
        case 'FETCH':
            return state;

        case 'ADD_POINTS':
            state.map((i)=>i.id == action.payload.id?i.points=action.payload.points: "")
            return state;

               default:
                return state;
    }
    };

    
    export default dishesReducer;