import { useState } from "react";
import RadioBtn03Com from "../../components/form/RadioBtn03Com"

const init = [
    {key : 1, value : '10대', name : 'age', isChecked : false},
    {key : 2, value : '20대', name : 'age', isChecked : false},
    {key : 3, value : '30대', name : 'age', isChecked : false},
]

const RadioBtn03Con = () => {

    const [list, setList] = useState(init);

    const onChange = (key) => {
        console.log(key)

        // a.key와 init의 key와 같으면 isChecked를 true로 한다.
        // --> a.key는 init에 있는 key이고, 오른쪽 변수의 key는 사용자가 선택한 key임.
        // 그래서 서로 값이 같으면 true이니까 init 배열 중 그 키값에 해당하는 객체의 isChecked가 false 에서 true로 변경됨.
        // 이걸 반복하는 거임.
        const changeList = list.map( a => ({ ...a, isChecked : a.key === key}))
        // const changeList = list.map( a => 
        //     a.key === key ? {...a, isChecked : !a.isChecked} : {...a, isChecked: false}
        // )

        setList(changeList);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submit..... ", list);
    }

    return (
        <>
            <RadioBtn03Com list={list} onChange={onChange} onSubmit={onSubmit}/>
        </>
    )
}

export default RadioBtn03Con