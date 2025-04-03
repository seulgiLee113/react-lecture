const LoginCom = ({onSubmit, username, password, onChange}) => {

    return (
        <>
        <form onSubmit={onSubmit}>
            <input type="text" name="id" onChange={onChange}
                    value={username}
            		placeholder="아이디" /><br/>
            <input type="text" name="pwd" onChange={onChange}
                    value={password}
            		placeholder="비밀번호" /><br/>
			<button>로그인</button>
        </form>
        </>
    )
}

export default LoginCom