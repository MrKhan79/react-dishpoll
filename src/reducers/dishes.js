import data from '../db/dishesDb';



const dishesReducer = (state = data, action) => {
    switch(action.type){
        case 'FETCH':
            return state
        case 'ADD1':
       state.map((i) => i.id == action.payload.id? 
       {id: i.id,
        rank1: action.payload.rank1,
    rank2: i.rank2,
rank3: i.rank3}: state)
            return state;
            case 'ADD2':
                state.map((i) => i.id == action.payload.id? 
                {id: i.id,
                 rank1: i.rank1,
             rank2: action.payload.rank2,
         rank3: i.rank3}: state)
                     return state;
                     case 'ADD3':
                        state.map((i) => i.id == action.payload.id? 
                        {id: i.id,
                         rank1: i.rank1,
                     rank2: i.rank2,
                 rank3: action.payload.rank3}: state)
                             return state;
           
            default:
                return state;
    }
    };
    
    export default dishesReducer;