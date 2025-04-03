const initialState = {
    login : {id : "", pwd : ""},
    register : {id : "", pwd : "", name : "", addr : ""},
    data : null,
    loading : false,
    error : null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT" : 
            // console.log("state : ", state);
            // console.log("action : ", action)
            return {...state, 
                [action.form] : {...state[action.form], [action.name] : action.value}
            };
            default : 
            return state;
    }
}

export {initialState, reducer}