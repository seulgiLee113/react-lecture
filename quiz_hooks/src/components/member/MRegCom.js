const MRegCom = ( {reg, onChange, onSubmit, inputCheck} ) => {

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" name="id" value={reg.id} 
                        onChange={onChange} ref={e => inputCheck.current[0] = e}/><br/>
                <input type="password" name="pwd" value={reg.pwd} 
                        onChange={onChange} ref={e => inputCheck.current[1] = e}/><br/>
                <input type="password" name="pwdChk" value={reg.pwdChk}  
                        onChange={onChange} ref={e => inputCheck.current[2] = e}/><br/>
                <input type="text" name="name" value={reg.name} 
                        onChange={onChange} ref={e => inputCheck.current[3] = e}/><br/>
                <input type="text" name="addr" value={reg.addr} 
                        onChange={onChange} ref={e => inputCheck.current[4] = e}/><br/>
                <button>회원가입</button>
            </form>
        </>
    )
}

export default MRegCom