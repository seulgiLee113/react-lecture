const UseRef04Com = ({inputRef, input, onChange, onSubmit, inputId, inputPwd}) => {

    return (
        <div>
            <form onSubmit={onSubmit}>

                {/* <input type="text" value={input.username} ref={inputId}
                    name="username" onChange={onChange} placeholder="username"/> <br/>
                <input type="text" value={input.password} ref={inputPwd}
                    name="password" onChange={onChange} placeholder="password"/> <br/> */}
                    
                                                            {/*  e는 자기 자신의 태그. */}
                <input type="text" value={input.username} ref={ e => inputRef.current[0] = e }
                    name="username" onChange={onChange} placeholder="username"/> <br/>
                <input type="text" value={input.password} ref={ e => inputRef.current[1] = e}
                    name="password" onChange={onChange} placeholder="password"/> <br/>
                <button>submit</button>
            </form>
        </div>
    )
}

export default UseRef04Com