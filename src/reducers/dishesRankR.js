import dishRank from "../db/userChoices";



const dishesRank = (state = dishRank, action) => {
    switch(action.type){
        case 'SETR1':
            state.map((i)=>i.id == action.payload.id?i.rank1=action.payload.rank1: i)
            return state

        case 'SETR2':
            state.map((i)=>i.id == action.payload.id?
            i.rank2=action.payload.rank2: i)
            return state

        case 'SETR3':
            state.map((i)=>i.id == action.payload.id?  i.rank3=action.payload.rank3: i)
            return state

            default:
                return state;
    }
    };
    
    export default dishesRank;