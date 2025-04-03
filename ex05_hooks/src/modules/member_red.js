const initialState = {
    login : {id : "", pwd : ""},
    register : {id : "", pwd : "", name : "", addr : ""},
    data : null,
    loading : false,        // true : 데이터 불러오는 중, false : 데이터를 다 불러옴.
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
        case "LIST" : 
            return {...state, data : action.data}
        case "LOADING" : 
            console.log('loading action 실행')
            return { ...state, loading : true, error : null}
        case "FINISHED" : 
            console.log('finished 액션 실행')
            return { ...state, loading : false, error : null}
        case "ERROR" : 
            return {...state, loading : false, error : action.error}
        default : 
            return state;
    }
}

export {initialState, reducer}