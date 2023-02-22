import * as counter from './constants';

let inisialite = {
    count: 0
}
const counterReducer = (state = inisialite, action )=>{
    switch(action.type){
        case counter.INC :
            return{
                ...state,
                count: state.count + action.count
            }
        case counter.DEC :
            return {
                count: state.count - action.count
            }
            default:
                return state
    }
    
}
export default counterReducer;