const initialState = {
    login : {id : "", pwd : ""},
    register : {id : "", pwd : "", name : "", addr : ""},
    // data : null,
    // loading : false,
    // error : null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT" : 
            console.log("type 'CHANGE_INPUT' 동작 시 state : ", state);
            // console.log("action : ", action)

            // pwdChk 필드는 상태에 반영하지 않도록 필터링
            if (action.name === "pwdChk") return state;
            
            return {...state, 
                [action.form] : {...state[action.form], [action.name] : action.value}
            };
        case "List" : 
            return {...state, data : action.data}
            default : 
            return state;
    }
}

export {initialState, reducer}