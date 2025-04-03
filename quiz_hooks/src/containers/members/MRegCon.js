import { useEffect, useRef, useState } from "react"
import { addOne, getList, register } from "../../service/member/member"
import { useNavigate } from "react-router-dom"
import MRegCom from "../../components/member/MRegCom"

const registerObje = {id : '', pwd : '', pwdChk:'', name : '', addr : ''}

const MRegCon = () => {

    const [reg, setReg] = useState(registerObje)

    const inputCheck = useRef([]);

    const navigate = useNavigate();

    const onChange = (e) => {
        console.log(e.target.value)
        setReg({ ...reg, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submit reg : ", reg)
        
        // 모든 값이 들어왔는지 확인
        let i = 0;
        for(; i<inputCheck.current.length; i++) {
            if(inputCheck.current[i].value === "") {
                alert(inputCheck.current[i].name + " 항목을 입력하세요.")
                inputCheck.current[i].focus()
                break;
            }  
        }

        // 비밀번호 일치 여부 확인
            if( i === inputCheck.current.length ) {
                if(inputCheck.current[1].value !== inputCheck.current[2].value) {
                    alert("비밀번호가 일치하지 않습니다.");
                    inputCheck.current[1].focus();
                    setReg({...reg, pwd : "", pwdChk : ""});
                } else {
                    const user = {...reg}
                    delete user.pwdChk;
                    console.log("user : ", user);
                    register(user);
                    alert("회원가입 완료");
                    navigate("/member/list");
                }
            }
    }

    return (
        <>
            <MRegCom reg={reg} onChange={onChange} onSubmit={onSubmit}
                        inputCheck={inputCheck}/>
        </>
    )

}

export default MRegCon