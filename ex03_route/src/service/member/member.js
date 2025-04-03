let data_set = [
    {id:"aaa",pwd :"aaa", name : "홍길동", addr : '산골짜기'},
    {id:"bbb",pwd :"bbb", name:'김개똥', addr:'개똥별'},
    {id:"ccc",pwd :"ccc", name:'고길똥', addr:'마포구'},
]
const getList = () => data_set
const deleteList = (id) => {
    data_set = data_set.filter( data => data.id !== id )
}
const getOne = ( id ) => //결과가 배열로 나오기때문에 0번째 전달
    data_set.filter( data => data.id === id )[0]
export {getList , deleteList , getOne }
// 개별적으로 const 앞에 export를 써도 됨.
// default는 한 페이지에 하나씩 넣을 수 있다.