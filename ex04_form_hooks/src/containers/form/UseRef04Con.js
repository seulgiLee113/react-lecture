import { useRef, useState } from "react"
import UseRef04Com from "../../components/form/UseRef04Com"

const init = {username : "", password : ""}

const UseRef04Con = () => {

    const [input, setInput] = useState(init);

    // 특정 태그에 대한 id에 접근하기
    const inputId = useRef();
    const inputPwd = useRef();

    const inputRef = useRef([]);

    const onChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault(); 

        // useRef를 배열에 담아 활용하는 방법
        for(let i = 0; i< inputRef.current.length; i++) {
            if(inputRef.current[i].value === "") {
                alert(inputRef.current[i].name + " empty")
                inputRef.current[i].focus()
                return
            }
        }

        /* 
        // useRef 를 inputId, inputPwd 변수로 지정해서 활용하는 방법
        // 사용자가 필수 항목을 입력,저장 했느냐 검증할 수 있음. 비밀번호가 있냐 없냐를 검증할 수 있음.
        if(input.username === "" ) {
            alert("username is empty")
            inputId.current.focus()     // input 박스에 자동으로 커서가 깜빡이게 만들어줌 
        } else if (input.password === "") {
            alert("password is empty")
            inputPwd.current.focus()
        } else {
            // 모든 데이터 입력 후 전송
        }
        */
    }

    return (
        <>
            <UseRef04Com inputRef={inputRef} inputId={inputId} inputPwd={inputPwd} 
            input={input} onChange={onChange} onSubmit={onSubmit}/>
        </>
    )
}

export default UseRef04Con