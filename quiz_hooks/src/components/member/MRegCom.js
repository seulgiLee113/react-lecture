const MRegCom = ( {id, pwd, name, addr, reg, onChange, onSubmit, inputCheck} ) => {

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" name="id" valie={id} placeholder="id"
                        onChange={onChange} ref={e => inputCheck.current[0] = e}/><br/>
                <input type="password" name="pwd" value={pwd} placeholder="password"
                        onChange={onChange} ref={e => inputCheck.current[1] = e}/><br/>
                <input type="password" name="pwdChk" value={reg.pwdChk}  placeholder="password check"
                        onChange={onChange} ref={e => inputCheck.current[2] = e}/><br/>
                <input type="text" name="name" value={name} placeholder="name"
                        onChange={onChange} ref={e => inputCheck.current[3] = e}/><br/>
                <input type="text" name="addr" value={addr} placeholder="addr"
                        onChange={onChange} ref={e => inputCheck.current[4] = e}/><br/>
                <button>회원가입</button>
            </form>
        </>
    )
}

export default MRegCom