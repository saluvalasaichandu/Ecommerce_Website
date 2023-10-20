import * as types from './actionTypes';
const initialState={
    loading:false,
    basket:[],
    user:null,
    error:null,
}
const basketReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.REGISTER_START:
        case types.LOGIN_START:
            //state is same so we can append register and login
            return{
                ...state,
                loading:true
            };
            case types.REGISTER_SUCCESS:
            case types.LOGIN_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    user:action.payload
                };
            case types.REGISTER_FAIL:
            case types.LOGIN_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
        default:
            return state;
    }
};
export default basketReducer;