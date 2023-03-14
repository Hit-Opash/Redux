const value = 0;

const changeNumber = (state=value,action) => {

    switch(action.type){
        case "INCREMENT" :
            return state + action.payload;
        case "DECREMENT" :
            return state - action.payload;
        default:
            return state;
    }
}

const hit = (state=100,action)=>{

    switch(action.type){
        case "HIT" :
            return state + action.payload;
        default:
            return state;
    }
    
}

export default changeNumber;
export {hit};
