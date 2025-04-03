import { useState } from "react"
import Input01Com from "../../components/form/Input01Com"

const Input01Con = () => {

    const [input, setInput] = useState({ username : '', password : ''})

    const onChange = (e) => {
        console.log(e.target)
        console.log(e.target.value)
        setInput({...input, [e.target.name] : e.target.value})
        // key가 유동적인 값으로 들어와야 한다면 대괄호로 묶어준다.
        // setInput({...input, e.target.name : e.target.value})
        // 이렇게 하면 에러 발생
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submit : ", input)
    }

    return (
        <>
            <Input01Com input={input} onSubmit={onSubmit} onChange={onChange}/>
        </>
    )
}

export default Input01Con